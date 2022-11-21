import React, { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { PageLayout, SearchGridItem } from "_components";
import { AppContext } from "_contexts";
import { GiphyServices } from "_services";
import { VIEW_CONST, NAVIGATION_SCREEN_NAMES, ALERT } from "_constants";
import { Giphy } from "_models";
import { useNotification } from "_hooks";

const SearchScreen = ({ navigation }) => {
  const [gifResults, setGifResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = useContext(AppContext);
  const { set } = useNotification();

  const searchGifs = async (text) => {
    setLoading(true);
    setGifResults([]);
    try {
      const response = await GiphyServices.searchGif(text);
      setGifResults(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      set({
        type: "error",
        message: ALERT.somethingWentWrong,
      });
    }
  };

  const navigateTo = (item) => {
    navigation.navigate(NAVIGATION_SCREEN_NAMES.DETAILS, { item: item });
  };

  const renderedGifItem = ({ item }) => {
    const itemData = new Giphy(item);
    return (
      <SearchGridItem
        title={itemData.title}
        onPress={() => navigateTo(itemData)}
        source={itemData.getJpgUrl()}
        thumbnailSource={itemData.getFixedSmallUrl()}
      />
    );
  };

  useEffect(() => {
    if (state.search.text !== "") {
      searchGifs(state.search.text);
    }
  }, [state.search]);

  return (
    <PageLayout title={VIEW_CONST.SEARCH.title} loading={loading}>
      <FlatList
        testID={VIEW_CONST.SEARCH.flatListTestID}
        initialNumToRender={3}
        data={gifResults}
        renderItem={renderedGifItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </PageLayout>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchScreen;

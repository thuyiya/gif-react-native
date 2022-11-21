import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { SearchBar } from "_components";
import { AppContext } from "_contexts";
import { NAVIGATION_SCREEN_NAMES } from "_constants";
import { Colors } from "_styles";

const SearchHeader = ({ navigation }) => {
  const { setState } = useContext(AppContext);

  const onCancel = () => {
    navigation.goBack();
  };

  const onChangeText = (text) => {
    setState({
      search: {
        text: text,
      },
    });
  };

  const onChange = () => {
    navigation.navigate(NAVIGATION_SCREEN_NAMES.SEARCH);
  };

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        onCancel={() => onCancel()}
        onChangeText={(text) => onChangeText(text)}
        onChange={() => onChange()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
  },
});

SearchHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchHeader;

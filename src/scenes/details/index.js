import React from "react";
import PropTypes from "prop-types";
import { GifCard, PageLayout } from "_components";
import { Common } from "../../utils";
import { VIEW_CONST } from "_constants";

const DetailScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: Common.truncate(
        route.params.item.title,
        VIEW_CONST.DETAILS.titleCharacterLength
      ),
    });
  }, []);

  return (
    <PageLayout>
      <GifCard
        testID={VIEW_CONST.DETAILS.giftCardTestID}
        thumbnailSource={route.params.item.getThumbnailGif()}
        source={route.params.item.getOriginalGif()}
        title={route.params.item.title}
        url={route.params.item.url}
      />
    </PageLayout>
  );
};

DetailScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }),
};

export default DetailScreen;

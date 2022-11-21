import React from "react";
import { GifCard, PageLayout } from "_components";
import { GiphyServices } from "_services";
import { VIEW_CONST, ALERT } from "_constants";
import { Giphy } from "_models";
import { useNotification } from "hooks";

const HomeScreen = () => {
  const [random, setRandoms] = React.useState(new Giphy({}));
  const [loading, setLoading] = React.useState({});
  const { set } = useNotification();

  const getRandom = async () => {
    try {
      setLoading(true);
      const response = await GiphyServices.fetchRandom();
      setRandoms(new Giphy(response.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      set({
        type: "error",
        message: ALERT.somethingWentWrong,
      });
    }
  };

  React.useEffect(() => {
    getRandom();
    // eslint-disable-next-line no-undef
    const callEveryTenSecond = setInterval(
      getRandom,
      1000 * VIEW_CONST.HOME.randomDataFetchSec
    );
    return () => {
      // eslint-disable-next-line no-undef
      clearInterval(callEveryTenSecond);
    };
  }, []);

  return (
    <PageLayout title={VIEW_CONST.HOME.title} loading={loading}>
      <GifCard
        testID={VIEW_CONST.HOME.giftCardTestID}
        thumbnailSource={random.getThumbnailGif()}
        source={random.getOriginalGif()}
        title={random.title}
        url={random.url}
      />
    </PageLayout>
  );
};

export default HomeScreen;

import React, { useRef } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Skeleton, ProgressiveImage, AgeBadge } from "_components";
import { VIEW_CONST, ANIMATION_CONFIG } from "_constants";
import { Spacing } from "_styles";

const AGE_FONT_SIZE = 22;
const AGE_LABEL_RADIUS = Spacing.scale(7, AGE_FONT_SIZE);

const GifCard = ({ thumbnailSource, source, title, url }) => {
  const fadeAnim = useRef(
    new Animated.Value(ANIMATION_CONFIG.GIFT_CARD.initialValue)
  ).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, ANIMATION_CONFIG.GIFT_CARD.animated).start();
  };

  React.useEffect(() => {
    fadeAnim.setValue(0);
    fadeIn();
  }, [title]);

  return (
    <>
      <View style={styles.container}>
        {thumbnailSource ? (
          <ProgressiveImage
            style={styles.image}
            thumbnailSource={{ uri: thumbnailSource }}
            source={{ uri: source }}
            resizeMode={"cover"}
          />
        ) : (
          <Skeleton />
        )}
      </View>
      <View style={styles.detailBarContianer}>
        <View
          accessible={VIEW_CONST.GIF_CARD.textHeader.accessible}
          style={styles.detailBar}
        >
          <Text
            accessibilityRole={VIEW_CONST.GIF_CARD.headerText.accessibilityRole}
            accessibilityAutoFocus={
              VIEW_CONST.GIF_CARD.headerText.accessibilityAutoFocus
            }
            style={styles.title}
          >
            {title}
          </Text>
          <Text style={styles.url}>{url}</Text>
        </View>
        <AgeBadge
          text={VIEW_CONST.HOME.age_restriction}
          style={{
            width: AGE_LABEL_RADIUS,
            height: AGE_LABEL_RADIUS,
            borderRadius: AGE_LABEL_RADIUS / 2,
          }}
          fontSize={AGE_FONT_SIZE}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Spacing.pageWidth(4),
    height: Spacing.pageWidth(4),
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailBarContianer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailBar: {
    width: Spacing.pageWidth(12),
  },
  title: {
    marginTop: Spacing.scale(2),
    color: "#000000",
  },
  url: {
    marginTop: Spacing.scale(1),
  },
});

GifCard.propTypes = {
  thumbnailSource: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GifCard;

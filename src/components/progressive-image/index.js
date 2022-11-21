import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import PropTypes from "prop-types";

const ProgressiveImage = ({ thumbnailSource, source, style, resizeMode }) => {
  const thumbnailAnimated = useRef(new Animated.Value(1)).current;
  const imageAnimated = useRef(new Animated.Value(0)).current;

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    imageAnimated.setValue(0);
  }, [thumbnailSource]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={thumbnailSource}
        style={[style]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
        resizeMode={resizeMode}
      />
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, { opacity: imageAnimated }, style]}
        onLoad={onImageLoad}
        resizeMode={resizeMode}
      />
    </View>
  );
};

ProgressiveImage.propTypes = {
  thumbnailSource: PropTypes.object,
  source: PropTypes.object,
  style: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  resizeMode: PropTypes.string,
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#e1e4e8",
  },
});

export default ProgressiveImage;

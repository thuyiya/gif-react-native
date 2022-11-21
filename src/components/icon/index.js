import React from "react";
import { Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { IMAGES } from "_constants";
import { Spacing, Colors } from "_styles";

const Icon = ({ name, style }) => {
  return <Image style={[styles.iconSize, style]} source={IMAGES.icons[name]} />;
};

Icon.propTypes = {
  style: PropTypes.object,
  name: function ({ name }) {
    PropTypes.string.isRequired;
    if (!IMAGES.icons[name]) {
      return new Error(
        `Invalid prop ${name} supplied, Could not found in image array ${JSON.stringify(
          IMAGES.icons
        )}`
      );
    }
    return null;
  },
};

const styles = StyleSheet.create({
  iconSize: {
    width: Spacing.scale(3),
    height: Spacing.scale(3),
    tintColor: Colors.GRAY_DARK,
  },
});

export default Icon;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Spacing, Colors } from "_styles";
import { VIEW_CONST } from "_constants";

const AgeBadge = ({ text, style, fontSize }) => {
  return (
    <View accessible={true} style={[styles.container, style]}>
      <Text
        style={[styles.text, { fontSize: fontSize || 26 }]}
        accessibilityLabel={VIEW_CONST.AGE_BADGE.accessibilityLabel}
      >
        {text}
      </Text>
    </View>
  );
};

AgeBadge.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    height: Spacing.scale(8),
    width: Spacing.scale(8),
    borderRadius: Spacing.scale(8) / 2,
    backgroundColor: Colors.GRAY_LOW_DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.WHITE,
    fontWeight: "600",
  },
});

export default AgeBadge;

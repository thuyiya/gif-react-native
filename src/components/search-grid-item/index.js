import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image } from "react-native";
import { Size, Spacing } from "_styles";
import { VIEW_CONST } from "_constants";

const SearchGridItem = ({ onPress, source, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: Spacing.scale(0.5),
        justifyContent: "center",
        alignItems: "center",
      }}
      accessible={VIEW_CONST.SEARCH_GRID_ITEM.gridButton.accessible}
      accessibilityLabel={`${VIEW_CONST.SEARCH_GRID_ITEM.gridButton.accessibilityLabel} of ${title}`}
      accessibilityHint={
        VIEW_CONST.SEARCH_GRID_ITEM.gridButton.accessibilityHint
      }
    >
      <Image
        style={{
          height: Size.gridSize(3),
          width: Size.gridSize(3),
        }}
        source={{ uri: source }}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
  );
};

SearchGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  source: PropTypes.string,
  item: PropTypes.shape({
    images: PropTypes.object,
  }),
};

export default SearchGridItem;

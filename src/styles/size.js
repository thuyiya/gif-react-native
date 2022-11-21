import { Dimensions, PixelRatio } from "react-native";
import { BASE_SPACE_SIZE } from "_constants";
const { width, height } = Dimensions.get("window");

export const gridSize = (numberOfColumn) =>
  (width - BASE_SPACE_SIZE * 4 - (BASE_SPACE_SIZE / 2) * 6) / numberOfColumn;
export const windowWidth = width;
export const windowHeight = height;
export const scaleFont = (size) => size * PixelRatio.getFontScale();

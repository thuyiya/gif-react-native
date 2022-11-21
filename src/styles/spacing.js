import { BASE_SPACE_SIZE } from "_constants";
import { Size } from "_styles";

export const scale = (n, fontSize) => {
  const baseSize = BASE_SPACE_SIZE * (n || 1);

  if (fontSize) {
    return baseSize + (BASE_SPACE_SIZE * Size.scaleFont(fontSize)) / fontSize;
  }

  return baseSize;
};
export const pageLeadingAndTraling = (n) => BASE_SPACE_SIZE * (n || 2);
export const pageWidth = (n) => Size.windowWidth - pageLeadingAndTraling(n);

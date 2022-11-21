import Config from "react-native-config";
import searchIcon from "_assets/images/icons/search.png";
import closeIcon from "_assets/images/icons/close.png";
import { Colors } from "_styles";

export const BASE_SPACE_SIZE = 8;

export const IMAGES = {
  icons: {
    search: searchIcon,
    close: closeIcon,
  },
};

export const VIEW_CONST = {
  AGE_BADGE: {
    accessibilityLabel: "AGE",
    textTestID: "badgeTextId",
  },
  GIF_CARD: {
    textHeader: {
      accessible: true,
    },
    headerText: {
      accessibilityRole: "header",
      accessibilityAutoFocus: true,
    },
  },
  SEARCH_GRID_ITEM: {
    gridButton: {
      accessible: true,
      accessibilityLabel: "Search Item",
      accessibilityHint: "Tap to navigate to full search view",
    },
  },
  SEARCH_BAR: {
    closeButton: {
      icon: "close",
      accessible: true,
      accessibilityLabel: "Clear Inputs",
      accessibilityHint: "Clear all the input text",
    },
    cancelButton: {
      text: "Cancel",
      accessible: true,
      accessibilityLabel: "Clear Search Text",
      accessibilityHint: "Navigate to home page",
    },
    searchInput: {
      placeholder: "Search",
      icon: "search",
      accessible: true,
      accessibilityLabel: "Search Input",
      accessibilityHint: "Search more Gif",
    },
  },
  HOME: {
    title: "Random selected GIF:",
    age_restriction: "16+",
    randomDataFetchSec: 10,
    giftCardTestID: "gifCard",
  },
  SEARCH: {
    title: "Search results:",
    flatListTestID: "flatListTestID",
  },
  DETAILS: {
    titleCharacterLength: 28,
    giftCardTestID: "gifCard",
  },
};

export const ANIMATION_CONFIG = {
  GIFT_CARD: {
    initialValue: 0,
    animated: {
      toValue: 1,
      duration: 600,
      delay: 400,
      useNativeDriver: false,
    },
  },
};

export const NAVIGATION_SCREEN_NAMES = {
  SEARCH: "Search",
  DETAILS: "Details",
  HOME: "Home",
};

const routeWraper = (route, query) => {
  const fixedRoute = `${route}${query ? "?" + query : ""}`;

  return `${Config.BASE_URL}/${fixedRoute}${
    String(fixedRoute).includes("?") ? "&" : "?"
  }api_key=${Config.API_TOKEN}`;
};

export const ENDPOINTS = {
  RANDOM: () => routeWraper("random"),
  SEARCH: (query) => routeWraper("search", query),
};

export const ALERT = {
  somethingWentWrong: "Oops something went wrong. please try again later",
};

export const NOTIFICATION_TYPE = {
  error: {
    title: "ERROR:",
    color: Colors.ALERT,
    timeout: 6000,
  },
  warning: {
    title: "WARNING:",
    color: Colors.WARNING,
    timeout: 3000,
  },
  success: {
    title: "SUCCESS:",
    color: Colors.SUCCESS,
    timeout: 3000,
  },
};

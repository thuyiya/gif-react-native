import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "react-native-gesture-handler/jestSetup";
import { jest } from "@jest/globals";

configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
global.fetch = require("jest-fetch-mock");

jest.mock();

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  // eslint-disable-next-line no-undef
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("react-native-config", () => {
  return {
    ENV: "TEST123",
    API_TOKEN: "BluxFAOfAHEf9xg0PdiHD1fqlEAEdlSu",
    BASE_URL: "https://api.giphy.com/v1/gifs",
  };
});

//MOCK IMAGES

jest.mock("../assets/images/icons/search.png");

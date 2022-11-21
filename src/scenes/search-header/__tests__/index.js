/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import SearchHeaderScreen from "_scenes/search-header";

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...props,
});

describe("SCREEN: SearchHeaderScreen", () => {
  it("enders correctly react-test-renderer", () => {
    const props = createTestProps({});
    const wrapper = new ShallowRenderer(<SearchHeaderScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { SearchBar } from "_components";

describe("SearchBar", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchBar
        onCancel={() => {}}
        onChangeText={() => {}}
        onChange={() => {}}
      />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

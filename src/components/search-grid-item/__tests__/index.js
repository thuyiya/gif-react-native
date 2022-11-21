/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { SearchGridItem } from "_components";

describe("SearchGridItem", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchGridItem onPress={() => {}} source={""} title={""} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

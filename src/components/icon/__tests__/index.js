/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { Icon } from "_components";

describe("Icon", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Icon name={"search"} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

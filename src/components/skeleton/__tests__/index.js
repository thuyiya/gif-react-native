/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { Skeleton } from "_components";

describe("Skeleton", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Skeleton />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

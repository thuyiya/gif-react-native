/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { AgeBadge } from "_components";

describe("AgeBadge", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AgeBadge text={"16+"} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { PageLayout } from "_components";

describe("PageLayout", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PageLayout title={""} loading={false} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

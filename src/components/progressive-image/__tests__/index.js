/* eslint-disable no-undef */
import React from "react";
// import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { ProgressiveImage } from "_components";

describe("ProgressiveImage", () => {
  it("renders correctly react-test-renderer", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ProgressiveImage
        thumbnailSource={{ uri: "" }}
        source={{ uri: "" }}
        resizeMode={"cover"}
      />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

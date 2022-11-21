/* eslint-disable no-undef */
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import DetailScreen from "_scenes/details";
import { Giphy } from "_models";
import { VIEW_CONST } from "_constants";

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  route: {
    params: {
      item: new Giphy({}),
    },
  },
  ...props,
});

describe("SCREEN: Details", () => {
  const props = createTestProps({});

  it("enders correctly react-test-renderer", () => {
    const wrapper = new ShallowRenderer(<DetailScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Child Element Getting Rendered Correctly", () => {
    const wrapper = shallow(<DetailScreen {...props} />);

    expect(
      wrapper.find({ testID: VIEW_CONST.DETAILS.giftCardTestID }).length
    ).toBe(1);
  });
});

/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import HomeScreen from "_scenes/home";
import { VIEW_CONST } from "_constants";
import { Giphy } from "_models";

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

describe("SCREEN: Home", () => {
  const props = createTestProps({});
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeScreen {...props} />);
  });

  it("enders correctly react-test-renderer", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Child Element Getting Rendered Correctly", () => {
    expect(
      wrapper.find({ testID: VIEW_CONST.DETAILS.giftCardTestID }).length
    ).toBe(1);
  });
});

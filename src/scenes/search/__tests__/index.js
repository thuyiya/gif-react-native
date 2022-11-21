/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { VIEW_CONST } from "_constants";
import SearchScreen from "_scenes/search";
import { Provider } from "_contexts";

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...props,
});

describe("SCREEN: Search", () => {
  const props = createTestProps({});
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider value={{ state: { search: "A" } }}>
        <SearchScreen {...props} />
      </Provider>
    );
  });

  it("enders correctly react-test-renderer", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Child Element Getting Rendered Correctly", () => {
    expect(
      wrapper.find({ testID: VIEW_CONST.SEARCH.flatListTestID }).length
    ).toBe(0);
  });
});

/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { NotificationBar } from "_components";
import { Provider } from "_contexts";

describe("NotificationBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider value={{ state: { notification: {} } }}>
        <NotificationBar />
      </Provider>
    );
  });

  it("enders correctly react-test-renderer", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

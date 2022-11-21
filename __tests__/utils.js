/* eslint-disable no-undef */
import "react-native";
import Config from "react-native-config";
import { Common, ApiClient } from "../src/utils";
import { ENDPOINTS } from "../src/constants";

describe("Utils", () => {
  describe("config:envirment", () => {
    it("Is app envirment configaration work?", async () => {
      expect(Config.ENV).toEqual("TEST123");
    });
  });

  describe("common:truncate", () => {
    const text = "Hello Wold";
    it("common function length check ", () => {
      expect(Common.truncate(text, 4).length).toBe(6);
    });
    it("common function ", () => {
      expect(Common.truncate(text, 4)).toBe("Hel...");
    });
  });

  describe("common:api-client", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("RANDOM Http Call", async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: {}, meta: {} }));
      const onResponse = jest.fn();
      const onError = jest.fn();

      return ApiClient({
        url: ENDPOINTS.RANDOM(),
        method: "GET",
      })
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0]).toEqual({ data: {}, meta: {} });
        });
    });

    it("SEARCH Http Call", async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [], meta: {} }));
        const onResponse = jest.fn();
        const onError = jest.fn();
  
        return ApiClient({
          url: ENDPOINTS.SEARCH('q=Food'),
          method: "GET",
        })
          .then(onResponse)
          .catch(onError)
          .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
  
            expect(onResponse.mock.calls[0][0]).toEqual({ data: [], meta: {} });
          });
      });
  });
});

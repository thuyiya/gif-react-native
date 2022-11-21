import { ApiClient } from "_utils";
import { ENDPOINTS } from "_constants";

export const fetchRandom = async () => {
  try {
    const response = await ApiClient({
      url: ENDPOINTS.RANDOM(),
      method: "GET",
    });

    if (response.meta.status === 200) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const searchGif = async (key) => {
  try {
    const response = await ApiClient({
      url: ENDPOINTS.SEARCH(`q=${key}`),
      method: "GET",
    });

    if (response.meta.status === 200) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw new Error(error);
  }
};

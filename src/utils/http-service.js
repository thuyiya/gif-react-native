import PropTypes from "prop-types";

const ApiClient = async ({ url, method, body, headers }) => {
  try {
    const payload = body;

    let reqOpts = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    };
    reqOpts.method = method || "GET";

    if (payload) {
      reqOpts.body = JSON.stringify(payload);
    }

    // eslint-disable-next-line no-undef
    let response = await fetch(url, reqOpts);

    return response.json().then((jsonData) => {
      return jsonData;
    });
  } catch (error) {
    return error;
  }
};

ApiClient.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  body: PropTypes.object,
  headers: PropTypes.object,
};

export default ApiClient;

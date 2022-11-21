const initState = (() => {
  return {
    search: {
      text: "",
    },
    notification: {
      enable: false,
      message: "",
      type: "",
    },
  };
})();

export { initState };

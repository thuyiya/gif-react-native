import React, { useMemo, useState } from "react";
import { AppContext, initState } from ".";
import PropTypes from "prop-types";

const Provider = ({ children }) => {
  const [state, setState] = useState(initState);
  const providerValue = useMemo(
    () => ({
      state,
      setState: (updates) => {
        setState((prevState) => ({ ...prevState, ...updates }));
      },
    }),
    [state, setState]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export { Provider };

import { useContext } from "react";
import { AppContext } from "_contexts";

const useNotification = () => {
  const { setState } = useContext(AppContext);

  const set = ({ message, type }) =>
    setState({
      notification: {
        enable: true,
        message: message,
        type: type,
      },
    });
  return { set };
};

export default useNotification;

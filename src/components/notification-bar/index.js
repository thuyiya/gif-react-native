import React, { useContext, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { NOTIFICATION_TYPE } from "_constants";
import { AppContext } from "_contexts";
import { Spacing, Colors } from "_styles";

const NotificationBar = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    if (state.notification.enable) {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        setState({
          notification: {
            enable: false,
            message: "",
            type: "",
          },
        });
      }, NOTIFICATION_TYPE[state.notification.type].timeout);
    }
  }, [state.notification]);

  return state.notification.enable ? (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          {
            backgroundColor: NOTIFICATION_TYPE[state.notification.type].color,
          },
        ]}
      >
        <Text style={styles.textHeader}>
          {NOTIFICATION_TYPE[state.notification.type].title}
        </Text>
        <Text style={styles.text}>{state.notification.message}</Text>
      </View>
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: Spacing.pageWidth(),
    borderRadius: Spacing.scale(1),
    padding: Spacing.scale(2),
    backgroundColor: Colors.GRAY_MEDIUM,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textHeader: {
    fontWeight: "600",
    color: Colors.WHITE,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 14,
  },
});

export default NotificationBar;

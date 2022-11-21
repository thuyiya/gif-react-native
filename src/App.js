import React from "react";
import { View, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppNavigator from "_navigations";
import { Provider } from "_contexts";
import { NotificationBar } from "_components";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Provider>
        <NotificationBar />
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;

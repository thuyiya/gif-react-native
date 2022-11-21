import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeNavigator, screens } from "./app-navigators";

import SearchHeader from "_scenes/search-header";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={HomeNavigator}
          options={({ navigation }) => ({
            header: () => <SearchHeader navigation={navigation} />,
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          })}
        />
        {screens.map((screen, i) => (
          <Stack.Screen key={i} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

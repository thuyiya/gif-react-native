import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "_scenes/home";
import SearchScreen from "_scenes/search";
import DetailScreen from "_scenes/details";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack.Navigator>
  );
};

const screens = [
  {
    name: "Details",
    component: DetailScreen,
    options: {
      headerBackTitle: "",
      headerTintColor: "#333333",
      headerTitleStyle: { width: 60 },
      headerStyle: {
        backgroundColor: "#ffffff",
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
    },
  },
];

export { HomeNavigator, screens };

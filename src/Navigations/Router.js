import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "./HomeTabNavigator";
import SearchDestination from "../Screens/SearchDestination/SearchDestination";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"SearchDestination"}
          component={SearchDestination}
          options={{
            title: "Search your destination"
          }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
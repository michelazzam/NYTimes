import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ArticlesListStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="ArticlesListStack"
        component={StackNavigator}
        options={{ title: "Articles List" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

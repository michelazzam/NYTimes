import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ArticleDetailsScreen from "../screens/ArticleDetailsScreen";
import ArticlesListScreen from "../screens/ArticlesListScreen";
import { Alert, TouchableOpacity, View } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { colors } from "../library/colors";
const HamburgerMenu = require("../assets/icons/hamburger-menu.svg").default;
const LeftArrow = require("../assets/icons/left-arrow.svg").default;
const Search = require("../assets/icons/search.svg").default;
const MenuVertical = require("../assets/icons/menu-vertical.svg").default;

type RootStackParamList = {
  Articles_list: undefined;
  Article_Details: undefined;
};

type NavigationProps = {
  navigation: DrawerNavigationProp<RootStackParamList, "Article_Details">;
};

const Stack = createStackNavigator<RootStackParamList>();

/**
 *
 * Stack Navigator is used to render the stack navigation.
 * the different screen accross the same drawer.
 */
const StackNavigator: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Articles_list">
      <Stack.Screen
        name="Articles_list"
        options={{
          title: "NY Times Most Popular",
          headerTintColor: colors.white,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              style={{ marginLeft: 12 }}
              onPress={() => navigation.openDrawer()}
            >
              <HamburgerMenu fill={colors.white} width={24} height={24} />
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <View style={{ marginHorizontal: 12, flexDirection: "row" }}>
              <TouchableOpacity
                {...props}
                onPress={() => Alert.alert("Future search")}
              >
                <Search stroke={colors.white} width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity
                {...props}
                style={{ marginLeft: 12 }}
                onPress={() => Alert.alert("Future mini Menu")}
              >
                <MenuVertical fill={colors.white} width={24} height={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={ArticlesListScreen}
      />
      <Stack.Screen
        name="Article_Details"
        options={{
          title: "Articles Details",
          headerTintColor: colors.white,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              style={{ marginLeft: 12 }}
              onPress={() => navigation.goBack()}
            >
              <LeftArrow width={24} height={24} fill={colors.white} />
            </TouchableOpacity>
          ),
        }}
        component={ArticleDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

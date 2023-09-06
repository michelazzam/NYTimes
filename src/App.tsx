import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/Store";

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;

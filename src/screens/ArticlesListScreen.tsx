import React from "react";
import ArticlesListView from "../views/ArticlesListView";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface ArticlesListViewProps {
  navigation: DrawerNavigationProp<any, any>;
}

/**
 *
 * In here I used the ArticlesListView component to render the articles list screen.
 * Code could have been written fully here, but I prefered to use a separate component view, for better readability.
 *
 */
const ArticlesListScreen: React.FC<ArticlesListViewProps> = ({
  navigation,
}) => {
  return <ArticlesListView navigation={navigation} />;
};

export default ArticlesListScreen;

import React from 'react';
import ArticlesListView from '../views/ArticlesListView';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface ArticlesListViewProps {
  navigation: DrawerNavigationProp<any, any>;
}

const ArticlesListScreen: React.FC<ArticlesListViewProps> = ({
  navigation,
}) => {
  return <ArticlesListView navigation={navigation} />;
};

export default ArticlesListScreen;

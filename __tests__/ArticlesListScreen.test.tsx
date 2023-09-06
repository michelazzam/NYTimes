import React from "react";
import renderer from "react-test-renderer";
// import ArticlesListView from '../src/views/ArticlesListView';
import App from "../src/App";

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
const Calendar = require("../assets/icons/calendar.svg").default;

interface Article {
  title: string;
  customUrl: string;
  abstract: string;
  byline: string;
  published_date: string;
}

interface RouteParams {
  article: Article;
}

interface ArticleDetailsProps {
  route: RouteProp<any, any>;
}

const ArticleDetailsScreen: React.FC<ArticleDetailsProps> = ({ route }) => {
  const { title, customUrl, abstract, byline, published_date } =
    route?.params?.article || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: customUrl }} style={styles.image} />
      <Text style={styles.description}>{abstract}</Text>
      <View style={styles.footer}>
        <Text style={styles.writer}>{byline}</Text>
        <View style={styles.calendar}>
          <Calendar width={24} height={24} stroke={"#808080"} />
          <Text style={styles.date}>{published_date}</Text>
        </View>
      </View>
    </View>
  );
};
export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: "20%",
  },
  writer: {
    fontSize: 14,
    color: "gray",
    maxWidth: "70%",
  },
  calendar: {
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  date: {
    paddingVertical: 4,
    fontSize: 14,
    color: "gray",
  },
});

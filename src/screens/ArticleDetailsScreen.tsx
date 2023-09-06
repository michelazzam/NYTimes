import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../library/colors";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../store/actions/userActions";
const Calendar = require("../assets/icons/calendar.svg").default;
const Heart = require("../assets/icons/heart.svg").default;

interface Article {
  title: string;
  customUrl: string;
  abstract: string;
  byline: string;
  published_date: string;
  id: string;
}

interface RouteParams {
  article: Article;
}

interface ArticleDetailsProps {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

const ArticleDetailsScreen: React.FC<ArticleDetailsProps> = ({
  route,
  navigation,
}) => {
  const { id, title, customUrl, abstract, byline, published_date } =
    route?.params?.article || {};
  const dispatch = useDispatch();

  const favorites = useSelector((state: any) => state.user.favorite);

  const like = () => {
    dispatch(addFavorite(id));
  };
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
      <View style={styles.like}>
        <TouchableOpacity style={{ marginLeft: 12 }} onPress={like}>
          <Heart
            width={44}
            height={44}
            fill={favorites.includes(id) ? colors.red : colors.white}
          />
        </TouchableOpacity>
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
  like: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

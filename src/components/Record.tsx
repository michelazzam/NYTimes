import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
const Calendar = require("../assets/icons/calendar.svg").default;
const RightArrow = require("../assets/icons/right-arrow.svg").default;
interface RecordData {
  title: string;
  byLine: string;
  imageUrl: string;
  date: string;
  source: string;
}
const Record = ({ title, byLine, imageUrl, date, source }: RecordData) => {
  // const dateString = new Date(date);
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: imageUrl }} style={styles.roundedImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.byLine}>{byLine}</Text>

        <View style={styles.footer}>
          <Text style={styles.source}>{source}</Text>
          <View style={styles.calendar}>
            <Calendar width={20} height={20} stroke={"#808080"} />
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
      <RightArrow width={24} height={24} stroke={"#808080"} />
    </View>
  );
};

export default Record;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  roundedImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  byLine: {
    fontSize: 14,
    color: "gray",
    marginTop: 16,
  },
  source: {
    fontSize: 14,
    color: "gray",
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
    marginLeft: 4,
    fontSize: 14,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

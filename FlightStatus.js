import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function FlightStatus() {
  return (
    <View>
      <Image source={require("./flightStatus.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

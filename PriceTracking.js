import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function PriceTracking() {
  return (
    <View>
      <Image source={require("./PriceTracking.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 380,
  },
});

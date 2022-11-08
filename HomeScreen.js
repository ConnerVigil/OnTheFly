import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of upcoming flights here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});

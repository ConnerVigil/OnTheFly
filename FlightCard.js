import { View, Text, StyleSheet, Image, Circle } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function FlightCard({ flight }) {
  return (
    <View style={styles.container}>
      <View style={styles.flightInfoTop}>
        <View style={styles.topLeft}>
          <Text style={styles.topLeftTextBig}>{flight.departureAirport}</Text>
          <Text style={styles.topLeftTextSmall}>{flight.departureTime}</Text>
        </View>
        <View style={styles.topRight}>
          <Text style={styles.topRightTextBig}>{flight.arrivalAirport}</Text>
          <Text style={styles.topRightTextSmall}>{flight.arrivalTime}</Text>
        </View>
      </View>

      {/* For bottom half */}
      <View style={styles.flightInfoBottom}>
        <View>
          <Text style={styles.white}>
            Flight:{" "}
            <Text style={{ fontWeight: "bold" }}>{flight.flightNumber}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.white}>
            Departure Gate:{" "}
            <Text style={{ fontWeight: "bold" }}>{flight.departureGate}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.white}>
            Arrival Gate:{" "}
            <Text style={{ fontWeight: "bold" }}>{flight.arrivalGate}</Text>
          </Text>
        </View>
      </View>

      {/* Check in Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.checkInButton}>
          <Text style={styles.checkInButtonText}>Check in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.circleForLogo}>
        <Image source={require("./delta.png")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 350,
    height: 200,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 4.84,

    elevation: 5,
  },
  flightInfoTop: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  flightInfoBottom: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    height: 40,
    alignItems: "center",
  },
  topRightTextBig: {
    fontSize: 40,
    color: "white",
    textAlign: "right",
    paddingRight: 15,
    fontStyle: "italic",
  },
  topRightTextSmall: {
    fontSize: 20,
    color: "white",
    textAlign: "right",
    paddingRight: 15,
  },
  topLeftTextSmall: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    paddingLeft: 15,
  },
  topLeftTextBig: {
    fontSize: 40,
    color: "white",
    textAlign: "left",
    paddingLeft: 15,
    fontStyle: "italic",
  },
  topLeft: {
    // backgroundColor: "blue",
    width: "50%",
    alignContent: "left",
  },
  topRight: {
    // backgroundColor: "green",
    width: "50%",
    textAlign: "right",
  },
  white: {
    color: "white",
    fontSize: 13,
  },
  bold: {
    fontWeight: "bold",
    color: "white",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  checkInButton: {
    backgroundColor: "white",
    position: "absolute",
    width: 100,
    borderRadius: 10,
    top: 15,
  },
  bottomSection: {
    flexDirection: "column",
    justifycontent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  checkInButtonText: {
    fontSize: 20,
    textAlign: "center",
    padding: 6,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  image: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 5,
    bottom: 9,
  },
  circleForLogo: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    position: "absolute",
    right: 20,
    bottom: 15,
  },
});

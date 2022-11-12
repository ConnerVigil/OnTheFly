import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import FlightCard from "./FlightCard";
import { ScrollView } from "react-native";

const flights = [
  {
    id: 1,
    flightNumber: "DL 123",
    departureTime: "10:00 AM",
    arrivalTime: "12:00 PM",
    departureAirport: "SLC",
    arrivalAirport: "LAX",
    departureGate: "24A",
    arrivalGate: "12B",
  },
  {
    id: 2,
    flightNumber: "DL 456",
    departureTime: "2:00 PM",
    arrivalTime: "7:00 PM",
    departureAirport: "LAX",
    arrivalAirport: "JFK",
    departureGate: "19B",
    arrivalGate: "16C",
  },
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {flights.map((flight) => {
            return (
              <View key={flight.id}>
                <FlightCard flight={flight} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import MapView, { Circle } from "react-native-maps";
import { Marker, Polyline } from "react-native-maps";
import { useRef } from "react";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MapScreen() {
  let mapRef = useRef(null);
  const [showRoute, setShowRoute] = useState(false);

  const initialRegion = {
    latitude: 40.78569623234912,
    longitude: -111.98421368456295,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };

  const destination = {
    latitude: 40.7853587070029,
    longitude: -111.99215583904606,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };

  const goToDestination = () => {
    mapRef.current.fitToCoordinates([initialRegion, destination], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
    setShowRoute(true);
  };

  const goToCurrentLocation = () => {
    mapRef.current.animateToRegion(initialRegion, 1.5 * 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={destination}
          title="Gate 24A"
          description="Departure Gate"
          pinColor="orange"
          isPreselected={true}
        />
        <Circle center={initialRegion} radius={5} fillColor={"#3f69e6"} />
        {showRoute && (
          <Polyline
            coordinates={[initialRegion, destination]}
            strokeColor={"#713c1f"}
            strokeWidth={2}
            lineDashPattern={[5, 5]}
          />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => goToCurrentLocation()}
      >
        <Ionicons name={"locate"} size={20} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => goToDestination()}
      >
        <Text style={styles.button}>Get directions to my gate</Text>
      </TouchableOpacity>
      {showRoute && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Directions to Gate 24A</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e86e10",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  overlay: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
  },
  button: {
    fontSize: 17,
    color: "white",
  },
  locationButton: {
    position: "absolute",
    backgroundColor: "#3f69e6",
    bottom: 30,
    right: 20,
    padding: 10,
    borderRadius: 50,
  },
  banner: {
    position: "absolute",
    top: 0,
    backgroundColor: "#3f69e6",
    padding: 10,
    width: Dimensions.get("window").width,
  },
  bannerText: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
});

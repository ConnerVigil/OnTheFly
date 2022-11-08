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
    mapRef.current.animateToRegion(destination, 1.5 * 1000);
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
        <Marker coordinate={destination} title="Your Gate" pinColor="orange" />
        <Circle center={initialRegion} radius={3} fillColor={"#42adff"} />
        {showRoute && (
          <Polyline
            coordinates={[initialRegion, destination]}
            strokeColor={"orange"}
            strokeWidth={2}
            lineDashPattern={[5, 5]}
          />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => goToCurrentLocation()}
      >
        <Ionicons name={"locate"} size={20} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => goToDestination()}
      >
        <Text style={styles.button}>Get directions to my gate</Text>
      </TouchableOpacity>
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
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 50,
  },
  button: {
    fontSize: 17,
  },
  locationButton: {
    position: "absolute",
    backgroundColor: "orange",
    bottom: 30,
    right: 20,
    padding: 10,
    borderRadius: 50,
  },
});

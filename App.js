import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PriceTracking from "./PriceTracking";
import LuggageTracking from "./LuggageTracking";
import FlightStatus from "./FlightStatus";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Navigation") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Price Tracking") {
              iconName = focused ? "pricetag" : "pricetag-outline";
            } else if (route.name === "Navigation") {
              iconName = focused ? "navigate" : "navigate-outline";
            } else if (route.name === "Luggage") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Flight Status") {
              iconName = focused ? "airplane" : "airplane-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3f69e6",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 2,
            title: "Home",
            headerTitle: "Upcoming Flights",
          }}
        />
        <Tab.Screen name="Price Tracking" component={PriceTracking} />
        <Tab.Screen name="Navigation" component={MapScreen} />
        <Tab.Screen name="Luggage" component={LuggageTracking} />
        <Tab.Screen name="Flight Status" component={FlightStatus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

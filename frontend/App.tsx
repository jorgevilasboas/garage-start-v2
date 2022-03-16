import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors, AppStyles } from "./src/styles";
import Constants from 'expo-constants';
import Garage from "./src/screens/Garage";

export default function App() {
  return (
    <NavigationContainer>
    <View style={AppStyles.container} >
      <StatusBar style="auto" />
      <Garage />
    </View>
    </NavigationContainer>
  );
}

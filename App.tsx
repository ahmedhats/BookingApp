import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDown from "./src/components/atoms/AppDropDown";

export default function App() {
  return (
      <View style={styles.container}>
        <Text>hello world </Text>
        <StatusBar style="light" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

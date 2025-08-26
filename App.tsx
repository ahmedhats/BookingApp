import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDown from "./src/components/atoms/AppDropDown";
import Input from "./src/components/atoms/Input/Input";
import TripCategoryTab from "./src/components/molecules/TripCategoryTab";

export default function App() {
  return (
      <View style={styles.container}>
        <Text>hello world </Text>
        <TripCategoryTab imageUrl={"https://up.yimg.com/ib/th/id/OIP.CjuJhR9wS4jD9R183-cdDwHaEK?pid=Api&rs=1&c=1&qlt=95&w=198&h=111"} title={"Example Title"} />
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

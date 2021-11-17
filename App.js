import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Woman Item</Text>

      <Text style={styles.list}>Item 1</Text>
      <StatusBar style="auto" />
      <Text style={styles.list}>Item 2</Text>
      <Text style={styles.list}>Item 3</Text>
      <Text style={styles.list}>Item 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 100,

    marginRight: 200,
    paddingRight: 0,
    backgroundColor: "blue",
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    width: 200,
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 2,
    textAlign: "left",
    backgroundColor: "yellow",
  },
});

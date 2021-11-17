import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text>Woman Item</Text>
        </View>
        <TextInput style={styles.text} />
        <View style={styles.items}>
          <Text style={styles.item1}>Item 1</Text>
          <StatusBar style="auto" />
          <Text style={styles.item2}>Item 2</Text>
          <Text style={styles.item3}>Item 3</Text>
          <Text style={styles.item4}>Item 4</Text>
        </View>
      </ScrollView>
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
    marginBottom: 100,

    backgroundColor: "blue",
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    width: 200,
    fontSize: 25,
    fontWeight: "bold",
  },
  item: {
    flex: 1,
    marginBottom: 2,
    textAlign: "left",
    backgroundColor: "yellow",
    width: 400,
  },
  text: {
    marginTop: 5,
    marginBottom: 100,
    marginLeft: 70,
    marginRight: 20,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "yellow",
  },
});

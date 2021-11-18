import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text>Woman Item</Text>
        </View>

        <SearchBar style={styles.SearchBar} placeholder="Type Here..." />

        <View style={styles.items}>
          <View>
            <Image
              source={require("./logo.png")}
              style={{ height: 100, width: 100, marginTop: 20 }}
            />
            <Text style={styles.item}>Item 1</Text>
          </View>

          <View>
            <Image
              source={require("./logo.png")}
              style={{ height: 100, width: 100, marginTop: 20 }}
            />

            <Text style={styles.item}>Item 2</Text>
          </View>
          <View>
            <Image
              source={require("./logo.png")}
              style={{ height: 100, width: 100, marginTop: 20 }}
            />
            <Text style={styles.item}>Item 3</Text>
          </View>
          <View>
            <Image
              source={require("./logo.png")}
              style={{ height: 100, width: 100, marginTop: 20 }}
            />
            <Text style={styles.item}>Item 4</Text>
          </View>
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
    fontSize: 100,
    fontWeight: "bold",
  },
  items: {
    flex: 1,
    marginBottom: 0,
    marginTop: 70,
    textAlign: "left",
    backgroundColor: "yellow",
    width: 400,
    height:700,
  },
  item: {
    marginTop: 10,
    marginLeft: 250,
    marginBottom:10,
    flex: 1,
    borderRadius: 20,
  },
  SearchBar: {
    borderRadius: 30,
    marginButtom: 60,
    borderRadius: 30,
  },
});

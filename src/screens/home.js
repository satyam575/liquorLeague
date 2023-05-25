import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  Alert,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UserItem from "../components/userItem";
import BackgroundAnimation from "../components/backgroundAnimation";

const createAlert = (title, msg) => Alert.alert(title, msg, [{ text: "OK" }]);

function HomeScreen({ navigation }) {
  const [player, onChangePlayer] = useState("");
  const [playersArray, onChangePlayersArray] = useState([]);

  const removePlayerFromArray = (playerToRemove) => {
    onChangePlayersArray(playersArray.filter((item) => item != playerToRemove));
  };

  function playerAddPress() {
    if (
      player == "" ||
      playersArray.filter((x) => x.name == player).length != 0
    ) {
      return;
    }
    onChangePlayersArray((arr) => [...arr, { name: player }]);
    onChangePlayer("");
  }

  return (
    <View style={styles.container}>
      <StatusBar
        // hidden={true}
        backgroundColor="#fff567"
        barStyle="light-content"
      />
      <BackgroundAnimation />
      <View
        style={{
          marginTop: 5,
          alignContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/icon.png")}
        />
        <Text
          style={{
            fontSize: 25,
            color: "#00796B",
            fontFamily: "Supply_Center",
          }}
        >
          Liquor League
        </Text>
      </View>
      <ScrollView>
        <FlatList
          style={styles.list}
          horizontal
          data={playersArray}
          contentContainerStyle={styles.listContents}
          renderItem={({ item }) => (
            <UserItem
              item={item}
              removePlayer={removePlayerFromArray}
            ></UserItem>
          )}
          keyExtractor={(item) => item.name}
        ></FlatList>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePlayer}
          value={player}
          placeholder="Add Player"
          autoFocus={true}
          onSubmitEditing={() => {}}
        />
        <Ionicons
          name="add-circle"
          size={30}
          color="#00796B"
          onPress={playerAddPress}
        />
      </View>

      <Pressable
        style={styles.GameOn}
        onPress={() => {
          if (playersArray.length <= 0) {
            createAlert(
              "No Ghosts allowed!",
              "Add atleast two players to play the game."
            );
            return;
          }
          navigation.navigate("Categories", {
            players: playersArray,
          });
        }}
      >
        <Text style={styles.GameOnText}>Game On</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: 60,
    width: "90%",
    height: 60,
    maxHeight: 60,
    margin: 7,
    flex: 1,
    borderWidth: 2,
    borderColor: "#00796B",
    borderRadius: 7,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  input: {
    fontFamily: "Supply_Center",
    fontSize: 18,
    flex: 1,
    padding: 10,
    color: "#00796B",
  },
  GameOn: {
    width: "90%",
    minHeight: 60,
    fontFamily: "Supply_Center",
    height: 60,
    maxHeight: 60,
    marginTop: 7,
    flex: 1,
    borderWidth: 2,
    fontSize: 23,
    borderColor: "#00796B",
    borderRadius: 7,
    padding: 10,
    color: "#00796B",
    alignContent: "center",
    alignItems: "center",
  },
  GameOnText: {
    fontSize: 23,
    fontFamily: "Supply_Center",
    color: "#00796B",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  list: {
    //   padding: 10,
    flexDirection: "column",
    width: "100%",
    //   backgroundColor:"black"
  },
  listContents: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
  },
});

export default HomeScreen;

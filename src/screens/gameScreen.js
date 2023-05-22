import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, BackHandler } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";

// import questions_array from "../data/questions";
var questions_array = null;

function getRandomQuestion() {
  let randIndex = Math.floor(Math.random() * questions_array.length);
  let questionChosen = questions_array[randIndex];
  questions_array.splice(randIndex, 1);
  return questionChosen;
}

const lockOrientation = async () => {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
};
const backAction = () => {
  ScreenOrientation.unlockAsync();
};

function getNextPlayer(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function GameScreen({ route }) {
  const allPlayers = route.params.players;

  const [question, changeQuestion] = useState("");
  const [player, changePlayer] = useState("");

  useEffect(() => {
    questions_array = route.params.category.location;
    lockOrientation();
    onNextQuestion();
  }, []);

  const onNextQuestion = () => {
    changeQuestion(getRandomQuestion());
    changePlayer(getNextPlayer(allPlayers)["name"]);
  };

  BackHandler.addEventListener("hardwareBackPress", backAction);

  return (
    <View style={styles.container}>
      <Text style={styles.PlayerName}>{player}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.QuestionText}>{question}</Text>
        <MaterialIcons
          name="double-arrow"
          size={30}
          color="#00796B"
          onPress={() => {
            onNextQuestion();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    alignItems: "center",
    justifyContent: "center",
  },
  QuestionText: {
    width: "90%",
    height: "100%",
    fontWeight: "bold",
    fontSize: 40,
    paddingHorizontal: 40,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#00796B",
  },
  PlayerName: {
    color: "white",
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    color: "#00796B",
  },
  questionContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
    paddingHorizontal: 30,
  },
});

export default GameScreen;

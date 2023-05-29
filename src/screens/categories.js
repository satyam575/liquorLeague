import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  View,
  StatusBar,
} from "react-native";
import BackgroundAnimation from "../components/backgroundAnimation";

const categoriesList = [
  {
    name: "Vanilla",
    location: require("../../assets/questions/bonding.json"),
  },
  {
    name: "Naughty",
    location: require("../../assets/questions/explicit.json"),
  },
  {
    name: "Never Have I Ever",
    location: require("../../assets/questions/never_have_i_ever.json"),
  },
];

const CategoriesScreen = ({ navigation, route }) => {
  const Item = ({ item }) => (
    <Pressable
      style={styles.CategoryContainer}
      onPress={() => {
        navigation.navigate("GameScreen", {
          players: route.params.players,
          category: item,
        });
      }}
    >
      <Text style={styles.CategoryText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff00" barStyle="light-content" />
      <BackgroundAnimation />
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/icon.png")}
      />

      <View style={{ marginVertical: 30 }}>
        <Text style={styles.HeadingText}>
          Choose from one of the categories :
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={categoriesList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.name}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#FFEB3B",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingTop: 40,
  },
  list: {
    //   padding: 10,
    flexDirection: "column",
    width: "100%",
    // // height: "100%",
    // flex: 1,
    // backgroundColor: "black",
  },
  tinyLogo: {
    marginVertical: 40,
    marginTop: 5,
    width: 150,
    height: 150,
  },
  listItem: {
    fontSize: 15,
    color: "black",
  },
  CategoryContainer: {
    // width: "98%",
    flexGrow: 1,
    minHeight: 60,
    height: 60,
    maxHeight: 60,
    // margin: 12,
    // marginTop: 0,
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    borderWidth: 2,
    fontWeight: "bold",
    fontSize: 23,
    borderColor: "#00796B",
    borderRadius: 7,
    padding: 10,
    color: "#00796B",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  CategoryText: {
    fontSize: 18,
    color: "#00796B",
    fontFamily: "Supply_Center",
  },
  HeadingText: {
    fontSize: 20,
    color: "#00796B",
    textAlign: "center",
    fontFamily: "Supply_Center",
  },
});

export default CategoriesScreen;

import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Supply_Center: require("../../assets/fonts/Supply_Center.otf"),
  });
};

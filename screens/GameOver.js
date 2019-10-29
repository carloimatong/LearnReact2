import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText> The Game is Over! Thanks for Playing</TitleText>
        <View style={styles.imageCon}>
          <Image
            fadeDuration={1000}
            source={require("../assets/success.png")}
            // source={{uri:"https://cdn.tinybuddha.com/wp-content/uploads/2015/08/Man-at-Summit.png" }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultcon}>
          <BodyText style={styles.resulttext}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber} </Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>Start New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageCon: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultcon: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resulttext: {
    textAlign: "center",
    fontSize: Dimensions.get("window").heigh2 < 400 ? 16 : 20
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;

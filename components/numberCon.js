import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const NumberCon = props => {
  return (
    <View style={styles.Conatiner}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Conatiner: {
    borderWidth: 2,
    borderColor: colors.accents,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: colors.accents
  }
});

export default NumberCon;

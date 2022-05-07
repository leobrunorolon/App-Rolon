import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../Styles/Colors";

const ButtonCustom = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add todo</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orchid,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});

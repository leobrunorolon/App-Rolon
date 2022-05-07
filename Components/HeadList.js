import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";

const HeadList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>Lista By leobruno</Text>
    </View>
  );
};

export default HeadList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.black,
  },
  textHead: {
    color: colors.white,
    textAlign: "center",
  },
});

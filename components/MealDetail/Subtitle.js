import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#316f31",
    fontSize: windowWidth < 360 ? 16 : 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: windowWidth < 360 ? 0 : 8,
    paddingBottom: windowWidth < 360 ? 14 : 18,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

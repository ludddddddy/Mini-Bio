import { View, Text, StyleSheet } from "react-native";
import Profile from  "../../components/Profile";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>

      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
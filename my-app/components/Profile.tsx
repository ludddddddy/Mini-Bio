import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={styles.image}
      />

      <Text style={styles.name}>Ludmylla Diaz</Text>

      <Text style={styles.bio}>
        Estudante de Sistemas para Internet e apaixonada por tecnologia.
        Gosto de desenvolver aplicações mobile e aprender novas ferramentas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  bio: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
  },
});
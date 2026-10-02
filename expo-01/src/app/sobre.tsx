import { StyleSheet, Text, View } from "react-native";

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>SOBRE O APP</Text>

      <Text style={styles.title}>Expo Router</Text>

      <Text style={styles.text}>
        Esta tela faz parte da atividade de navegação da disciplina de
        Programação para Dispositivos Móveis.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que foi utilizado?</Text>

        <Text style={styles.item}>• Expo Router</Text>
        <Text style={styles.item}>• Native Tabs</Text>
        <Text style={styles.item}>• Stack Navigator</Text>
        <Text style={styles.item}>• Animações de transição</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F7F8FA",
  },

  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#315D9C",
  },

  title: {
    marginTop: 8,
    fontSize: 34,
    fontWeight: "800",
    color: "#18202A",
  },

  text: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 25,
    color: "#59636F",
  },

  card: {
    marginTop: 28,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#18202A",
  },

  item: {
    marginTop: 12,
    fontSize: 16,
    color: "#59636F",
  },
});
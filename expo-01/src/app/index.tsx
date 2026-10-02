import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>EXPO ROUTER</Text>
      </View>

      <Text style={styles.title}>Olá!</Text>

      <Text style={styles.subtitle}>
        Bem-vindo ao meu aplicativo de Programação para Dispositivos Móveis.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navegação com Native Tabs</Text>

        <Text style={styles.cardText}>
          Use as abas abaixo para conhecer as páginas Início, Sobre e
          Configurações.
        </Text>
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

  badge: {
    alignSelf: "flex-start",
    marginBottom: 16,
    borderRadius: 999,
    backgroundColor: "#E8EEF8",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#315D9C",
    letterSpacing: 0.8,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#18202A",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    lineHeight: 26,
    color: "#59636F",
  },

  card: {
    marginTop: 28,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#18202A",
  },

  cardText: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: "#66717D",
  },
});
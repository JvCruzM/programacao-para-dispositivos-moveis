import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type OptionProps = {
  title: string;
  description: string;
  onPress?: () => void;
};

function Option({ title, description, onPress }: OptionProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.option,
        pressed && styles.optionPressed,
        !onPress && styles.optionDisabled,
      ]}
    >
      <View style={styles.optionContent}>
        <Text style={styles.optionTitle}>{title}</Text>

        <Text style={styles.optionDescription}>{description}</Text>
      </View>

      {onPress ? <Text style={styles.arrow}>›</Text> : null}
    </Pressable>
  );
}

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <Text style={styles.subtitle}>
        Escolha uma opção para personalizar o aplicativo.
      </Text>

      <View style={styles.list}>
        <Option
          title="Perfil"
          description="Edite seu nome e e-mail."
          onPress={() => router.push("/configuracoes/editar-perfil")}
        />

        <Option
          title="Notificações"
          description="Preferências de notificações."
        />

        <Option
          title="Aparência"
          description="Tema e preferências visuais."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F7F8FA",
  },

  title: {
    marginTop: 12,
    fontSize: 32,
    fontWeight: "800",
    color: "#18202A",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 23,
    color: "#66717D",
  },

  list: {
    marginTop: 28,
    gap: 12,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  optionPressed: {
    opacity: 0.7,
  },

  optionDisabled: {
    opacity: 0.9,
  },

  optionContent: {
    flex: 1,
    paddingRight: 16,
  },

  optionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#18202A",
  },

  optionDescription: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: "#707A85",
  },

  arrow: {
    fontSize: 30,
    lineHeight: 30,
    color: "#315D9C",
  },
});
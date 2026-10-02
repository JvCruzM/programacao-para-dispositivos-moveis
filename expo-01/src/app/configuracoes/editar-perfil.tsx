import { Stack } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function EditarPerfilScreen() {
  const [name, setName] = useState("João Vitor");
  const [email, setEmail] = useState("joao@example.com");
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Editar Perfil" }} />

      <Text style={styles.title}>Editar Perfil</Text>

      <Text style={styles.subtitle}>
        Atualize seus dados e salve as alterações.
      </Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput
        value={name}
        onChangeText={(value) => {
          setName(value);
          setSaved(false);
        }}
        placeholder="Digite seu nome"
        style={styles.input}
      />

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          setSaved(false);
        }}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Pressable
        onPress={() => setSaved(true)}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </Pressable>

      {saved ? (
        <Text style={styles.success}>
          Perfil salvo com sucesso!
        </Text>
      ) : null}
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
    fontSize: 30,
    fontWeight: "800",
    color: "#18202A",
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    fontSize: 16,
    lineHeight: 23,
    color: "#66717D",
  },

  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "700",
    color: "#35404C",
  },

  input: {
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#D6DCE3",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    color: "#18202A",
  },

  button: {
    marginTop: 6,
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#315D9C",
    paddingVertical: 15,
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  success: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#287A4B",
  },
});
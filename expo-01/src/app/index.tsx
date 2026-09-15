import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Programação para Dispositivos Móveis</Text>
      <Link href="/listaTarefas">Tarefas</Link>
    </View>
  );
}
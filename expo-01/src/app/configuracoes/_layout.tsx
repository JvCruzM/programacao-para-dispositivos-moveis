import { Stack } from "expo-router";

export default function ConfiguracoesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Configurações",
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="editar-perfil"
        options={{
          title: "Editar Perfil",
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}
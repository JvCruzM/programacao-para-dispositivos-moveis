import Providers from "@/Providers";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <Providers>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf={{ default: "house", selected: "house.fill" }}
            md={{ default: "home", selected: "home" }}
          />
          <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="sobre">
          <NativeTabs.Trigger.Icon
            sf={{ default: "info.circle", selected: "info.circle.fill" }}
            md={{ default: "info", selected: "info" }}
          />
          <NativeTabs.Trigger.Label>Sobre</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="configuracoes">
          <NativeTabs.Trigger.Icon
            sf={{ default: "gearshape", selected: "gearshape.fill" }}
            md={{ default: "settings", selected: "settings" }}
          />
          <NativeTabs.Trigger.Label>
            Configurações
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </Providers>
  );
}
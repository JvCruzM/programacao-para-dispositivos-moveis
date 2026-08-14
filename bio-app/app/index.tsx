import { View, StyleSheet } from "react-native";
import MiniBio from "../components/MiniBio";

export default function Index() {
  const userData = {
    name: "João Vitor Cruz de Menezes",
    photoUri: "https://avatars.githubusercontent.com/u/206948909?v=4",
    bioText: "Desenvolvedor em formação, apaixonado por games e tecnologia."
  };

  return (
    <View style={styles.container}>
      <MiniBio 
        name={userData.name}
        photoUri={userData.photoUri}
        bioText={userData.bioText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    padding: 20,
  },
});
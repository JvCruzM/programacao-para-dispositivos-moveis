import { Image, StyleSheet, View } from "react-native";

export type ValorDado = 1 | 2 | 3 | 4 | 5 | 6;

type DadoProps = {
  valor: ValorDado | null;
};

const imagens = {
  1: require("../../assets/dados/dado1.png"),
  2: require("../../assets/dados/dado2.png"),
  3: require("../../assets/dados/dado3.png"),
  4: require("../../assets/dados/dado4.png"),
  5: require("../../assets/dados/dado5.png"),
  6: require("../../assets/dados/dado6.png"),
};

export default function Dado({ valor }: DadoProps) {
  if (!valor) {
    return <View style={styles.vazio} />;
  }

  return <Image source={imagens[valor]} style={styles.dado} />;
}

const styles = StyleSheet.create({
  dado: {
    width: 64,
    height: 64,
  },

  vazio: {
    width: 64,
    height: 64,
  },
});
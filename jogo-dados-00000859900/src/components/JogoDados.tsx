import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Dado, { ValorDado } from "./Dado";

type Jogador = "A" | "B";

type Resultado = "" | "Ganhou" | "Perdeu" | "Empatou";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [dadosA, setDadosA] = useState<
    [ValorDado | null, ValorDado | null]
  >([null, null]);

  const [dadosB, setDadosB] = useState<
    [ValorDado | null, ValorDado | null]
  >([null, null]);

  const [resultadoA, setResultadoA] = useState<Resultado>("");
  const [resultadoB, setResultadoB] = useState<Resultado>("");

  const [placarA, setPlacarA] = useState(0);
  const [placarB, setPlacarB] = useState(0);

  const [vez, setVez] = useState<Jogador>("A");

  const [resultadoRodada, setResultadoRodada] = useState(false);
  const [fim, setFim] = useState(false);

  function gerarDados(): [ValorDado, ValorDado] {
    const dado1 = (Math.floor(Math.random() * 6) + 1) as ValorDado;
    const dado2 = (Math.floor(Math.random() * 6) + 1) as ValorDado;

    return [dado1, dado2];
  }

  function jogarA() {
    if (vez !== "A" || fim || resultadoRodada) {
      return;
    }

    const novosDados = gerarDados();

    setDadosA(novosDados);
    setVez("B");
  }

  function jogarB() {
    if (vez !== "B" || fim || resultadoRodada) {
      return;
    }

    const novosDados = gerarDados();

    setDadosB(novosDados);

    const somaA = (dadosA[0] ?? 0) + (dadosA[1] ?? 0);
    const somaB = novosDados[0] + novosDados[1];

    let novoPlacarA = placarA;
    let novoPlacarB = placarB;

    if (somaA > somaB) {
      setResultadoA("Ganhou");
      setResultadoB("Perdeu");

      novoPlacarA += 1;
      setPlacarA(novoPlacarA);
    } else if (somaB > somaA) {
      setResultadoA("Perdeu");
      setResultadoB("Ganhou");

      novoPlacarB += 1;
      setPlacarB(novoPlacarB);
    } else {
      setResultadoA("Empatou");
      setResultadoB("Empatou");
    }

    setResultadoRodada(true);

    if (rodada === 5) {
      setFim(true);
    }
  }

  function proximaRodada() {
    if (!resultadoRodada || fim) {
      return;
    }

    setRodada((valor) => valor + 1);

    setDadosA([null, null]);
    setDadosB([null, null]);

    setResultadoA("");
    setResultadoB("");

    setResultadoRodada(false);
    setVez("A");
  }

  function jogarNovamente() {
    setRodada(1);

    setDadosA([null, null]);
    setDadosB([null, null]);

    setResultadoA("");
    setResultadoB("");

    setPlacarA(0);
    setPlacarB(0);

    setVez("A");

    setResultadoRodada(false);
    setFim(false);
  }

  function textoResultadoFinal() {
    if (placarA > placarB) {
      return "Jogador A venceu a partida!";
    }

    if (placarB > placarA) {
      return "Jogador B venceu a partida!";
    }

    return "Empate geral!";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Jogo de Dados
      </Text>

      <Text style={styles.rodada}>
        Rodada {rodada} de 5
      </Text>

      <View style={styles.jogadores}>
        
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>
            Jogador A
          </Text>

          <View style={styles.dados}>
            <Dado valor={dadosA[0]} />
            <Dado valor={dadosA[1]} />
          </View>

          <Text style={styles.resultado}>
            {resultadoA}
          </Text>

          <Pressable
            onPress={
              resultadoRodada
                ? undefined
                : jogarA
            }
            disabled={
              vez !== "A" ||
              fim ||
              resultadoRodada
            }
            style={[
              styles.botao,
              vez === "A" &&
                !fim &&
                !resultadoRodada
                ? styles.botaoAtivoA
                : styles.botaoDesabilitado,
            ]}
          >
            <Text style={styles.textoBotao}>
              Jogar Dado
            </Text>
          </Pressable>
        </View>

        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>
            Jogador B
          </Text>

          <View style={styles.dados}>
            <Dado valor={dadosB[0]} />
            <Dado valor={dadosB[1]} />
          </View>

          <Text style={styles.resultado}>
            {resultadoB}
          </Text>

          <Pressable
            onPress={
              resultadoRodada
                ? undefined
                : jogarB
            }
            disabled={
              vez !== "B" ||
              fim ||
              resultadoRodada
            }
            style={[
              styles.botao,
              vez === "B" &&
                !fim &&
                !resultadoRodada
                ? styles.botaoAtivoB
                : styles.botaoDesabilitado,
            ]}
          >
            <Text style={styles.textoBotao}>
              Jogar Dado
            </Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.placar}>
        Placar: {placarA} x {placarB}
      </Text>

      {resultadoRodada && !fim && (
        <Pressable
          onPress={proximaRodada}
          style={styles.botaoProxima}
        >
          <Text style={styles.textoBotao}>
            Próxima Rodada
          </Text>
        </Pressable>
      )}

      {fim && (
        <View style={styles.final}>
          <Text style={styles.resultadoFinal}>
            {textoResultadoFinal()}
          </Text>

          <Pressable
            onPress={jogarNovamente}
            style={styles.botaoNovamente}
          >
            <Text style={styles.textoBotao}>
              Jogar Novamente
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f3f4f6",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  rodada: {
    fontSize: 20,
    marginBottom: 30,
  },

  jogadores: {
    flexDirection: "row",
    gap: 40,
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 20,
  },

  jogador: {
    alignItems: "center",
    minWidth: 130,
  },

  nomeJogador: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  dados: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
  },

  resultado: {
    fontSize: 16,
    fontWeight: "600",
    minHeight: 24,
    marginBottom: 10,
  },

  botao: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 25,
  },

  botaoAtivoA: {
    backgroundColor: "#3b82f6",
  },

  botaoAtivoB: {
    backgroundColor: "#22c55e",
  },

  botaoDesabilitado: {
    backgroundColor: "#d1d5db",
  },

  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  placar: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 25,
  },

  controleRodada: {
    alignItems: "center",
    marginTop: 25,
    gap: 12,
  },

  resultadoRodada: {
    fontSize: 18,
    fontWeight: "bold",
  },

  botaoProxima: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 10,
  },

  final: {
    alignItems: "center",
    marginTop: 30,
    gap: 15,
  },

  resultadoFinal: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoNovamente: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 10,
  },
});
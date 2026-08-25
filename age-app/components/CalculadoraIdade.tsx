import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function CalculadoraIdade() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState<number | null>(null);

  function calcularAnoNascimento() {
    const idadeNumero = Number(idade);
    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (
      !idade ||
      !dia ||
      !mes ||
      idadeNumero <= 0 ||
      diaNumero < 1 ||
      diaNumero > 31 ||
      mesNumero < 1 ||
      mesNumero > 12
    ) {
      setAnoNascimento(null);
      return;
    }

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    let ano = anoAtual - idadeNumero;

    if (
      mesNumero > mesAtual ||
      (mesNumero === mesAtual && diaNumero > diaAtual)
    ) {
      ano--;
    }

    setAnoNascimento(ano);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora de ano de nascimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Dia do aniversário"
        keyboardType="numeric"
        value={dia}
        onChangeText={setDia}
      />

      <TextInput
        style={styles.input}
        placeholder="Mês do aniversário"
        keyboardType="numeric"
        value={mes}
        onChangeText={setMes}
      />

      <Pressable
        style={styles.button}
        onPress={calcularAnoNascimento}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {anoNascimento !== null && (
        <Text style={styles.result}>
          Você nasceu em {anoNascimento}.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  result: {
    marginTop: 30,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

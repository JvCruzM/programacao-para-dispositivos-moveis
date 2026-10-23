import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthPage, ErrorMessage, Field, PrimaryButton, uiStyles } from '@/components/auth-ui';
import { useAuth } from '@/contexts/auth-context';

export default function RegisterScreen() {
  const { signUp, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    setError('');
    if (username.trim().length < 3) return setError('O nome de usuário deve ter pelo menos 3 caracteres.');
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError('Informe um e-mail válido.');
    if (password.length < 6) return setError('A senha deve ter pelo menos 6 caracteres.');
    if (password !== confirmPassword) return setError('As senhas não conferem.');
    void signUp(username.trim(), email.trim().toLowerCase(), password).then(() => router.replace('/')).catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Não foi possível criar a conta.'));
  };

  return <ScrollView contentContainerStyle={styles.scroll}><AuthPage eyebrow="CRIE SUA CONTA" title="Vamos começar" subtitle="Seus dados serão cadastrados com segurança no Back4App.">
    <Text style={styles.note}>Preencha os campos abaixo para criar seu usuário.</Text>
    <View style={styles.form}>
      <Field label="Nome de usuário" placeholder="seu.usuario" value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} textContentType="username" />
      <Field label="E-mail" placeholder="voce@exemplo.com" value={email} onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" />
      <Field label="Senha" placeholder="Mínimo de 6 caracteres" value={password} onChangeText={setPassword} secureTextEntry textContentType="newPassword" />
      <Field label="Confirme a senha" placeholder="Digite a senha novamente" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry textContentType="newPassword" />
      <ErrorMessage message={error} /><PrimaryButton title="Criar conta" loading={loading} onPress={submit} />
    </View>
    <Pressable onPress={() => router.back()}><Text style={uiStyles.link}>Já tem uma conta? Entrar</Text></Pressable>
  </AuthPage></ScrollView>;
}

const styles = StyleSheet.create({ scroll: { flexGrow: 1, justifyContent: 'center', paddingVertical: 24 }, note: { color: '#748099', fontSize: 13, marginTop: 22, marginBottom: 20 }, form: { gap: 16 } });

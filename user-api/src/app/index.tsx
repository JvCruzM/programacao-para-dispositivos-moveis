import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthPage, ErrorMessage, Field, palette, PrimaryButton, uiStyles } from '@/components/auth-ui';
import { useAuth } from '@/contexts/auth-context';

export default function IndexScreen() {
  const { user, loading, signIn, signOut } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user) return <AuthPage eyebrow="SUA CONTA" title={`Olá, ${user.username}`} subtitle="Você está conectado. Estes são os dados do seu perfil no Back4App.">
    <View style={styles.card}><Text style={styles.cardLabel}>USUÁRIO</Text><Text style={styles.cardValue}>{user.username}</Text>{user.email ? <><Text style={styles.cardLabel}>E-MAIL</Text><Text style={styles.cardValue}>{user.email}</Text></> : null}<Text style={styles.cardLabel}>IDENTIFICADOR</Text><Text style={styles.cardValue}>{user.objectId}</Text>{user.createdAt ? <><Text style={styles.cardLabel}>CRIADO EM</Text><Text style={styles.cardValue}>{new Date(user.createdAt).toLocaleDateString('pt-BR')}</Text></> : null}</View>
    <PrimaryButton title="Sair da conta" loading={loading} onPress={() => { void signOut().catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Não foi possível sair.')); }} /><ErrorMessage message={error} />
  </AuthPage>;

  return <ScrollView contentContainerStyle={styles.scroll}><AuthPage eyebrow="BACK4APP · PARSE SERVER" title="Acesse sua conta" subtitle="Entre para continuar ou crie uma conta nova para começar.">
    <View style={uiStyles.form}><Field label="Nome de usuário" placeholder="seu.usuario" value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} textContentType="username" /><Field label="Senha" placeholder="Sua senha" value={password} onChangeText={setPassword} secureTextEntry textContentType="password" /><ErrorMessage message={error} /><PrimaryButton title="Entrar" loading={loading} onPress={() => { setError(''); void signIn(username.trim(), password).catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Não foi possível entrar.')); }} /></View>
    <Pressable onPress={() => router.push('/register')}><Text style={uiStyles.link}>Ainda não tem conta? Cadastre-se</Text></Pressable>
  </AuthPage></ScrollView>;
}

const styles = StyleSheet.create({ scroll: { flexGrow: 1, justifyContent: 'center' }, card: { backgroundColor: palette.white, padding: 22, borderRadius: 18, borderWidth: 1, borderColor: palette.border, gap: 8, marginTop: 30, marginBottom: 18 }, cardLabel: { color: palette.muted, fontSize: 10, fontWeight: '800', letterSpacing: 1.3, marginTop: 8 }, cardValue: { color: palette.ink, fontSize: 15, fontWeight: '600' } });

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '@/contexts/auth-context';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#f5f7fb' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
      </Stack>
    </AuthProvider>
  );
}

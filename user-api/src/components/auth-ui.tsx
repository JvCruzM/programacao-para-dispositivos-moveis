import { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

export const palette = { ink: '#14213d', muted: '#748099', blue: '#315efb', pale: '#eef2ff', border: '#e3e8f2', white: '#fff', red: '#b42318' };

export function AuthPage({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children: ReactNode }) {
  return <View style={styles.page}><View style={styles.content}><View style={styles.brand}><View style={styles.brandMark}><Text style={styles.brandMarkText}>U</Text></View><Text style={styles.brandName}>USER API</Text></View><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.title}>{title}</Text><Text style={styles.subtitle}>{subtitle}</Text>{children}</View></View>;
}

export function Field({ label, ...props }: TextInputProps & { label: string }) {
  return <View style={styles.fieldWrap}><Text style={styles.label}>{label}</Text><TextInput placeholderTextColor="#a4adbd" style={styles.input} autoCapitalize="none" {...props} /></View>;
}

export function PrimaryButton({ title, loading, onPress }: { title: string; loading?: boolean; onPress: () => void }) {
  return <Pressable accessibilityRole="button" disabled={loading} onPress={onPress} style={({ pressed }) => [styles.button, pressed && !loading && { opacity: 0.86 }, loading && { opacity: 0.65 }]}>{loading ? <ActivityIndicator color={palette.white} /> : <Text style={styles.buttonText}>{title}</Text>}</Pressable>;
}

export function ErrorMessage({ message }: { message: string }) {
  return message ? <Text accessibilityRole="alert" style={styles.error}>{message}</Text> : null;
}

export const uiStyles = StyleSheet.create({ link: { color: palette.blue, fontSize: 14, fontWeight: '700', textAlign: 'center', marginTop: 22 }, form: { marginTop: 30, gap: 18 } });

const styles = StyleSheet.create({ page: { flex: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 40 }, content: { width: '100%', maxWidth: 440, alignSelf: 'center' }, brand: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 48 }, brandMark: { width: 38, height: 38, borderRadius: 13, backgroundColor: palette.blue, justifyContent: 'center', alignItems: 'center' }, brandMarkText: { color: palette.white, fontSize: 21, fontWeight: '800' }, brandName: { color: palette.ink, fontSize: 12, letterSpacing: 2.2, fontWeight: '800' }, eyebrow: { color: palette.blue, fontSize: 11, fontWeight: '800', letterSpacing: 1.8, marginBottom: 10 }, title: { color: palette.ink, fontSize: 32, lineHeight: 38, fontWeight: '800' }, subtitle: { color: palette.muted, fontSize: 15, lineHeight: 23, marginTop: 10 }, fieldWrap: { gap: 8 }, label: { color: palette.ink, fontWeight: '700', fontSize: 13 }, input: { height: 54, borderRadius: 14, borderWidth: 1, borderColor: palette.border, backgroundColor: palette.white, paddingHorizontal: 16, color: palette.ink, fontSize: 15 }, button: { height: 54, borderRadius: 14, backgroundColor: palette.blue, alignItems: 'center', justifyContent: 'center', marginTop: 4, shadowColor: palette.blue, shadowOpacity: 0.2, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 3 }, buttonText: { color: palette.white, fontSize: 15, fontWeight: '800' }, error: { color: palette.red, fontSize: 13, lineHeight: 19 } });

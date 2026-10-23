const SERVER_URL = process.env.EXPO_PUBLIC_PARSE_SERVER_URL?.replace(/\/$/, '');
const APP_ID = process.env.EXPO_PUBLIC_PARSE_APPLICATION_ID;
const REST_KEY = process.env.EXPO_PUBLIC_PARSE_REST_API_KEY;

export type ParseUser = {
  objectId: string;
  username: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  emailVerified?: boolean;
};

type AuthResponse = ParseUser & { sessionToken: string };

function getConfig() {
  if (!SERVER_URL || !APP_ID || !REST_KEY) {
    throw new Error('Configure as variáveis EXPO_PUBLIC_PARSE_* no arquivo .env.');
  }
  return { serverUrl: SERVER_URL, headers: { 'X-Parse-Application-Id': APP_ID, 'X-Parse-REST-API-Key': REST_KEY, 'X-Parse-Revocable-Session': '1', 'Content-Type': 'application/json' } };
}

async function request<T>(path: string, options: RequestInit = {}, sessionToken?: string): Promise<T> {
  const config = getConfig();
  let response: Response;
  try {
    response = await fetch(`${config.serverUrl}/parse/${path}`, {
      ...options,
      headers: { ...config.headers, ...(sessionToken ? { 'X-Parse-Session-Token': sessionToken } : {}), ...options.headers },
    });
  } catch {
    throw new Error('Não foi possível conectar ao Back4App. Verifique sua internet e a URL do servidor.');
  }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || 'Ocorreu um erro ao comunicar com o servidor.');
  return body as T;
}

export function signUp(username: string, email: string, password: string) {
  return request<AuthResponse>('users', { method: 'POST', body: JSON.stringify({ username, email, password }) });
}

export function logIn(username: string, password: string) {
  return request<AuthResponse>(`login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
}

export function getCurrentUser(sessionToken: string) {
  return request<ParseUser>('users/me', {}, sessionToken);
}

export function logOut(sessionToken: string) {
  return request('logout', { method: 'POST' }, sessionToken);
}

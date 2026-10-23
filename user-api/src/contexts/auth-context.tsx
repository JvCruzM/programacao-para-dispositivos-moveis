import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { getCurrentUser, logIn as parseLogIn, logOut as parseLogOut, ParseUser, signUp as parseSignUp } from '@/services/parse-api';

type AuthContextValue = {
  user: ParseUser | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ParseUser | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionToken) return;
    getCurrentUser(sessionToken).then(setUser).catch(() => { setSessionToken(null); setUser(null); });
  }, [sessionToken]);

  const signIn = useCallback(async (username: string, password: string) => {
    setLoading(true);
    try { const result = await parseLogIn(username, password); setSessionToken(result.sessionToken); setUser(result); }
    finally { setLoading(false); }
  }, []);

  const signUp = useCallback(async (username: string, email: string, password: string) => {
    setLoading(true);
    try { const result = await parseSignUp(username, email, password); setSessionToken(result.sessionToken); setUser(result); }
    finally { setLoading(false); }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    try { if (sessionToken) await parseLogOut(sessionToken); }
    finally { setSessionToken(null); setUser(null); setLoading(false); }
  }, [sessionToken]);

  const value = useMemo(() => ({ user, loading, signIn, signUp, signOut }), [user, loading, signIn, signUp, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth precisa ser usado dentro de AuthProvider.');
  return value;
}

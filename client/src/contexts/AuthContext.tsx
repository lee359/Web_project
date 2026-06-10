import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, missingFirebaseEnv } from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth || !db) {
      console.warn("Firebase is not configured.", missingFirebaseEnv);
      setIsLoading(false);
      return;
    }

    const activeAuth = auth;
    const activeDb = db;

    return onAuthStateChanged(activeAuth, async (currentUser) => {
      setUser(currentUser);
      setIsAdmin(false);

      if (!currentUser) {
        setIsLoading(false);
        return;
      }

      try {
        const adminDoc = await getDoc(doc(activeDb, "admins", currentUser.uid));
        setIsAdmin(adminDoc.exists());
      } finally {
        setIsLoading(false);
      }
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAdmin,
      isLoading,
      login: async (email, password) => {
        if (!auth) {
          throw new Error(
            `Firebase is not configured. Missing: ${missingFirebaseEnv.join(", ")}`
          );
        }

        await signInWithEmailAndPassword(auth, email, password);
      },
      logout: async () => {
        if (!auth) return;

        await signOut(auth);
      },
    }),
    [isAdmin, isLoading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

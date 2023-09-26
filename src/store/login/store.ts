import { create } from "zustand";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

type Credentials = {
  email: string;
  password: string;
};

type AuthStore = {
  isLoggedIn: boolean;
  loginError: string;
  login: (credentials: Credentials) => Promise<void>;
};

export const useLoginStore = create<AuthStore>((set) => ({
  isLoggedIn: auth.currentUser !== null,
  loginError: "",
  login: async (credentials: Credentials) => {
    const { email, password } = credentials;
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => set({ isLoggedIn: true }))
      .catch((e) => {
        console.error(e);
        set({ loginError: e.message });
      });
  },
}));

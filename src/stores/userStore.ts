import { create } from "zustand";
import { User } from "../entites";
import { logout as apiLogout, getMe } from "../services/authService";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const user = await getMe();
      set({ user, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  logout: async () => {
    try {
      await apiLogout();
    } finally {
      set({ user: null });
    }
  },
}));

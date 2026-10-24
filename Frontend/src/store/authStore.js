import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginAPI, registerAPI, getMeAPI } from '../../api';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await loginAPI(credentials);
          localStorage.setItem('token', data.data.token);
          set({ user: data.data.user, token: data.data.token, isLoading: false });
        } catch (err) {
          set({ error: err.response?.data?.message || 'Login failed', isLoading: false });
          throw err;
        }
      },

      register: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await registerAPI(payload);
          localStorage.setItem('token', data.data.token);
          set({ user: data.data.user, token: data.data.token, isLoading: false });
        } catch (err) {
          set({ error: err.response?.data?.message || 'Registration failed', isLoading: false });
          throw err;
        }
      },

      fetchMe: async () => {
        set({ isLoading: true });
        try {
          const { data } = await getMeAPI();
          set({ user: data.data.user, isLoading: false });
        } catch {
          set({ isLoading: false });
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);

export default useAuthStore;

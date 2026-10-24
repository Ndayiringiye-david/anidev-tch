import { useAuthStore } from '../store';

/**
 * Convenience hook — exposes auth state & actions
 */
const useAuth = () => {
  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);
  const isLoading = useAuthStore((s) => s.isLoading);
  const error = useAuthStore((s) => s.error);
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);
  const logout = useAuthStore((s) => s.logout);
  const clearError = useAuthStore((s) => s.clearError);
  const fetchMe = useAuthStore((s) => s.fetchMe);

  return { user, token, isLoading, error, login, register, logout, clearError, fetchMe };
};

export default useAuth;

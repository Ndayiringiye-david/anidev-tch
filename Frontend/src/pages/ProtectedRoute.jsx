import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { ROUTES } from '../../constants';

/**
 * Wraps routes that require an authenticated user.
 */
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to={ROUTES.LOGIN} replace />;
};

export default ProtectedRoute;

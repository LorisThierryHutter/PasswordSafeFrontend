import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isUserAuthenticated = isAuthenticated();

  return isUserAuthenticated ? children : <Navigate to="/signin" replace state={{ from: location }} />;
};

export default ProtectedRoute;

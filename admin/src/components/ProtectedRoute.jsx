import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, component }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return component;
};

export default ProtectedRoute;

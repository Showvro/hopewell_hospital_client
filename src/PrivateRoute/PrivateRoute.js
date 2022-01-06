import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div class=" flex justify-center items-center my-24">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
}
export default PrivateRoute;

import { useSelector } from "react-redux";
import { useCheckAuthorizationQuery } from "../api/apiSlice";

function ProtectedRoute({ children }) {
  const {
    data: authRes,
    isLoading: authIsLoading,
    error: authError,
  } = useCheckAuthorizationQuery();
  let isAuthenticated = null;
  console.log(authRes, authError);
  if (authIsLoading) <div>Loading...</div>;
  if (authError) isAuthenticated = false;
  else {
    isAuthenticated = true;
  }
  if (isAuthenticated) return children;
  return <div>You are not authenticated.</div>;
}

export default ProtectedRoute;

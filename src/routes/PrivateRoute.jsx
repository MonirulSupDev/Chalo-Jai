import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router";
import Loading from "../components/Shared/Loading/Loading";
import Swal from "sweetalert2";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      Swal.fire({
        icon: "error",
        title: "Login required",
        text: "Please log in to access this page",
      });
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return <Outlet />;
};

export default PrivateRoute;

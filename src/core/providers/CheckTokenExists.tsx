import { useVerifyToken } from "@core/tanstack-hooks/auth/verifyToken";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function CheckTokenExists() {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: verifyToken, error } = useVerifyToken();

  useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [error]);

  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken && location.pathname !== "/sign-up") navigate("/login");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default CheckTokenExists;

import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function CheckTokenExists() {
  const navigate = useNavigate();
  const location = useLocation();

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

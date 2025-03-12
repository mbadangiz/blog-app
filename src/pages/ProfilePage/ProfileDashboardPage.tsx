import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Profile/Dashboard";
import { useChangeTitle } from "@hooks/useChangeTitle";
import { useEffect } from "react";

function ProfileDashboardPage() {
  useChangeTitle("پروفایل کاربری - داشبورد");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/profile" || location.pathname === "/profile/") {
      navigate("/profile/dashboard");
    }
  }, []);

  return <Dashboard />;
}

export default ProfileDashboardPage;

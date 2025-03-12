import { Outlet } from "react-router-dom";
import ProfileLayout from "../../layout/ProfileLayout";

function ProfilePage() {
  return (
    <ProfileLayout>
      <Outlet />
    </ProfileLayout>
  );
}

export default ProfilePage;

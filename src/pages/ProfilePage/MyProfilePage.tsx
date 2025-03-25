import { useChangeTitle } from "@hooks/useChangeTitle";
import MyProfile from "../../components/Profile/MyProfile";

const MyProfilePage = () => {
  useChangeTitle("my-profile");
  return (
    <div>
      <MyProfile />
    </div>
  );
};

export default MyProfilePage;

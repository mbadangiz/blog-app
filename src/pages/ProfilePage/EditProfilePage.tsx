import { useChangeTitle } from "@hooks/useChangeTitle";
import EditProfile from "../../components/Profile/EditProfile";

const EditProfilePage = () => {
  useChangeTitle("edit-profile");
  return (
    <div>
      <EditProfile />
    </div>
  );
};

export default EditProfilePage;

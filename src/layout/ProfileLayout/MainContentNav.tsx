import { profileMainContentNavStyleConfig } from "@core/configs/styleConfigs/profile";
import { useGetProfile } from "@core/tanstack-hooks/profile/getProfile";
import useAppSettings from "@hooks/useAppSettings";
import generateSingleClassString from "@utils/generateSingleString";
import { FaMoon } from "react-icons/fa";
import { HiOutlineLogout, HiSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function MainContentNav() {
  return (
    <div className="sticky top-5 flex w-full justify-end">
      <div
        className={generateSingleClassString(
          profileMainContentNavStyleConfig.profileMainContentNav,
        )}
      >
        <div className="md:hidden">
          <ProfileImage />
        </div>

        {/* <div className="relative md:hidden">
          <CgMenuGridO
            size={25}
            onClick={() => setShowOptions((prev) => !prev)}
          />
          <div
            className={classNames({
              [Prodefault as string]: true,
              [Prodeactive as string]: showOptions === false,
              [Proactive as string]: showOptions === true,
            })}
          >
            <MenuOptions />
          </div>
        </div> */}

        <div className="hidden flex-row-reverse content-center items-center gap-5 md:flex">
          <ProfileImage />
          <MenuOptions />
        </div>
        {/* <Link to={"/search"}>
          <IoSearch size={25} className="mr-2" />
        </Link> */}
      </div>
    </div>
  );
}

function ProfileImage() {
  const { data: profileData } = useGetProfile();
  return (
    <img
      className="size-10 rounded-full"
      src={
        profileData?.profile?.avatar
          ? profileData.profile.avatar
          : "https://avatar.iran.liara.run/public"
      }
      alt="avatar-sample"
    />
  );
}

function MenuOptions() {
  const { toggleTheme, themeSchema } = useAppSettings();
  const navigate = useNavigate();
  return (
    <>
      {/* <FiInfo size={25} /> */}
      <div onClick={toggleTheme}>
        {themeSchema === "light" ? <FaMoon size={20} /> : <HiSun size={24} />}
      </div>

      <HiOutlineLogout
        size={24}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      />
    </>
  );
}

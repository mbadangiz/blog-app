import { profileMainContentNavStyleConfig } from "@core/configs/styleConfigs/profile";
import useAppSettings from "@hooks/useAppSettings";
import generateSingleClassString from "@utils/generateSingleString";
import classNames from "classnames";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { HiOutlineLogout, HiSun } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

export function MainContentNav() {
  const [showOptions, setShowOptions] = useState(false);
  const { profileMenuOptions } = profileMainContentNavStyleConfig;

  const {
    default: Prodefault,
    active: Proactive,
    deactive: Prodeactive,
  } = profileMenuOptions;

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

        <div className="relative md:hidden">
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
        </div>

        <div className="hidden flex-row-reverse content-center items-center gap-5 md:flex">
          <ProfileImage />
          <MenuOptions />
        </div>
        <Link to={"/search"}>
          <IoSearch size={25} className="mr-2" />
        </Link>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <img
      className="size-10"
      src="https://avatar.iran.liara.run/public"
      alt="avatar-sample"
    />
  );
}

function MenuOptions() {
  const { toggleTheme, themeSchema } = useAppSettings();
  return (
    <>
      <FiInfo size={25} />
      <div onClick={toggleTheme}>
        {themeSchema === "light" ? <FaMoon size={20} /> : <HiSun size={24} />}
      </div>

      <HiOutlineLogout size={24} />
    </>
  );
}

import {
  profileMenuItemsStyleConfig,
  profileMenuStyleConfig,
} from "@core/configs/styleConfigs/profile";
import generateSingleClassString from "@utils/generateSingleString";
import classNames from "classnames";
import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import {
  In_ProfileMenuItems,
  In_ProfileMenuProps,
} from "../../core/types/interfaces";
import routesLeveling from "./../../utils/routesLeveling";
import { profileMenuObjects } from "./ProfileMenuNavigatoinObject";
import useAppSettings from "@hooks/useAppSettings";

interface ProfileMenuProps2 {
  childrenMenuHandlers: In_ProfileMenuProps;
}

function ProfileMenu({ childrenMenuHandlers }: ProfileMenuProps2) {
  const menu = routesLeveling(profileMenuObjects, 1);

  return (
    <nav className={generateSingleClassString(profileMenuStyleConfig.nav)}>
      <section className="font-Black_ir hidden h-32 w-full content-center items-center justify-center border-b-[1px] text-2xl lg:flex">
        Form-Generator
      </section>
      <ul className={generateSingleClassString(profileMenuStyleConfig.ul)}>
        {menu.map((items) => {
          return (
            <MenuItems
              key={items.id}
              items={items}
              childrenMenuHandlers={childrenMenuHandlers}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default ProfileMenu;

function MenuItems({
  items,
  childrenMenuHandlers,
}: {
  items: In_ProfileMenuItems;
  childrenMenuHandlers: In_ProfileMenuProps;
}) {
  const { icon, id, path, title, children, level } = items;
  const { pathname } = useLocation();
  const [isClose, setIsClose] = useState(false);
  const { setChildrenMenu } = childrenMenuHandlers;

  const { appDir } = useAppSettings();
  const { liSC, linkSC } = profileMenuItemsStyleConfig;

  const {
    default: liSCDefault,
    active: liSCActive,
    deactive: liSCDeactive,
    dark: liSCdark,
  } = liSC;

  const { default: linkSCCDefault, active: linkSCActive } = linkSC;

  const indentStyle =
    appDir === "rtl"
      ? { paddingRight: 25 * (level ? level - 1 : 0) }
      : { paddingLeft: 25 * (level ? level - 1 : 0) };

  return (
    <div className="relative">
      <Link
        to={path}
        className={classNames({
          [linkSCCDefault as string]: true,
          [linkSCActive as string]: pathname === path,
        })}
        onClick={(e) => {
          const getWindowWidth = window.innerWidth;
          if (children) {
            e.preventDefault();
            setIsClose((prev) => !prev);
            if (getWindowWidth < 600) {
              setChildrenMenu(items);
            }
          }
        }}
        key={id}
      >
        <li
          className={classNames({
            [liSCDefault as string]: true,
            [liSCActive as string]: pathname === path,
            [liSCDeactive as string]: pathname !== path,
            [liSCdark as string]: true,
          })}
          style={indentStyle}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          {children && (
            <div className="flex items-center">
              {isClose ? (
                <RiArrowDownSLine className="h-5 w-5" />
              ) : appDir === "ltr" ? (
                <RiArrowRightSLine className="h-5 w-5" />
              ) : (
                <RiArrowLeftSLine className="h-5 w-5" />
              )}
            </div>
          )}
        </li>
      </Link>
      {children && (
        <div
          className={classNames({
            "hidden lg:block": true,
            "h-0 overflow-hidden": isClose === false,
            "h-max overflow-hidden": isClose === true,
          })}
        >
          {children.map((items) => (
            <MenuItems
              items={items}
              key={items.id}
              childrenMenuHandlers={childrenMenuHandlers}
            />
          ))}
        </div>
      )}
    </div>
  );
}

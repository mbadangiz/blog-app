import { profileMenuStyleConfig } from "@core/configs/styleConfigs/profile";
import generateSingleClassString from "@utils/generateSingleString";
import classNames from "classnames";
import { useState, useEffect } from "react";
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
  const { appDir } = useAppSettings();

  return (
    <nav className={generateSingleClassString(profileMenuStyleConfig.nav)}>
      <section className="font-Black_ir hidden h-32 w-full content-center items-center justify-center border-b-[1px] text-2xl lg:flex">
        Form-Generator
      </section>
      <ul
        className={classNames(
          generateSingleClassString(profileMenuStyleConfig.ul),
          appDir === "rtl" ? "pr-4" : "pl-4",
        )}
      >
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
  const [isOpen, setIsOpen] = useState(() => {
    return children?.some((child) => pathname.includes(path)) || false;
  });
  const { setChildrenMenu } = childrenMenuHandlers;
  const { appDir } = useAppSettings();

  const indentStyle =
    appDir === "rtl"
      ? { paddingRight: 25 * (level ? level - 1 : 0) }
      : { paddingLeft: 25 * (level ? level - 1 : 0) };

  const isActive =
    pathname === path || children?.some((child) => pathname === child.path);

  useEffect(() => {
    if (children?.some((child) => pathname.includes(path))) {
      setIsOpen(true);
    }
  }, [pathname, path, children]);

  return (
    <div className="relative">
      <Link
        to={path}
        className={classNames(
          "block transition-all duration-200 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800/50",
          {
            "bg-gray-50 dark:bg-gray-800/50": isActive,
          },
        )}
        onClick={(e) => {
          const getWindowWidth = window.innerWidth;
          if (children) {
            e.preventDefault();
            setIsOpen((prev) => !prev);
            if (getWindowWidth < 600) {
              setChildrenMenu(items);
            }
          }
        }}
        key={id}
      >
        <li
          className={classNames(
            "relative flex items-center justify-between py-2.5",
            "transition-all duration-200 ease-in-out",
            {
              "text-gray-600 dark:text-gray-300": !isActive,
              "text-primary-600 dark:text-primary-400 font-medium": isActive,
              [appDir === "rtl" ? "border-l-4" : "border-r-4"]: isActive,
              "border-primary-600 dark:border-primary-400": isActive,
            },
          )}
          style={indentStyle}
        >
          <div
            className={classNames(
              "flex items-center gap-3",
              appDir === "rtl" ? "pr-4" : "pl-4",
            )}
          >
            <span
              className={classNames("transition-colors duration-200", {
                "text-gray-400 dark:text-gray-500": !isActive,
                "text-primary-600 dark:text-primary-400": isActive,
              })}
            >
              {icon}
            </span>
            <span>{title}</span>
          </div>
          {children && (
            <div
              className={classNames(
                "flex items-center transition-transform duration-200",
                appDir === "rtl" ? "pl-4" : "pr-4",
                {
                  "rotate-180": isOpen,
                },
              )}
            >
              <RiArrowDownSLine className="h-5 w-5" />
            </div>
          )}
        </li>
      </Link>
      {children && (
        <div
          className={classNames(
            "overflow-hidden transition-all duration-200 ease-in-out",
            {
              "max-h-0": !isOpen,
              "max-h-[500px]": isOpen,
            },
          )}
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

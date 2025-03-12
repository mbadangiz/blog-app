import {
  profileMenuItemsStyleConfig,
  profileMenuStyleConfig,
} from "@core/configs/styleConfigs/profile";
import generateSingleClassString from "@utils/generateSingleString";
import classNames from "classnames";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowLeftSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import {
  In_ProfileMenuItems,
  In_ProfileMenuProps,
} from "../../core/types/interfaces";
import routesLeveling from "./../../utils/routesLeveling";
import { profileMenuObjects } from "./ProfileMenuNavigatoinObject";

interface ProfileMenuProps2 {
  childrenMenuHandlers: In_ProfileMenuProps;
}

function ProfileMenu({ childrenMenuHandlers }: ProfileMenuProps2) {
  const menu = routesLeveling(profileMenuObjects, 1);

  return (
    <nav className={generateSingleClassString(profileMenuStyleConfig.nav)}>
      <section className="hidden h-32 w-full content-center items-center justify-center border-b-[1px] font-Black_ir text-2xl lg:flex">
        صفحه ساز
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

  const { liSC, linkSC } = profileMenuItemsStyleConfig;

  const {
    default: liSCDefault,
    active: liSCActive,
    deactive: liSCDeactive,
    dark: liSCdark,
  } = liSC;

  const { default: linkSCCDefault, active: linkSCActive } = linkSC;

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
            [liSCdark as string]: true,
            [liSCDeactive as string]: pathname !== path,
            [liSCActive as string]: pathname === path,
          })}
          style={{
            paddingRight: 25 * (level ? level - 1 : 0),
          }}
        >
          <div className="flex content-center items-center justify-between gap-3">
            <div
              className={classNames({
                "text-2xl md:text-base": true,
                "text-light-steelBlue": pathname !== path,
                "text-electricIndigo dark:text-dark-electricLavender":
                  pathname === path,
              })}
            >
              {icon}
            </div>
            <div
              className={classNames({
                "hidden lg:block": true,
                "font-Bold_ir": pathname === path,
              })}
            >
              {title}
            </div>
          </div>

          {children &&
            (!isClose ? (
              <RiArrowLeftSLine size={22} className="hidden lg:block" />
            ) : (
              <RiArrowDownSLine size={22} className="hidden lg:block" />
            ))}
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

// function isChild(list: In_ProfileMenuItems[], currentPath: string): number {
//   for (const item of list) {
//     if (item.path === currentPath) {
//       return item.parentId || 0;
//     }

//     if (item.children) {
//       const parentId = isChild(item.children, currentPath);
//       if (parentId !== 0) {
//         return parentId;
//       }
//     }
//   }

//   return 0;
// }

// function findMainParent(list: In_ProfileMenuItems[], parentId: number) {
//   for (const items of list) {
//     if (items.id === parentId) {
//       return items;
//     }

//     if (items.children) {
//       const data = findMainParent(items.children, parentId);
//       if (data?.level! > 1) {
//       }
//     }
//   }
//   return null;
// }

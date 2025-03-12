import { In_ProfileMenuItems, In_ProfileMenuProps } from "@typesDef/interfaces";
import { findParent } from "@utils/findParentRoute";
import routesLeveling from "@utils/routesLeveling";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { profileMenuObjects } from "../ProfileMenuNavigatoinObject";
import Styles from "./ResponsiveMenu.module.css";

interface ResponsiveMenuProps {
  childrenMenuHandlers: In_ProfileMenuProps;
}

function ResponsiveMenu({ childrenMenuHandlers }: ResponsiveMenuProps) {
  const { childrenMenu, setChildrenMenu } = childrenMenuHandlers;

  const [title, setTitle] = useState<string>("");
  const [parentId, setParentId] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);
  const mainRoutes = routesLeveling(profileMenuObjects, 1);

  useEffect(() => {
    setTitle(childrenMenu!.title);
    if (childrenMenu?.level === 1) {
      setParentId(undefined);
    }
    setTimeout(() => {
      if (menuRef.current) {
        menuRef.current!.style.top = "0px";
      }
    }, 500);
  }, [childrenMenu]);

  return (
    <>
      <div
        className={`${childrenMenu ? Styles.makeAnimateDarkBackgroundCome : Styles.makeAnimateDarkBackgroundExit} fixed right-0 top-0 z-leve4 flex h-[calc(100%-64px)] w-full flex-col content-center items-center justify-end bg-black/40 backdrop-blur-[2px] transition-all duration-300 lg:hidden`}
      >
        <div
          className={`relative top-full max-h-[550px] min-h-24 w-11/12 rounded-t-xl border-b-2 border-solid border-black/20 bg-white px-4 py-3 shadow-md transition-all duration-500`}
          ref={menuRef}
        >
          <div className="sticky top-0 mb-4 flex w-full content-center items-center justify-between">
            <div>{title}</div>
            {!parentId ? (
              <RxCross2
                size={22}
                className="cursor-pointer"
                onClick={() => {
                  setChildrenMenu(undefined);
                }}
              />
            ) : (
              <IoMdArrowRoundBack
                size={22}
                className="cursor-pointer"
                onClick={() => {
                  const findedPath = findParent(mainRoutes, parentId);
                  setChildrenMenu(findedPath ? findedPath : undefined);
                }}
              />
            )}
          </div>
          <div className="divide-y-[1.7px] divide-light-navyblue/10">
            {childrenMenu!.children!.map((items) => {
              return (
                <ResponsiveMenuItems
                  key={items.id}
                  items={items}
                  setChildrenMenu={setChildrenMenu}
                  setParentId={setParentId}
                  childrenMenu={childrenMenu}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ResponsiveMenu;

interface ResponsiveMenuItemsProps {
  items: In_ProfileMenuItems;
  setChildrenMenu: Dispatch<SetStateAction<In_ProfileMenuItems | undefined>>;
  setParentId: Dispatch<SetStateAction<number | undefined>>;
  childrenMenu: In_ProfileMenuItems | undefined;
}

function ResponsiveMenuItems({
  items,
  setChildrenMenu,
  setParentId,
  childrenMenu,
}: ResponsiveMenuItemsProps) {
  useEffect(() => {
    if (childrenMenu!.level! > 1) {
      if (items.parentId === childrenMenu!.id) {
        setParentId(childrenMenu!.parentId);
      }
    }
  }, [childrenMenu]);

  return (
    <Link
      to={items.path}
      key={items.id}
      className="block"
      onClick={(e) => {
        if (items.children) {
          e.preventDefault();
          setChildrenMenu(items);
          setParentId(items.parentId ? items.parentId : undefined);
        }
      }}
    >
      <div className="flex h-12 w-full content-center items-center justify-between">
        <div className="flex w-full content-center items-center gap-2">
          <div className="!text-sm">{items.icon}</div>
          <p className="text-sm"> {items.title}</p>
        </div>
        {items.children && <IoIosArrowBack />}
      </div>
    </Link>
  );
}

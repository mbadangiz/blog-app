import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { In_ProfileMenuItems } from "src/core/types/interfaces";
import { MainContentNav } from "./MainContentNav";
import ProfileMenu from "./ProfileMenu";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

interface ProfileLayoutProps {
  children: ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  const [childrenMenu, setChildrenMenu] = useState<
    In_ProfileMenuItems | undefined
  >();
  const { pathname } = useLocation();

  useEffect(() => {
    setChildrenMenu(undefined);
  }, [pathname]);

  return (
    <div className="h-svh w-full items-stretch lg:grid lg:grid-cols-5 lg:grid-rows-1 xl:grid-cols-6">
      <ProfileMenu childrenMenuHandlers={{ childrenMenu, setChildrenMenu }} />

      {childrenMenu && (
        <ResponsiveMenu
          childrenMenuHandlers={{ childrenMenu, setChildrenMenu }}
        />
      )}

      <div className="h-[calc(100%-64px)] overflow-auto lg:col-span-4 lg:h-auto xl:col-span-5">
        <div className="container h-full px-5 pt-20 md:px-3 md:pt-6 xl:px-0">
          <MainContentNav />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;

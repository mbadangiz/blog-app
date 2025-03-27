import { useGetProfile } from "@core/tanstack-hooks/profile/getProfile";
import useAppSettings from "@hooks/useAppSettings";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function HomePages() {
  const { data: profile } = useGetProfile();
  const { toggleTheme, themeSchema } = useAppSettings();
  return (
    <div className="w-full dark:bg-dark-deepSpace">
      <nav className="h-16 w-full bg-white dark:bg-dark-midnightBlue">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full w-full content-center items-center justify-between">
            <h1 className="text-2xl font-bold">Blog App</h1>
            <div className="flex h-full content-center items-center justify-between gap-4">
              <button
                onClick={() => toggleTheme()}
                className="mr-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {themeSchema === "dark" ? (
                  <IoSunnyOutline size={24} />
                ) : (
                  <IoMoonOutline size={24} />
                )}
              </button>
              <Link to="/profile">
                <img
                  src={profile?.profile.avatar}
                  alt="avatart"
                  className="size-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl bg-inherit px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePages;

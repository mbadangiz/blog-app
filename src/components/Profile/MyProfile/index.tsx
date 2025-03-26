import { Link } from "react-router-dom";
import ProfileCardBg from "../../../assets/Images/profile-card-bg.png";
import { CiEdit } from "react-icons/ci";
import { useGetProfile } from "@core/tanstack-hooks/profile/getProfile";

const MyProfile = () => {
  const { data, isPending, error, isSuccess } = useGetProfile();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (isSuccess)
    return (
      <div className="grid gap-5 p-3 lg:grid-cols-8">
        <div className="col-span-8 grid rounded-[20px] bg-white p-3 dark:bg-[rgb(17,28,68)] xl:col-span-4">
          <div className="">
            <img src={ProfileCardBg} className="w-full" />
          </div>
          <div className="relative bottom-12 mx-auto flex size-[80px] content-center items-center justify-center overflow-hidden rounded-full bg-red-200 p-1 dark:bg-red-300">
            <img src={data.profile.avatar} alt="" className="size-[120%]" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {data.profile.firstname} {data.profile.lastname}
            </h3>
            <div className="m-auto mt-2 w-fit">
              <Link to={"/profile/personal-info/edit"}>
                <CiEdit
                  size={30}
                  className="text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* general information */}
        <div className="col-span-8 grid gap-5 rounded-[20px] bg-white p-5 dark:bg-[rgb(17,28,68)] xl:col-span-4">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">
            General Information
          </h4>
          <p className="text-[#A3AED0] dark:text-gray-300">
            {data.profile.bio}
          </p>
          <div className="flex flex-wrap justify-evenly gap-y-4">
            <div className="grid max-w-[250px] gap-2 rounded-2xl bg-white p-3 shadow-lg dark:bg-[rgb(17,28,68)] dark:shadow-[#7090B01F]">
              <span className="text-sm text-[#A3AED0] dark:text-gray-300">
                Country
              </span>
              <span className="text-gray-800 dark:text-white">
                {data.profile.location.country}
              </span>
            </div>
            <div className="grid max-w-[250px] gap-2 rounded-2xl bg-white p-3 shadow-lg dark:bg-[rgb(17,28,68)] dark:shadow-[#7090B01F]">
              <span className="text-sm text-[#A3AED0] dark:text-gray-300">
                City
              </span>
              <span className="text-gray-800 dark:text-white">
                {data.profile.location.city}
              </span>
            </div>
            <div className="grid max-w-[250px] gap-2 rounded-2xl bg-white p-3 shadow-lg dark:bg-[rgb(17,28,68)] dark:shadow-[#7090B01F]">
              <span className="text-sm text-[#A3AED0] dark:text-gray-300">
                State
              </span>
              <span className="text-gray-800 dark:text-white">
                {data.profile.location.state}
              </span>
            </div>
            <div className="grid max-w-[250px] gap-2 rounded-2xl bg-white p-3 shadow-lg dark:bg-[rgb(17,28,68)] dark:shadow-[#7090B01F]">
              <span className="text-sm text-[#A3AED0] dark:text-gray-300">
                Zip Code
              </span>
              <span className="text-gray-800 dark:text-white">
                {data.profile.location.zipCode}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;

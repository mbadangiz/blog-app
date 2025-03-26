import { CustomInputRHF } from "@core/components/FormFields/ReactHookFormCustomFields";
import { useGetProfile } from "@core/tanstack-hooks/profile/getProfile";
import { useUpdateProfile } from "@core/tanstack-hooks/profile/updateProfile";
import {
  UpdateProfileDto,
  UpdateProfileSchema,
} from "@core/validations/updateProfile";
import Button from "@FormFields/Initial/Button";
import InputFile from "@FormFields/Initial/File";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import {
  In_EditProfileForm,
  In_FileObject,
  In_ProfileUpdateResponse,
} from "@typesDef/interfaces";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const queryClient = useQueryClient();
  const { data: profileData } = useGetProfile();
  const [file, setFile] = useState<In_FileObject | null>(null);

  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const navigate = useNavigate();

  const methods = useForm<UpdateProfileDto>({
    resolver: zodResolver(UpdateProfileSchema),
  });

  useEffect(() => {
    if (profileData) {
      methods.reset({
        firstname: profileData?.profile?.firstname || "",
        lastname: profileData?.profile?.lastname || "",
        bio: profileData?.profile?.bio || "",
        address: profileData?.profile?.location?.address || "",
        city: profileData?.profile?.location?.city || "",
        state: profileData?.profile?.location?.state || "",
        country: profileData?.profile?.location?.country || "",
        zipCode: profileData?.profile?.location?.zipCode || "",
      });
    }
  }, [profileData, methods]);

  const onSubmit = (data: In_EditProfileForm) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file.files);
    }

    const objKeys = Object.keys(data);

    objKeys.forEach((key) => {
      const value = data[key as keyof In_EditProfileForm];
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    updateProfile(formData, {
      onSuccess: (data: In_ProfileUpdateResponse) => {
        if (data.success) {
          queryClient.invalidateQueries({
            queryKey: ["profile"],
          });
          toast.success(data.message);
          if (data?.newRole) {
            toast.success(
              "You will be logged out shortly and will need to log in again with a new role.",
            );
            setTimeout(() => {
              localStorage.removeItem("token");
              navigate("/login");
            }, 1200);
          }
          navigate("/profile");
        }
      },
      onError: (error: any) => {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while updating profile");
        }
      },
    });
  };

  const handleFileChange = (files: In_FileObject[] | null) => {
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="grid gap-5 p-3 lg:grid-cols-1">
      <div className="col-span-1 grid gap-5 rounded-[20px] p-5 dark:bg-[rgb(17,28,68)] xl:col-span-4">
        <h4 className="text-xl font-bold">Edit Profile</h4>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="grid gap-4"
          >
            <div className="grid grid-cols-1 items-start gap-4 rounded-lg bg-white p-5 dark:bg-dark-midnightBlue md:grid-cols-2">
              <div className="grid gap-4">
                <h5 className="text-lg font-semibold">Personal Information</h5>
                <CustomInputRHF
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                />
                <CustomInputRHF
                  name="lastname"
                  placeholder="Last Name"
                  label="Last Name"
                />
                <CustomInputRHF name="bio" placeholder="Bio" label="Bio" />
              </div>
              <div className="grid gap-4">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Location
                </h5>
                <CustomInputRHF
                  name="country"
                  placeholder="Country"
                  label="Country"
                />
                <CustomInputRHF name="city" placeholder="City" label="City" />
                <CustomInputRHF
                  name="state"
                  placeholder="State"
                  label="State"
                />
                <CustomInputRHF
                  name="zipCode"
                  placeholder="Zip Code"
                  label="Zip Code"
                />
                <CustomInputRHF
                  name="address"
                  placeholder="address"
                  label="Address"
                />
              </div>
            </div>
            <InputFile
              id="avatar"
              handleAddFile={handleFileChange}
              multiple={false}
              accept="image/*"
              limit={1}
            />
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isPending}
                className="disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save Changes
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/profile")}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default EditProfile;

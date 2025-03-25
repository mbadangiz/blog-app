import {
  CustomInputRHF,
  FormSelectRHF,
} from "@core/components/FormFields/ReactHookFormCustomFields";
import { useCreateBlog } from "@core/tanstack-hooks/Blogs/BlogCreate";
import Button from "@FormFields/Initial/Button";
import InputFile from "@FormFields/Initial/File";
import { ReactHookFormCustomTextArea } from "@FormFields/ReactHookFormCustomFields/ReactHookFormCustomTextArea";
import { BlogStatus } from "@typesDef/enum";
import {
  In_CreateBlo,
  In_CreateBlogResponse,
  In_FileObject,
} from "@typesDef/interfaces";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [file, setFile] = useState<In_FileObject | null>(null);
  const { mutate: createBlog, isPending } = useCreateBlog();

  const navigate = useNavigate();

  const methods = useForm<In_CreateBlo>();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file.files);
    }

    const customData = {
      categoryIds: [data.categoryIds.value].join(","),
      content: data.content,
      status: data.status.value,
      title: data.title,
      seoContent: data.seoContent,
      seoTitle: data.seoTitle,
    };

    const customDataKeys = Object.keys(customData);

    customDataKeys.forEach((key) => {
      const value = customData[key];
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    createBlog(formData, {
      onSuccess: (data: In_CreateBlogResponse) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/blog/" + data.id);
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

  const statusOptions = [
    { label: "Draft", value: "DRAFT" },
    { label: "Published", value: "PUBLISHED" },
    { label: "Archived", value: "ARCHIVED" },
  ];
  const cateOptions = [
    { label: "Cate 1", value: 1 },
    { label: "Cate 2", value: 2 },
    { label: "Cate 3", value: 3 },
  ];
  const handleFileChange = (files: In_FileObject[] | null) => {
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="grid gap-5 p-3 lg:grid-cols-1">
      <div className="col-span-1 grid gap-5 rounded-[20px] bg-white p-5 dark:bg-[rgb(17,28,68)] xl:col-span-4">
        <h4 className="text-xl font-bold">Edit Profile</h4>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="my-3 grid grid-cols-1 gap-4 md:grid-cols-2">
              <CustomInputRHF
                name="title"
                placeholder="Title"
                required
                label="Title"
              />
              <CustomInputRHF
                name="seoTitle"
                placeholder="seo Title"
                label="Seo Title"
              />
              <CustomInputRHF
                name="seoContent"
                placeholder="seo Content"
                label="Seo Content"
              />
              <div className="flex gap-6">
                <FormSelectRHF
                  extraClass="!w-full"
                  name="categoryIds"
                  placeholder="categoryIds"
                  required
                  label="Category Ids"
                  options={cateOptions}
                />
                <FormSelectRHF
                  extraClass="!w-full"
                  name="status"
                  placeholder="Status"
                  required
                  label="Status"
                  options={statusOptions}
                />
              </div>
            </div>
            <div className="mb-3">
              <ReactHookFormCustomTextArea
                name="content"
                placeholder="Content"
                label="Content"
                required
              />
            </div>
            <div>
              <InputFile
                id="avatar"
                handleAddFile={handleFileChange}
                multiple={false}
                accept="image/*"
                limit={1}
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isPending}
                className="disabled:cursor-not-allowed disabled:opacity-50"
              >
                Create New Blog
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default CreateBlog;

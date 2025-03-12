import { inputTypeFileIn_styleConfigs } from "@configs/In_styleConfigs/FormFields";
import { filesExtentionCategories, FileTypeIcons } from "@core/constants";
import { FlexAllCentered } from "@coreComps/Divisions/Flex";
import { In_FileObject, In_InputFileProps } from "@typesDef/interfaces";
import { T_fileTypes } from "@typesDef/types";
import generateSingleClassString from "@utils/generateSingleString";
import { ChangeEvent, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { LuFilePlus2 } from "react-icons/lu";

function InputFile({
  id,
  handleAddFile,
  multiple,
  accept,
  sizeMb,
  limit,
  ...props
}: In_InputFileProps) {
  const [inputFiles, setFiles] = useState<In_FileObject[]>([]);

  function handleRemoveFiles(id: number) {
    const filteredData = inputFiles.filter((item) => item.id !== id);
    setFiles(filteredData);
  }

  useEffect(() => {
    if (handleAddFile) {
      handleAddFile(inputFiles);
    }
  }, [inputFiles]);

  function findExtentionCategory(extention: string): T_fileTypes | undefined {
    for (const item of Object.keys(filesExtentionCategories) as T_fileTypes[]) {
      if (filesExtentionCategories[item].includes(extention)) return item;
    }
    return undefined;
  }

  function SelectedFiles() {
    if (inputFiles.length !== 0)
      return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {inputFiles.map((singleFile) => {
            const fileNames = singleFile.files.name;

            const fileExtention =
              fileNames.split(".")[fileNames.split(".").length - 1];

            const outPutType = findExtentionCategory(fileExtention);

            return (
              <FlexAllCentered
                key={singleFile.id}
                className="col-span-1 h-12 justify-between rounded-md border-2 border-light-steelBlue/20 bg-inherit px-5"
              >
                <div className="opacity-65">
                  {FileTypeIcons[outPutType as T_fileTypes]}
                </div>
                <p className="w-5/6 truncate text-15 opacity-80">{fileNames}</p>
                <CgClose
                  className="cursor-pointer text-light-steelBlue"
                  onClick={() => {
                    handleRemoveFiles(singleFile.id);
                  }}
                />
              </FlexAllCentered>
            );
          })}
        </div>
      );

    return <></>;
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files ? Array.from(e.target.files) : [];

    if (limit && inputFiles.length >= limit)
      alert(
        "شما به حد نساب تعداد فایل انتخابی رسیده اید، و قادر به انتخاب فایل جدید نمی باشید.",
      );
    else if (limit && files.length > limit)
      alert("تعداد فایلا زیاده از نو  انتخات کن.");
    else {
      const formattedFiles: In_FileObject[] = files.map((file, index) => ({
        files: file,
        id: Math.floor(Math.random() * 1000 * (inputFiles.length + index)),
      }));

      setFiles((prev) => [...prev, ...formattedFiles]);
    }
  }

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`${generateSingleClassString(inputTypeFileIn_styleConfigs.label)}`}
      >
        <LuFilePlus2 size={24} />
        <p className="mx-auto text-center text-sm">
          برای بارگذاری فایل جدید کلیک کنید و یا فایل مورد نظر را در اینجا رها
          کنید.
        </p>

        <input
          {...props}
          type="file"
          id={id}
          className={`${generateSingleClassString(inputTypeFileIn_styleConfigs.input)}`}
          multiple={multiple}
          onChange={handleInputChange}
          accept={accept ? accept : "*"}
          size={sizeMb}
        />
      </label>
      <SelectedFiles />
    </div>
  );
}

export default InputFile;

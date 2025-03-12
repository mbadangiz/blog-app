import { FlexAllCentered } from "@coreComps/Divisions/Flex";
import { In_TabsProps } from "@typesDef/interfaces";
import { Fragment, useState } from "react";

export default function Tabs({
  tabs,
  width,
  height,
  activeTab: active,
}: In_TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(active || 1);
  function handleActiveTab(id: number) {
    setActiveTab(id);
  }
  return (
    <div
      style={{ width: width, height: height }}
      className="flex min-w-[360px] max-w-7xl flex-col content-center items-center gap-3 overflow-x-auto rounded-xl bg-white px-5 py-3 dark:bg-dark-midnightBlue"
    >
      <FlexAllCentered
        className="w-max rounded-lg bg-light-steelBlue/25 px-2 py-1.5"
        gap={10}
      >
        {tabs.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <FlexAllCentered
                className={`min-w-24 cursor-pointer gap-2 rounded-lg py-1 text-center font-Medium_ir ${activeTab === item.id && "bg-white dark:bg-dark-midnightBlue"}`}
                onClick={() => handleActiveTab(item.id)}
              >
                {item.icon}
                {item.title}
              </FlexAllCentered>
              {tabs.length - 1 !== index && (
                <span className="opacity-30">|</span>
              )}
            </Fragment>
          );
        })}
      </FlexAllCentered>
      <div className="w-full">
        {tabs.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}

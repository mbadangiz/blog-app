import { FlexAllCentered } from "@coreComps/Divisions/Flex";
import Timeline from "@coreComps/Timeline";
import Button from "@FormFields/Initial/Button";
import useAppSettings from "@hooks/useAppSettings";
import { In_TimeLineData } from "@typesDef/interfaces";
import { FaFortAwesomeAlt } from "react-icons/fa";

function Test() {
  const { toggleTheme, toggleAppDir } = useAppSettings();

  const timeLineData: In_TimeLineData[] = [
    { id: 1, content: "acs", title: "casc" },
    { id: 2, content: "cascascasc", title: "cascas", icon: "acas" },
    {
      id: 3,
      content: "scascacas",
      title: "ss",
      icon: <FaFortAwesomeAlt />,
      time: new Date("Mon Feb 17 2025 08:40:21 GMT+0330 (Iran Standard Time"),
    },
  ];
  return (
    <div className="container">
      <Button onClick={toggleTheme} className="mb-10">
        عوض کردن تم
      </Button>
      <Button onClick={toggleAppDir} className="mx-2 mb-10">
        عوض کردن دایرکشن
      </Button>
      <FlexAllCentered>
        <Timeline data={timeLineData} />
      </FlexAllCentered>
    </div>
  );
}

export default Test;

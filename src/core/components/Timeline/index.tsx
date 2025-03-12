import { In_TimeLineProps } from "@typesDef/interfaces";
import { calculateTimeIntervalUntilToday } from "@utils/calculateTimeIntervalUntilToday";
import { isHttpLink } from "@utils/isHttpLink";

function Timeline({ data }: In_TimeLineProps) {
  console.log(data);
  //   isHttpLink;
  const newDate = new Date(
    "Mon Feb 10 2025 08:40:21 GMT+0330 (Iran Standard Time",
  );
  console.log(calculateTimeIntervalUntilToday(newDate));
  return (
    <div className="w-full rounded-[20px] bg-white p-4 py-3 dark:bg-dark-midnightBlue">
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Timeline;

import { In_StyleConfig } from "@core/types/interfaces";

function generateSingleClassString(myData: In_StyleConfig): string {
  let finnalStr: string = "";
  Object.keys(myData).forEach((items) => {
    const key = items as keyof In_StyleConfig;

    if (myData[key]) {
      finnalStr += ` ${myData[key]} `;
    }
  });
  return finnalStr;
}

export default generateSingleClassString;

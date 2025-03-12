export default function safeClassesList() {
  const finnalStr = [];
  const breakPointsList = ["", "sm", "md", "lg", "xl", "2xl"];

  breakPointsList.forEach((items) => {
    if (items) {
      for (let index = 1; index < 12; index++) {
        finnalStr.push(`${items}:w-${index}/12`);
      }
    } else {
      for (let index = 1; index < 12; index++) {
        finnalStr.push(`w-${index}/12`);
      }
    }
  });

  return finnalStr;
}

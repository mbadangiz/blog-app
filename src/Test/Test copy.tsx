// import React, { useState, MouseEvent } from "react";

// const days = [
//   "2024-05-01",
//   "2024-05-02",
//   "2024-05-03",
//   "2024-05-04",
//   "2024-05-05",
//   "2024-05-06",
//   "2024-05-07",
//   "2024-05-08",
//   "2024-05-09",
//   "2024-05-10",
// ];

// const Test: React.FC = () => {
//   const [selectedDays, setSelectedDays] = useState<string[]>([]);
//   const [lastClickedDay, setLastClickedDay] = useState<string | null>(null);
//   const [isMouseDown, setIsMouseDown] = useState(false);

//   // Helper function to get all days between two indices
//   const getDaysInRange = (start: number, end: number): string[] => {
//     const [min, max] = [start, end].sort((a, b) => a - b);
//     return days.slice(min, max + 1);
//   };

//   // Handle single day click and Shift + Click
//   const handleDayClick = (event: MouseEvent, day: string, index: number) => {
//     if (event.shiftKey && lastClickedDay !== null) {
//       const startIndex = days.indexOf(lastClickedDay);
//       const endIndex = days.indexOf(day);
//       const newRange = getDaysInRange(startIndex, endIndex);
//       console.log(
//         " if :handleDayClick",
//         newRange,
//         endIndex,
//         startIndex,
//         day,
//         lastClickedDay,
//       );

//       setSelectedDays((prev) => Array.from(new Set([...prev, ...newRange])));
//     } else {
//       // Single day click
//       console.log(" else :handleDayClick");
//       setSelectedDays((prev) =>
//         prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
//       );
//       setLastClickedDay(day);
//     }
//   };

//   // Mouse down to start the click-and-drag selection
//   const handleMouseDown = (day: string, event: React.MouseEvent) => {
//     console.log("handleMouseDown");
//     setIsMouseDown(true);
//     if (!event.shiftKey) {
//       setLastClickedDay(day); // This is only for drag selection
//     }
//     // setLastClickedDay(day);
//   };
//   console.log("lastClickedDay", lastClickedDay, selectedDays);

//   // Mouse enter to select days during dragging
//   const handleMouseEnter = (day: string) => {
//     console.log("handleMouseEnter");
//     if (isMouseDown && lastClickedDay !== null) {
//       const startIndex = days.indexOf(lastClickedDay);
//       const endIndex = days.indexOf(day);
//       const newRange = getDaysInRange(startIndex, endIndex);
//       console.log("if :   handleMouseEnter", newRange, endIndex, startIndex);
//       setSelectedDays((prev) => Array.from(new Set([...prev, ...newRange])));
//     }
//   };

//   // Mouse up to stop dragging
//   const handleMouseUp = () => {
//     console.log("handleMouseUp");
//     setIsMouseDown(false);
//   };

//   return (
//     <div onMouseUp={handleMouseUp}>
//       <h1>Calendar</h1>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {days.map((day, index) => (
//           <div
//             key={day}
//             className={`flex size-20 cursor-pointer items-center justify-center rounded border-2 ${
//               selectedDays.includes(day)
//                 ? "bg-rose-500 text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={(e) => handleDayClick(e, day, index)}
//             onMouseDown={(event) => handleMouseDown(day, event)}
//             onMouseEnter={() => handleMouseEnter(day)}
//             style={{
//               width: "50px",
//               height: "50px",
//               border: "1px solid #ccc",
//               textAlign: "center",
//               lineHeight: "50px",
//             }}
//           >
//             {day.split("-")[2]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Test;

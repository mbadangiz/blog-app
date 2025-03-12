export function calculateTimeIntervalUntilToday(inputDate: Date): string {
  const today = new Date();
  const timeDifference = today.getTime() - inputDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds < 60) {
    return `${seconds} ثانیه پیش`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} دقیقه پیش`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} ساعت و ${minutes} دقیقه پیش`;
  } else if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return `${days} روز پیش`;
  } else if (seconds < 2592000) {
    const weeks = Math.floor(seconds / 604800);
    const days = Math.floor((seconds % 604800) / 86400);
    return days === 0 ? `${weeks} هفته پیش` : `${weeks} هفته و ${days} روز پیش`;
  } else {
    return inputDate.toLocaleDateString("fa-IR");
  }
}

import { useEffect } from "react";

function useChangeTitle(title: string) {
  return useEffect(() => {
    document.title = "صفحه ساز - " + title;
  }, []);
}

export { useChangeTitle };

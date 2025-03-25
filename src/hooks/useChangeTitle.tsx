import { useEffect } from "react";

function useChangeTitle(title: string) {
  return useEffect(() => {
    document.title = "Form Generator - " + title;
  }, []);
}

export { useChangeTitle };

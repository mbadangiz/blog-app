import { FlexAllCentered } from "@coreComps/Divisions/Flex";
import { In_AccordionProps } from "@typesDef/interfaces";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordion({
  header,
  content,
  isOpen = true,
  isSpeatrate = false,
}: In_AccordionProps) {
  const head = header();
  const mainContent = content();
  const [open, setOpen] = useState<boolean>(isOpen);

  const divContainer = useRef<HTMLDivElement>(null);

  const [elementHeight, setElementHeight] = useState<number>(0);

  useEffect(() => {
    setElementHeight(divContainer.current?.children[0].clientHeight as number);
  }, []);

  function handleOpen() {
    if (!open) {
      const space = isSpeatrate ? 10 : 0;

      const finnalHeight =
        divContainer.current?.children[1].clientHeight! +
        divContainer.current?.children[0].clientHeight! +
        space;
      setElementHeight(finnalHeight as number);
    } else {
      setElementHeight(
        divContainer.current?.children[0].clientHeight! as number,
      );
    }

    setOpen((prev) => !prev);
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl ${!isSpeatrate && "bg-white dark:bg-dark-midnightBlue"} `}
      style={{
        height: elementHeight + "px",
      }}
      ref={divContainer}
    >
      <FlexAllCentered
        className="relative z-leve2 min-h-16 cursor-pointer select-none justify-between rounded-xl bg-white px-5 py-2 dark:bg-dark-midnightBlue"
        onClick={handleOpen}
      >
        {head}
        <div className={`${open && "rotate-180"}`}>
          <IoIosArrowDown />
        </div>
      </FlexAllCentered>
      <div
        className={`${open ? "top-20" : "-top-full"} z-leve1 mt-3 rounded-xl bg-white px-5 py-2 pb-4 transition-all dark:bg-dark-midnightBlue`}
      >
        {mainContent}
      </div>
    </div>
  );
}

export default Accordion;

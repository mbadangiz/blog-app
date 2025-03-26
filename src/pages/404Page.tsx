import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useChangeTitle } from "@hooks/useChangeTitle";

function Page404() {
  useChangeTitle("Page Not Found");

  const [counter, setCounter] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(interval);
        navigate("/");
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex h-svh w-full select-none content-center items-center justify-center">
      <div className="flex w-11/12 flex-col content-center items-center justify-evenly rounded-lg bg-white px-2 py-10 shadow-xl shadow-[rgba(0,0,0,0.02)] md:flex-row md:flex-wrap lg:h-80 lg:w-[900px] lg:py-9">
        <div className="space-y-5 text-center md:text-right">
          <p className="font-Black_ir lg:text-xl">Page Not Found</p>
          <p className="text-sm text-light-steelBlue md:text-sm lg:text-15">
            ** If you're certain this page exists, please contact
            <Link
              to={""}
              className="mx-1 text-sm text-light-navyblue/70 hover:underline"
            >
              support
            </Link>
            .
          </p>
        </div>
        <div className="mt-8 animate-bounce text-[100px] md:text-[120px] lg:mt-0 lg:text-[150px]">
          <p className="font-Black_ir -rotate-90">:(</p>
        </div>
        <p className="text-crimsonRed w-full text-center text-[10px] opacity-50 md:text-[11px] lg:text-sm">
          You will be redirected to the homepage in {counter} seconds.
        </p>
      </div>
    </div>
  );
}

export default Page404;

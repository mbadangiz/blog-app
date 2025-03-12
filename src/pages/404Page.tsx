import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useChangeTitle } from "@hooks/useChangeTitle";

function Page404() {
  useChangeTitle("صفحه ی مورد نظر یافت نشد.");

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
          <p className="font-Black_ir lg:text-xl">صفحه ی مورد نظر یافت نشد.</p>
          <p className="text-sm text-light-steelBlue md:text-sm lg:text-15">
            ** اگر از وجود صفحه ی مورد نظر اطمینان دارید به
            <Link
              to={""}
              className="mx-1 text-sm text-light-navyblue/70 hover:underline"
            >
              پشتبیانی
            </Link>
            نرم افزار اطلاع دهید.
          </p>
        </div>
        <div className="mt-8 animate-bounce text-[100px] md:text-[120px] lg:mt-0 lg:text-[150px]">
          <p className="-rotate-90 font-Black_ir">:(</p>
        </div>
        <p className="w-full text-center text-[10px] text-crimsonRed opacity-50 md:text-[11px] lg:text-sm">
          شما تا {counter} ثانیه آینده به صفحه نخست منتقل می شوید.
        </p>
      </div>
    </div>
  );
}

export default Page404;

"use client";
import { AxiosError } from "axios";
import { ReactNode, useEffect } from "react";
import AlertService from "./AlertService";
import { useDispatch } from "react-redux";

interface ErrorCatchServiceProps {
  children: ReactNode;
}

enum AxiosErrorCode {
  ERR_NETWORK = "ERR_NETWORK",
  ERR_BAD_REQUEST = "ERR_BAD_REQUEST",
}

function ErrorCatchService({ children }: ErrorCatchServiceProps) {
  const alertService = new AlertService();
  useEffect(() => {
    window.addEventListener("unhandledrejection", (event) => {
      // console.log({ event });

      if (event.reason instanceof AxiosError) {
        if (event.reason.code === AxiosErrorCode.ERR_NETWORK) {
          alertService.addListAlert({
            title: "خطا در برقراری ارتباط با سرور.",
            type: "error",
            list: [
              "متأسفانه، ارتباط با سرور قطع شده است و در حال حاضر امکان دسترسی به سایت وجود ندارد. لطفاً چند لحظه دیگر دوباره تلاش کنید یا از تغییر اتصال اینترنت خود اطمینان حاصل کنید. در صورتی که مشکل همچنان ادامه دارد، لطفاً با تیم پشتیبانی تماس بگیرید. با تشکر از صبر و شکیبایی شما.",
            ],
          });
        } else if (event.reason.code === AxiosErrorCode.ERR_BAD_REQUEST) {
          const data = event.reason.response?.data.error;

          console.log(data);
          alertService.addListAlert({
            title: "خطا",
            type: "error",
            list: Array.isArray(data) ? data : [data],
          });
        }

        console.log(event.reason);
        // console.log(error);
        // alertService.addListAlert({})
      }
    });
  }, []);
  return children;
}

export default ErrorCatchService;

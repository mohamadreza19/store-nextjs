import { useEffect } from "react";
import { AlertService } from "../../services";
import { Transition1 } from "../transition";
interface DismissAlertProps {
  open: boolean;
  type: "success" | "error" | "blue" | "black";
  message: string;
  closeFn: () => void;
}

function DismissAlert() {
  const alertService = new AlertService();
  const dismissAlertvalue = alertService.getDismissAlert();
  useEffect(() => {
    setTimeout(() => {
      closeFn();
    }, 4000);
  }, [dismissAlertvalue.open]);
  function closeFn() {
    alertService.removeDismissAlert();
  }
  return (
    dismissAlertvalue.open && (
      <>
        <DismissAlertBlue closeFn={closeFn} {...dismissAlertvalue} />
        <DismissAlertSuccess closeFn={closeFn} {...dismissAlertvalue} />
        <DismissAlertError closeFn={closeFn} {...dismissAlertvalue} />
        <DismissAlertBlack closeFn={closeFn} {...dismissAlertvalue} />
      </>
    )
  );
}

function DismissAlertBlue(props: DismissAlertProps) {
  const blue = "text-blue-800  bg-blue-50 dark:bg-gray-800 dark:text-blue-400";
  const btnBlue = "text-blue-500";

  return (
    <>
      {props.type === "blue" && (
        <Transition1>
          <div
            id="alert-1"
            className={`flex justify-center absolute top-5 right-5 z-50  p-4 mb-4 rounded-lg ${blue}`}
            role="alert"
          >
            <button
              onClick={props.closeFn}
              type="button"
              className={`ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5  inline-flex items-center justify-center h-8 w-8 ${btnBlue}`}
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>

            <div className="ms-3 text-sm font-medium ">{props.message}</div>
            <svg
              className="flex-shrink-0 w-4 h-4  ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          </div>
        </Transition1>
      )}
    </>
  );
}
function DismissAlertSuccess(props: DismissAlertProps) {
  const btnSuccess = "bg-green-50";

  const success =
    "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400";
  return (
    <>
      {props.type === "success" && (
        <Transition1>
          <div
            id="alert-1"
            className={`flex justify-center absolute top-5 right-5 z-50  p-4 mb-4 rounded-lg ${success}`}
            role="alert"
          >
            <button
              onClick={props.closeFn}
              type="button"
              className={`ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5  inline-flex items-center justify-center h-8 w-8 ${btnSuccess}`}
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>

            <div className="ms-3 text-sm font-medium ">{props.message}</div>
            <svg
              className="flex-shrink-0 w-4 h-4 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          </div>
        </Transition1>
      )}
    </>
  );
}
function DismissAlertError(props: DismissAlertProps) {
  const btnError = "text-red-800";
  const error = "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400";
  return (
    <>
      {props.type === "error" && (
        <Transition1>
          <div
            onClick={props.closeFn}
            id="alert-1"
            className={`flex justify-center absolute top-5 right-5 z-50  p-4 mb-4 rounded-lg ${error}`}
            role="alert"
          >
            <button
              type="button"
              className={`ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5  inline-flex items-center justify-center h-8 w-8 ${btnError}`}
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>

            <div className="ms-3 text-sm font-medium ">{props.message}</div>
            <svg
              className="flex-shrink-0 w-4 h-4  ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          </div>
        </Transition1>
      )}
    </>
  );
}
function DismissAlertBlack(props: DismissAlertProps) {
  const btn = "text-sky-500";
  const color = "text-white bg-black ";
  return (
    <>
      {props.type === "black" && (
        <Transition1>
          <div
            onClick={props.closeFn}
            id="alert-1"
            className={`min-w-28  max-w-80  flex  justify-center absolute top-5 left-1/2 transform -translate-x-1/2  z-50  p-4 mb-4 rounded-lg ${color}`}
            role="alert"
          >
            <div className="ms-3 text-sm font-medium leading-7">
              {props.message}
            </div>
            <button
              type="button"
              className={` ms-3 text-sm  rounded-lg focus:ring-2 p-1.5  inline-flex items-center justify-center h-8 w-8 ${btn}`}
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              باشه
            </button>
          </div>
        </Transition1>
      )}
    </>
  );
}

export default DismissAlert;

"use client";
import { useDispatch } from "react-redux";
import { AlertService } from "../../services";
import { useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import { Transition1 } from "../transition";

type Item = {
  title: string;
  type: "error" | "info";
  list: string[];
};

interface ListAlertsProps {
  items: Item[];
}

function ListAlerts() {
  const alertService = new AlertService();
  const items = alertService.getListAlert();
  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => alertService.removeListAlert(), 2000);
    }
  }, [items.length]);
  return (
    <TransitionGroup className="absolute top-5 right-5 z-50">
      {items.map((item, index) => {
        return (
          <Transition1 key={index}>
            <div
              className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 transition-opacity duration-300 ease-in-out hover:opacity-75"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>

              <div>
                <span className="font-medium">{item.title}</span>
                <ul className="mt-1.5 list-disc list-inside">
                  {item.list.map((subItem, subItemIndex) => (
                    <li key={subItemIndex}>{subItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Transition1>
        );
      })}
    </TransitionGroup>
  );
}

export default ListAlerts;

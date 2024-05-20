import { FunctionComponent, ReactNode, useEffect, useRef } from "react";

interface NavitemProps {
  children: ReactNode;
  borderB_Dir?: "left" | "right";
}

const Navitem: FunctionComponent<NavitemProps> = ({
  borderB_Dir = "right",
  children,
}) => {
  const boxRef = useRef<HTMLElement>(null);
  const borderBottom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.addEventListener("mouseenter", () => {
        if (borderBottom.current) {
          borderBottom.current.classList.remove("w-0");
          borderBottom.current.classList.add("w-full");
        }
      });
      boxRef.current.addEventListener("mouseleave", () => {
        if (borderBottom.current) {
          borderBottom.current.classList.add("w-0");
          borderBottom.current.classList.remove("w-full");
        }
      });
    }
  }, [boxRef.current]);
  return (
    <section
      ref={boxRef}
      id=""
      className="flex items-center  gap-x-2 pb-2  cursor-pointer relative "
    >
      {children}
      <div
        ref={borderBottom}
        className={`${
          borderB_Dir === "left" ? "left-0" : "right-0"
        } absolute transition-all duration-200  bottom-[-5px] w-0 h-[3px] bg-rose-700 `}
      ></div>
    </section>
  );
};

export default Navitem;

import { FunctionComponent, ReactNode, useEffect, useRef } from "react";

interface NavitemProps {
  children: ReactNode;
  borderB_Dir?: "left" | "right";
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Navitem: FunctionComponent<NavitemProps> = ({
  borderB_Dir = "right",
  children,
  id,
  onMouseEnter,
  onMouseLeave,
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={boxRef}
      id={id}
      className="flex items-center  gap-x-2  h-full  cursor-pointer relative "
    >
      {children}
      <div
        ref={borderBottom}
        className={`${
          borderB_Dir === "left" ? "left-0" : "right-0"
        } absolute transition-all duration-200  bottom-0 w-0 h-[3px] bg-rose-700 `}
      ></div>
    </section>
  );
};

export default Navitem;

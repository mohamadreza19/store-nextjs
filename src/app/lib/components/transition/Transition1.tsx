import { ReactNode } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
interface Transition1Props {
  children: ReactNode;
}
function Transition1(props: Transition1Props) {
  return (
    <CSSTransition
      {...props}
      timeout={500}
      classNames={{
        appear: "opacity-0",
        // appearActive: "transition-opacity duration-300 opacity-100",
        enter: "opacity-0",
        // enterActive: "transition-opacity duration-300 opacity-100",
        exit: "opacity-100", // this breaks the exit transition
        exitActive: "transition-opacity duration-200 opacity-0",
      }}
    >
      {props.children}
    </CSSTransition>
  );
}

export default Transition1;

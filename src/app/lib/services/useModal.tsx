import {
  FC,
  forwardRef,
  FunctionComponent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ClickAwayListener from "react-click-away-listener";

interface ModalProps {}

const useModal = ({}: ModalProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (triggerRef.current) {
      triggerRef.current.addEventListener("click", () => {
        setOpen(true);
      });
    }
  }, []);

  function handleClickAway() {
    setOpen(false);
  }

  return {
    ModalContainer: ({ children }: { children: ReactNode }) => (
      <ModalContainer open={open} onClickAway={handleClickAway}>
        {children}
      </ModalContainer>
    ),
    triggerRef,
    open,
  };
};

export default useModal;

interface ModalContainerProps {
  children: ReactNode;
  onClickAway: () => void;
  open: boolean;
}

const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  children,
  onClickAway,
  open,
}) => {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={`${!open && "hidden"}  relative z-30`}>{children}</div>
    </ClickAwayListener>
  );
};

"use client";
import { MdClose } from "react-icons/md";
import { Button1 } from "../button";
import { Transition1 } from "../transition";
import LocaledNumber from "../LocaledNumber";
import { useEffect, useRef } from "react";
import { Form2 } from "../form";
interface Modal1Props {
  toggleFn: () => void;
  modalId: string;
}

function Modal1(props: Modal1Props) {
  const priceInputRef = useRef<HTMLInputElement>(null);
  function close() {
    document.getElementById(props.modalId)?.classList.toggle("hidden");
  }
  useEffect(() => {
    if (priceInputRef.current?.value) {
      priceInputRef.current.value = LocaledNumber({
        number: priceInputRef.current.value,
      });
    }
  }, []);
  return (
    <Transition1>
      <div
        id={props.modalId}
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden absolute top-1/2 left-1/2   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <Form2 onClose={close} handleFormSubmit={(values) => {}} />
      </div>
    </Transition1>
  );
}

export default Modal1;

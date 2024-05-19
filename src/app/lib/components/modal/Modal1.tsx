"use client";
import { MdClose } from "react-icons/md";
import { Button1 } from "../button";
import { Transition1 } from "../transition";
import LocaledNumber from "../LocaledNumber";
import { useEffect, useRef } from "react";
import { Form2 } from "../form";
import { Category } from "@/app/categories/interfaces";
import { CreateProductFormikValues } from "@/app/products/interfaces";
interface Modal1Props {
  createProduct: (values: any) => void;
  toggleFn: () => void;
  fetchSubCategoriesByParentId: (categoryId: string) => void;
  modalId: string;
  categories: Category[];
  subcategories: Category[];
}

function Modal1(props: Modal1Props) {
  function close() {
    document.getElementById(props.modalId)?.classList.toggle("hidden");
  }

  return (
    <Transition1>
      <div
        id={props.modalId}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden absolute top-1/2 left-1/2   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <Form2
          handleFormSubmit={props.createProduct}
          fetchSubCategoriesByParentId={props.fetchSubCategoriesByParentId}
          categories={props.categories}
          subCategories={props.subcategories}
          onClose={close}
        />
      </div>
    </Transition1>
  );
}

export default Modal1;

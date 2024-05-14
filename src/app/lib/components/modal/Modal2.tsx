import { Category } from "@/app/categories/interfaces";
import { Form3 } from "../form";
import { Product } from "@/app/products/interfaces";
interface Modal2Props {
  // createProduct: (values: any) => void;
  // toggleFn: () => void;
  // fetchSubCategoriesByParentId: (categoryId: string) => void;
  pushFileForProduct: (file: File, productId: string) => void;
  pullProductFile: (fileId: string, productId: string) => void;
  product: Product;
  modalId: string;
  categories: Category[];
  subcategories: Category[];
}
function Modal2(props: Modal2Props) {
  function onClose() {
    document.getElementById(props.modalId)?.classList.toggle("hidden");
  }

  return (
    <div>
      <div
        id={props.modalId}
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden absolute top-1/2 left-1/2   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <Form3
          pushFileForProduct={props.pushFileForProduct}
          pullProductFile={props.pullProductFile}
          product={props.product}
          handleFormSubmit={(va) => {}}
          fetchSubCategoriesByParentId={() => {}}
          categories={props.categories}
          subCategories={props.subcategories}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default Modal2;

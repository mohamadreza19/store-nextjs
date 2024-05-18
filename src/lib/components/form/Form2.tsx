import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormik,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { Button1 } from "../button";
import { MdClose } from "react-icons/md";

import FileInput from "./File";
import { ChangeEvent, useEffect, useState } from "react";
import LocaleBasedInput from "./LocaleBasedInput";
import { NumberService } from "../../services";
import { Category } from "@/app/categories/interfaces";
import { CreateProductFormikValues } from "@/app/products/interfaces";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("نام محصول ضروری است"),
  price: Yup.mixed().required("قیمت ضروری است"),
  category: Yup.string().required("دسته بندی ضروری است"),
  file: Yup.mixed()
    .required("فایل محصول ضروری است")
    .test("fileSize", "حجم فایل نباید بیشتر از 5 مگابایت باشد", (value) => {
      // Check if file size is less than or equal to 5 MB
      return value && (value as File).size <= 5242880; // 5 MB in bytes
    })
    .test("fileType", "فرمت فایل باید mp4 یا webp باشد", (value) => {
      return (
        (value && (value as File).type === "videp/mp4") ||
        (value as File).type.startsWith("image/webp")
      );
    }),
});

type SetSubCategoryId = (categoryId: string) => void;
interface Form1Props {
  handleFormSubmit: (values: any) => void;
  fetchSubCategoriesByParentId: SetSubCategoryId;

  onClose: () => void;
  categories: Category[];
  subCategories: Category[];
}

function handleOnImageChange(
  event: React.ChangeEvent<HTMLInputElement>,
  formikProps: FormikProps<CreateProductFormikValues>
) {
  const files = event.currentTarget.files;
  const file = files?.length ? files[0] : null;

  formikProps.setFieldValue("file", file);
}

function formatNumAndHandleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  formikProps: FormikProps<CreateProductFormikValues>
) {
  formikProps.setFieldValue(
    e.target.name,
    NumberService.toformatEnNumber(e.target.value)
  );
}

function Form2(props: Form1Props) {
  const initialValues: CreateProductFormikValues = {
    name: "",
    file: null,
    category: "",
    price: "",
  };

  useEffect(() => {
    if (props.categories.length)
      props.fetchSubCategoriesByParentId(props.categories[0]._id);
  }, [props.categories.length]);

  return (
    <>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              افزودن محصول
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <MdClose size={20} onClick={props.onClose} />

              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <Formik
            onSubmit={props.handleFormSubmit}
            // onReset={formik.handleReset}

            initialValues={initialValues}
            validationSchema={validationSchema}
            //
          >
            {(formikProps) => {
              return (
                <Form className="p-4 md:p-5 ">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    {/* <productName>*/}
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        نام محصول
                      </label>
                      <Field
                        name="name"
                        type="text"
                        id="name"
                        className=" h-11 max-h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="آچر .."
                      />
                      <ErrorMessage
                        className="mt-2 text-red-700 text-sm font-bold"
                        name="name"
                        component="div"
                      />
                    </div>
                    {/* <price> */}
                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        قیمت
                      </label>

                      <Field
                        name="price"
                        type="text"
                        id="price"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          formatNumAndHandleChange(e, formikProps)
                        }
                        className=" h-11 max-h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        // placeholder={LocaledNumber({ number: 10000 })}
                        // ref={priceInputRef}
                      />
                      <ErrorMessage
                        className="mt-2 text-red-700 text-sm font-bold"
                        name="price"
                        component="div"
                      />
                    </div>
                    {/* <category> */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        دسته بندی ها
                      </label>
                      <select
                        onChange={(e) => {
                          props.fetchSubCategoriesByParentId(e.target.value);
                          // setSubCategoryId(e, props.setSubCategoryId);
                        }}
                        className="bg-gray-50 border  h-11 max-h-11 px-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        {props.categories.map((category, index) => (
                          <option
                            key={index}
                            value={category._id}
                            selected={index === 0 ? true : false}
                          >
                            <p className="text-sm">{category.name}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* <sub-category> */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="category"
                        className="invisible block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        xxx
                      </label>
                      <Field
                        as="select"
                        id="category"
                        name="category"
                        className="bg-gray-50 border  h-11 max-h-11 px-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option>
                          <p className="text-sm">انتخاب کنید</p>
                        </option>
                        {!props.subCategories.length ? (
                          <option disabled>یافت نشد</option>
                        ) : (
                          props.subCategories.map((subCategory, index) => (
                            <option
                              key={index}
                              value={subCategory._id}
                              selected={index === 0 ? true : false}
                            >
                              <p className="text-sm">{subCategory.name}</p>
                            </option>
                          ))
                        )}
                      </Field>
                      <ErrorMessage
                        className="mt-2 text-red-700 text-sm font-bold"
                        name="category"
                        component="div"
                      />
                    </div>

                    {/* <file> */}
                    <div className="col-span-2">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="default_size"
                      >
                        فایل های محصول
                      </label>
                      <FileInput
                        file={formikProps.values.file}
                        name="file"
                        onChange={(e) => handleOnImageChange(e, formikProps)}
                      />
                      {/* <Field id="file" name="file" type="file" as={FileInput} /> */}
                      <ErrorMessage
                        className="mt-2 text-red-700 text-sm font-bold"
                        name="file"
                        component="div"
                      />
                    </div>
                  </div>

                  <Button1 type="submit">
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm ">افزودن محصول جدید</p>
                  </Button1>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Form2;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Form1Props {
  handleFormSubmit: (values: InitialValues) => void;
}
interface InitialValues {
  username: string;
  password: string;
}

const initialValues: InitialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('نام کاربری ضروری میباشد'),
  password: Yup.string().required('رمز عبور ضروری میباشد'),
});

function Form1(props: Form1Props) {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl  p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        ورود بخش ادمین
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.handleFormSubmit(values);
        }}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  نام کاربری
                </label>
                <Field
                  name="username"
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                <ErrorMessage
                  className="mt-2 text-red-700 text-sm font-bold"
                  name="username"
                  component="div"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  پسورد
                </label>
                <Field
                  name="password"
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                <ErrorMessage
                  className="mt-2 text-red-700 text-sm font-bold"
                  name="password"
                  component="div"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                // disabled={isSubmitting}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                ورود
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Form1;

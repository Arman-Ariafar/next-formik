// Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Component
const HomePage = () => {
    return (
        <main className="w-full min-h-screen grid place-items-center">
            <Formik
                initialValues={{ user_name: "", password: "" }}
                validationSchema={object().shape({
                    user_name: string().min(3).max(13).required(),
                    password: string().min(8).required(),
                })}
                onSubmit={async ({ user_name, password }) => {
                    await sleep(500);
                    alert(JSON.stringify(user_name + password));
                }}
                validateOnMount
            >
                {({ isValid, isSubmitting }) => {
                    return (
                        <Form className="flex flex-col">
                            <Field
                                name="user_name"
                                id="user_name"
                                placeholder="User Name"
                                className="bg-red-50"
                            />
                            <ErrorMessage name="user_name" />
                            <Field
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="bg-red-50"
                            />
                            <ErrorMessage name="password" />
                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                            >
                                Login
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </main>
    );
};

export default HomePage;

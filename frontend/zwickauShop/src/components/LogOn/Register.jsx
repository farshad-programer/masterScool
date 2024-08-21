import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../Formik/FormikControl";
import { PulseLoader } from "react-spinners";
import "../../assets/css/ButtonRegister.css";
import { useAddNewUserMutation } from "../../features/registerUsersApiSlice";
import { validationRegisterSchema } from "./validation";

const Register = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();
  const refName = useRef();
  const initialValues = {
    register_mail: "",
    register_pwd: "",
    name: "",
    lName: "",
    confirmPassword: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    phon: "",
  };

  const onSubmit = (values) => {
    addNewUser({
      email: values.register_mail,
      password: values.register_pwd,
      name: values.name,
      lName: values.lName,
      confirmPassword: values.confirmPassword,
      street: values.street,
      city: values.city,
      zip: Number(values.zip),
      country: values.country,
      phon: Number(values.phon),
    });
  };
  useEffect(() => {
    refName?.current?.focus();
  }, []);

  // const onSubmit = (values) => {
  //   console.log("Form data", values);
  //   console.log("Saved data", JSON.parse(JSON.stringify(values)));
  // };

  return (
    <div className="bg-transparent   w-[20rem] h-full ">
      <div className=" w-full mb-10 flex justify-center items-center h-full">
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-sm  text-center items-center   rounded-xl w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className="font-Playfair mb-2 text-lg mt-7 font-semibold  ">
              Registration
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationRegisterSchema}
              onSubmit={onSubmit}
              validateOnChange={true}
              validateOnMount={true}
            >
              {(formik) => (
                <Form
                  className="w-full h-full flex flex-col  items-start"
                  autoComplete="off"
                >
                  <FormikControl
                    control="chakraInput"
                    type="text"
                    label="Email"
                    name="register_mail"
                    position="up"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="Password"
                    name="register_pwd"
                    position="right"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="ConfirmPassword"
                    name="confirmPassword"
                    position="left"
                  />

                  <FormikControl
                    control="chakraInput"
                    type="name"
                    label="Name"
                    name="name"
                    position="right"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="lName"
                    label="LastName"
                    name="lName"
                    position="left"
                  />

                  <FormikControl
                    control="chakraInput"
                    type="country"
                    label="Country"
                    name="country"
                    position="right"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="zip"
                    label="Zip"
                    name="zip"
                    position="left"
                  />

                  <FormikControl
                    control="chakraInput"
                    type="city"
                    label="City"
                    name="city"
                    position="right"
                  />

                  <FormikControl
                    control="chakraInput"
                    type="street"
                    label="Street and House Number"
                    name="street"
                    position="left"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="phon"
                    label="Phon"
                    name="phon"
                    position="down"
                  />
                  <div className="flex items-center justify-center w-full   mb-6 mt-14">
                    <button
                      type="submit"
                      disabled={!formik.isValid ? true : false}
                      className="btn a disabled:bg-slate-500 tracking-wide bg-slate-900 font-eng2 font-light text-sm py-3 px-6 rounded-xl active:bg-slate-700 text-purple-900"
                    >
                      {isLoading ? (
                        <PulseLoader color="#fff" size={5} />
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

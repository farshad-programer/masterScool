import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";

import { PulseLoader } from "react-spinners";
import "../assets/css/ButtonRegister.css";

import { validationRegisterSchema } from "./LogOn/validation";
import { useAddNewUserMutation } from "../features/registerUsersApiSlice";
import FormikControl from "../Formik/FormikControl";
validationRegisterSchema;

const InputPost = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();
  const refName = useRef();
  const initialValues = {
    email: "",
    password: "",
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
      email: values.email,
      password: values.password,
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
    <div className="bg-transparent   w-[95%] h-full ">
      <div className=" w-full mb-10 flex justify-center items-center h-full">
        <div className="bg-teal-600 backdrop-blur-sm shadow-sm border-2 bor text-center items-center   rounded-xl w-full ">
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
                <Form className="w-full h-full flex flex-col  items-start">
                  <FormikControl
                    control="chakraInputSecond"
                    type="email"
                    name="email"
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

export default InputPost;

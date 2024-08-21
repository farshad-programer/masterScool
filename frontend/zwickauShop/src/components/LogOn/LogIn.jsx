import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../Formik/FormikControl";
import { PulseLoader } from "react-spinners";
import "../../assets/css/ButtonRegister.css";
import { useAddNewUserMutation } from "../../features/registerUsersApiSlice";
import { validationLogInSchema } from "./validation";
import { useDispatch } from "react-redux";
import useScreenSize from "../Hooks/screenSize";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";

const LogIn = () => {
  const handlepersist = () => {
    localStorage.setItem("persist", true);
  };

  // -------------------proccess
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState('');
  const { isLG } = useScreenSize();
  const refName = useRef();

  useEffect(() => {
    refName?.current?.focus();
  }, []);
  const [login, { isLoading, isSuccess}] = useLoginMutation();
  const initialValues = {
    email: "",
    password: "",
  };
  let content;
  if (errMsg) {
    content = <div className="absolute top-0 left-0 z-50"> {errMsg} </div>;
  }
  const onSubmit =async (values) => {
    try {
      
      const { accessToken } =await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      dispatch(setCredentials({ accessToken }));
    } catch (err) {
      console.log('err',err);
      if (!err?.status) {
        setErrMsg("No Server Response");
      } else if (err?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("server has problem");
      }
    }
  };

  return (
    <div className="bg-transparent   w-[20rem] h-full ">
      <div className=" w-full mb-10 flex justify-center items-center h-full relative">
        {content}
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-sm  text-center items-center   rounded-xl w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className="font-Playfair mb-2 text-lg mt-7 font-semibold  ">
              Registration
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationLogInSchema}
              onSubmit={onSubmit}
              validateOnChange={true}
              validateOnMount={true}
            >
              {(formik) => (
                <Form className="w-full h-full flex flex-col  items-start">
                  <FormikControl
                    control="chakraInput"
                    type="email"
                    label="Email"
                    name="email"
                    position="up"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="Password"
                    name="password"
                    position="right"
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

export default LogIn;

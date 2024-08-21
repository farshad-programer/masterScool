import React, { useState } from "react";
import { Field } from "formik";
import ErrorMessages from "./Errors/ErrorMessage";
import { BsExclamationCircleFill } from "react-icons/bs";
import useScreenSize from "../components/Hooks/screenSize";

function ChakraInput(props) {
  const { isLG } = useScreenSize();
  const [typingField, setTypingField] = useState("");
  const { position, label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="flex px-4 mt-6 mb-1 items-center  justify-center h-auto w-full bg-transparent ">
          <div
            className={`${
              isLG && form.touched[name] && form.errors[name]
                ? "ml-auto  w-full"
                : " w-full "
            }   px-2 relative`}
          >
            {typingField && form.errors[name] && (
              <div
                className={` ${
                  position === "up" ? "relative" : "lg:absolute w-full"
                }`}
              >
                <ErrorMessages
                  message={form.errors[name]}
                  position={isLG ? position : ""}
                  arrowDir="down"
                />
              </div>
            )}

            <div
              htmlFor=""
              className={`${isLG ? "w-auto" : "  w-full "}  relative  `}
            >
              <input
                {...rest}
                {...field}
                name={name}
                onBlur={() => {
                  setTypingField("");
                  form.setTouched({ ...form.touched, [name]: true });
                }}
                onFocus={() => setTypingField(name)}
                id={name}
                type={type}
                required
                autoComplete="on"
                className={`${
                  form.touched[name] && form.errors[name]
                    ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                    : "border-gray-500  focus:border-gray-500 "
                }   px- pt-3 text-sm outline-none border-b-2  border-gray-500  
    duration-700 focus:border-gray-900 bg-transparent autofill:bg-transparent  w-full`}
              />

              {form.touched[name] && form.errors[name] ? (
                <BsExclamationCircleFill className="errorInfo " />
              ) : null}
              <span
                className={`${
                  form.touched[name] && form.errors[name]
                    ? "text-red-700 peer-focus:text-red-700 "
                    : " text-slate-800 peer-focus:text-slate-900 "
                }${
                  form.values[name].length > 0 ? "-translate-y-6" : ""
                } absolute left-0 top-3 px-1 text-sm  
tracking-wide   pointer-events-none 
duration-700 peer-focus:text-sm peer-focus:-translate-y-7 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-sm peer-valid:text-slate-900 peer-valid:-translate-y-7`}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
      )}
    </Field>
  );
}

export default ChakraInput;

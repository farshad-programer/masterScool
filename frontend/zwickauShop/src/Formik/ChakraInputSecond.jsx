import React, { useState } from "react";
import { Field } from "formik";
import { BsExclamationCircleFill } from "react-icons/bs";

function ChakraInputSecond(props) {
  const [typingField, setTypingField] = useState("");
  const { label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="w-full p-3   pb-1 text-sm relative font-eng2">
          <span
            htmlFor=""
            className="font-semibold ml-2 pl-1  block w-full text-start "
          >
            {label}
          </span>
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
            autoComplete="false"
            className={` ${
              (typingField && form.errors[name]) ||
              (form.touched[name] && form.errors[name])
                ? "focus:ring-red-700 ring-red-700"
                : "focus:ring-gray-700 "
            } ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none`}
            placeholder={name}
          />
          {form.touched[name] && form.errors[name] ? (
            <BsExclamationCircleFill className=" text-red-600 w-7  absolute bottom-[18%]  right-3 drop-shadow-[0_5px_6px_rgba(220,38,38,0.65)]  " />
          ) : null}
          {typingField && form.errors[name] && (
            <p className={`text-red-700 bg-transparent pt-1 absolute `}>
              {form.errors[name]}
            </p>
          )}
        </div>
      )}
    </Field>
  );
}

export default ChakraInputSecond;

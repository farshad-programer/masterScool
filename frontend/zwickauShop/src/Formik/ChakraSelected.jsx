import React, { useState } from "react";
import { Field } from "formik";

const ChakraSelected = (props) => {
  const [typingField, setTypingField] = useState("");
  const { options, label, name, ...rest } = props;
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
          <select
            {...rest}
            {...field}
            name={name}
            onBlur={() => {
              setTypingField("");
              form.setTouched({ ...form.touched, [name]: true });
            }}
            onFocus={() => setTypingField(name)}
            id={name}
            required
            autoComplete="false"
            className={` ${
              (typingField && form.errors[name]) || form.touched[name]
                ? "focus:ring-red-700 ring-red-700"
                : "focus:ring-gray-700 "
            } ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none`}
            placeholder={name}
          >
            {options &&
              options.map((option) => (
                <option key={option?._id} value={option?._id}>
                  {option.name}
                </option>
              ))}
          </select>

          {form.touched[name] && form.errors[name] && (
            <p className={`text-red-700 bg-transparent pt-1 absolute `}>
              {form.errors[name]}
            </p>
          )}
        </div>
      )}
    </Field>
  );
};

export default ChakraSelected;

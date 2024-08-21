import React, { useState } from "react";
import { Field } from "formik";
import { BsExclamationCircleFill } from "react-icons/bs";

const ChakraTextArea = (props) => {
  const [typingField, setTypingField] = useState("");
  const { placeholder, rows, label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="w-full p-3   pb-1 text-sm relative font-eng2">
          <label
            htmlFor=""
            className="font-semibold ml-2 pl-1  block w-full text-start "
          >
            {label}
          </label>
          <textarea
            {...rest}
            {...field}
            name={name}
            onBlur={() => {
              setTypingField("");
              form.setTouched({ ...form.touched, [name]: true });
            }}
            rows={rows}
            onFocus={() => setTypingField(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            required
            autoComplete="false"
            className={` ${
              (form.touched[name] && form.errors[name]) ||
              (typingField && form.errors[name])
                ? "focus:ring-red-700 ring-red-700"
                : "focus:ring-gray-700 ring-gray-300"
            } ring-1  w-full rounded-md px-4 py-2 mt-2 outline-none`}
          />
          {form.touched[name] && form.errors[name] ? (
            <BsExclamationCircleFill className=" text-red-600 w-7  absolute top-[33%]  right-3 drop-shadow-[0_5px_6px_rgba(220,38,38,0.65)]  " />
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
};

export default ChakraTextArea;
{
  /* <label htmlFor="" className="font-semibold ml-2">
Comment :
</label>
<textarea
name="message"
type="text"
rows="4"
className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
placeholder="Write your comment ..."
/> */
}

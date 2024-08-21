import React from "react";
import { Field } from "formik";
import { GiCheckMark } from "react-icons/gi";
import { BsExclamationCircleFill } from "react-icons/bs";

const ChakraCheckBox = (props) => {
  const { label, name, value, ...rest } = props;
  return (
    <div className="flex px-4 mt-6 mb-1 items-center  justify-center h-auto w-full bg-transparent">
      <Field name={name}>
        {({ field, form }) => {
          return (
            <React.Fragment>
              <div className="flex  mt-6 mb-1 items-center  justify-center h-auto w-full bg-transparent">
                <label
                  htmlFor={name}
                  className="cursor-pointer flex items-center w-full pr-10  justify-between relative "
                >
                  <input
                    type="checkbox"
                    id={name}
                    {...rest}
                    checked={field.value}
                    onChange={() => form.setFieldValue(name, !field.value)}
                    className="appearance-none h-4 w-4 rounded-sm checkbox-1 border-2 border-cyan-700"
                  />
                  <GiCheckMark className="absolute left-[0.70%] text-opacity-0 check-1 transition-all text-xs text-cyan-700" />
                  {label}
                </label>
              </div>

              {form.touched[name] && form.errors[name] ? (
                <BsExclamationCircleFill className=" text-red-600 w-7  absolute bottom-[18%]  right-3 drop-shadow-[0_5px_6px_rgba(220,38,38,0.65)]  " />
              ) : null}
              {form.errors[name] && (
                <p className={`text-red-700 bg-transparent pt-1 absolute `}>
                  {form.errors[name]}
                </p>
              )}
            </React.Fragment>
          );
        }}
      </Field>
    </div>
  );
};

export default ChakraCheckBox;

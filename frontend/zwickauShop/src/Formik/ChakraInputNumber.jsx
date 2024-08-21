import React, { useState } from "react";
import { Field } from "formik";
import { BsExclamationCircleFill } from "react-icons/bs";

function ChakraInputNumber(props) {
  const [typingField, setTypingField] = useState("");
  const { label, name, type, ...rest } = props;

  const handleInputChange = (e, field, form) => {
    let value = e.target.value;

    // حذف همه کاراکترهای غیر مجاز به جز اعداد، کاما و نقطه
    value = value.replace(/[^0-9.,]/g, '');

    // محدود کردن طول ورودی به 7 کاراکتر
    if (value.length > 7) {
      value = value.substring(0, 7);
    }

    // به‌روزرسانی مقدار فیلد
    form.setFieldValue(name, value);
  };

  const handleBlur = (e, field, form) => {
    let value = e.target.value;

    // تبدیل مقدار به عدد با دو رقم اعشار
    if (value) {
      value = parseFloat(value.replace(',', '.')).toFixed(2) + " €";
      form.setFieldValue(name, value);
    }

    setTypingField("");
    form.setFieldTouched(name, true);
  };

  const handleDecrease = (field, form) => {
    let value = parseFloat(field.value.replace(/[€,]/g, '').replace(',', '.')) || 0;
    value = Math.max(0, value - 1); // کاهش مقدار به اندازه 1 واحد، حداقل مقدار 0
    form.setFieldValue(name, value.toFixed(2) + " €");
  };

  const handleIncrease = (field, form) => {
    let value = parseFloat(field.value.replace(/[€,]/g, '').replace(',', '.')) || 0;
    value = Math.min(100.99, value + 1); // افزایش مقدار به اندازه 1 واحد، حداکثر مقدار 100.99
    form.setFieldValue(name, value.toFixed(2) + " €");
  };

  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="w-full p-3 pb-1 text-sm relative font-eng2">
          <span
            htmlFor=""
            className="font-semibold ml-2 pl-1 block w-full text-start "
          >
            {label}
          </span>
          <div className="flex items-center">
            <input
              {...rest}
              {...field}
              name={name}
              onBlur={(e) => handleBlur(e, field, form)}
              onFocus={() => setTypingField(name)}
              id={name}
              type="text"
              required
              autoComplete="off"
              className={` ${
                (typingField && form.errors[name]) ||
                (form.touched[name] && form.errors[name])
                  ? "focus:ring-red-700 ring-red-700"
                  : "focus:ring-gray-700 "
              } ring-1 ring-gray-300 w-full rounded-md pr-2 pl-10 py-2 mt-2 outline-none`}
              placeholder={name}
              onChange={(e) => handleInputChange(e, field, form)}
            />
           <div className="absolute right-6 bottom-3">
              <button
                onClick={() => handleDecrease(field, form)}
                className="btn a disabled:bg-slate-500  bg-slate-900 font-eng2  text-sm   px-2 rounded-md  active:bg-slate-700 text-purple-900"
              >
                -
              </button>
            </div>
            <div className="absolute left-6 bottom-3">
              <button
                 onClick={() => handleIncrease(field, form)}
                className="btn a disabled:bg-slate-500  bg-fuchsia-800 font-eng2  text-sm   px-2 rounded-md  active:bg-slate-700 text-purple-900"
              >
                +
              </button>
            </div>
          </div>
          {form.touched[name] && form.errors[name] ? (
            <BsExclamationCircleFill className=" text-red-600 w-7 absolute bottom-[18%] right-3 drop-shadow-[0_5px_6px_rgba(220,38,38,0.65)] " />
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

export default ChakraInputNumber;

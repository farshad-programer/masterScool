import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Register from "../components/LogOn/Register";

const RegisterPage = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="mt-12 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-10 flex-wrap justify-center  items-center">
          <div
            className={`bg-white dark:bg-secondary-dark-bg  pt-10 px-4   w-full   rounded-2xl`}
          >
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

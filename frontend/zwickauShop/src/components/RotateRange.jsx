import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const RotateRange = ({ rotation = 0, setRotation }) => {
  const handleResetZoom = () => {
    setRotation(0);
  };
  const handleInputChange = (e) => {
    setRotation(Number(e.target.value));
  };
  const progressWidth = `${((rotation + 180) / 360) * 100}%`;
  return (
    <div className="range-slider mt-7">
      <div className="flex-col justify-center items-center w-full">
        <label className="text-gray-500      text-sm font-eng2">
          <p className="text-gray-700 inline-block text-bold">Rotation : </p>{" "}
          {rotation}
        </label>
        <input
          type="range"
          min="-180"
          max="180"
          step="0.2"
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value))}
          className="slider mt-4"
        />
      </div>
      {/* <div className="slider-thump">
        <div className="tooltip">{zoom}</div>
      </div> */}
      <div
        className="progress bg-gradient-to-r from-white  to-blue-500 -bottom-[0.24rem]"
        style={{ width: progressWidth }}
      >
        <div className="bg-orange-500 text-gray-900 shadow-inner shadow-white font-semibold p-1 absolute -top-[0.8rem] -right-[0.95rem] rounded-full  hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 transition ">
          <FaArrowsRotate className=" text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default RotateRange;

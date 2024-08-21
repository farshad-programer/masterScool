import React from "react";
import { TbZoomInFilled, TbZoomFilled } from "react-icons/tb";

const ZoomRange = ({ zoom = 1, setZoom, label }) => {
  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom((prevZoom) => Math.min(prevZoom + 0.01, 3));
    }
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom((prevZoom) => Math.max(prevZoom - 0.01, 1));
    }
  };

  const handleResetZoom = () => {
    setZoom(1);
  };
  const handleInputChange = (e) => {
    setZoom(Number(e.target.value));
  };
  const progressWidth = `${((zoom - 1) / 2) * 100}%`;
  return (
    <div className="range-slider mt-4">
      <div className="flex-col justify-center items-center w-full">
        <label className="text-gray-500      text-sm font-eng2">
         <p className="text-gray-700 inline-block text-bold">Zoom : </p >  {`${Math.round(((zoom - 1) / 2) * 100)}`}
        </label>
        <input
          type="range"
          min={1}
          max={3}
          step={0.01}
          value={zoom}
          onChange={handleInputChange}
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
          <TbZoomInFilled className=" text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ZoomRange;

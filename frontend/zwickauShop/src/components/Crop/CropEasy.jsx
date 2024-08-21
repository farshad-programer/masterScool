import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./utils/CropImage";
import ZoomRange from "../ZoomRange";
import RotateRange from "../RotateRange";

const CropEasy = ({ image, setOpenCrop, setImages, images, setShowImages }) => {
  const [files, setFiles] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixcels, setCroppedAreaPixcels] = useState(null);
  const cropComplete = (croppedArea, croppedAreaPixcels) => {
    setCroppedAreaPixcels(croppedAreaPixcels);
  };
  const cropImage = async () => {
    if (images.length >= 5) {
      return;
    }
    const file = await getCroppedImg(image, croppedAreaPixcels, rotation);

    await setImages([...images, file]);
    await setShowImages(true);
    // setFile(file);
    //   setPhotoURL();
  };
  return (
    <div className=" h-[65%] w-full top-0 left-0 absolute z-40">
      <div className="w-full h-full  relative border-2 border-slate-800 rounded-lg">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={4 / 3}
          showGrid={false}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </div>

      <div className="flex-col justify-between mb-5 items-center">
        <ZoomRange zoom={zoom} setZoom={setZoom} />
        <RotateRange rotation={rotation} setRotation={setRotation} />
        {/* <input
          type="range"
          min="0"
          max="360"
          step="0.5"
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value))}
          className="block p-2 pt-9 w-full mt-1  bg-gray-200 dark:bg-gray-800 appearance-none rounded-lg h-1"
        /> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex w-full items-center space-x-3 justify-start ">
          <button
            onClick={() => setOpenCrop(false)}
            //   disabled={!formik.isValid ? true : false}
            className="btn   disabled:bg-slate-500 tracking-wide hover:shadow-inner hover:shadow-orange-400 bg-slate-800 font-eng2 font-light text-xs py-2 px-4 hover:transition-all hover:scale-110 transition-all rounded-xl active:bg-slate-700 text-white "
          >
            Cancel
          </button>
          <button
            onClick={cropImage}
            //   disabled={!formik.isValid ? true : false}
            className="btn   disabled:bg-slate-500 tracking-wide hover:shadow-inner hover:shadow-orange-400 bg-slate-800 font-eng2 font-light text-xs py-2 transition-all hover:transition-all hover:scale-110 px-4 rounded-xl active:bg-slate-700 text-white "
          >
            OK
          </button>
        </div>
        <button
          onClick={() => {
            setRotation(0);
          }}
          //   disabled={!formik.isValid ? true : false}
          className="btn   disabled:bg-slate-500 tracking-wide hover:shadow-inner hover:shadow-orange-400 bg-slate-800 font-eng2 font-light text-xs py-2 px-4 rounded-xl mr-10 transition-all hover:transition-all hover:scale-110 active:bg-slate-700 text-white "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CropEasy;

import React, { useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import useClickOutside from "../utilities/useClickOutside";

const MenuImages = ({ images, setShowImages, setImages }) => {
  const menuImagesRef = useRef(null);
  useClickOutside(menuImagesRef, () => {
    setShowImages(false);
  });
  const dragOverImage = useRef(0);
  const handleImageDelet = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };
  const dragImage = useRef(0);

  const handelSort = () => {
    const imageStone = [...images];
    const temp = imageStone[dragImage.current];
    imageStone[dragImage.current] = imageStone[dragOverImage.current];
    imageStone[dragOverImage.current] = temp;
    setImages(imageStone);
  };
  return (
    <div
      ref={menuImagesRef}
      className="bg-gray-400  top-[0rem] right-0 blur-0 transition-all    w-1/2 z-50 rounded-xl shadow-md shadow-gray-500 overflow-auto h-auto absolute"
    >
      <div className="relative opacity-100">
        <div className="flex w-full items-center justify-end p-2">
          <IoCloseSharp
            className="text-lg font-bold text-black cursor-pointer"
            onClick={() => setShowImages(false)}
          />
        </div>
        <div
          className="flex-col items-center w-full justify-center py-3 space-y-4  px-2"
          style={{ direction: "rtl" }}
        >
          {images.map((image, index) => {
            return (
              <div
                className="relative w-full flex items-center justify-center "
                draggable
                onDragStart={() => (dragImage.current = index)}
                onDragEnter={() => (dragOverImage.current = index)}
                onDragEnd={handelSort}
                onDragOver={(e) => e.preventDefault}
              >
                <div className="  w-2/3 relative border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    key={index}
                    src={image}
                    alt="Avatar"
                    className="  object-cover w-[100%] h-[100%] inset-0 hover:scale-110 hover:transition-all    "
                  />
                </div>
                <button
                  className="absolute  -top-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
                  title="delet photo"
                >
                  <RiDeleteBinFill
                    className=" hover:scale-110 transition-transform "
                    onClick={() => handleImageDelet(index)}
                  />
                </button>
                {index === 0 && (
                  <IoMdCheckmarkCircleOutline className="text-xl font-bold text-green-700 bottom-1 right-1 absolute" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuImages;

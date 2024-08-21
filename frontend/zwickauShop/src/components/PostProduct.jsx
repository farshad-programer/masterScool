import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";

import "../assets/css/ButtonRegister.css";
import { validationRegisterSchema } from "./LogOn/validation";
import { useAddNewUserMutation } from "../features/registerUsersApiSlice";
import FormikControl from "../Formik/FormikControl";
import CropEasy from "./Crop/CropEasy";
import { PulseLoader } from "react-spinners";
import {
  selectAllCategorys,
  useGetCategorysQuery,
} from "../features/categoryApiSlice ";
import { useSelector } from "react-redux";
import { IoImages } from "react-icons/io5";
import MenuImages from "./MenuImages";
import { useAddNewProductMutation } from "../features/productApiSlice";

const PostProduct = () => {
  const {
    data: categorys,
    isLoading: isCatloading,
    isSuccess: isCatSuccess,
    isError: isCatError,
    error: catError,
  } = useGetCategorysQuery();
  let category = useSelector((state) => selectAllCategorys(state, categorys));
  const [openCrop, setOpenCrop] = useState(false);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  const refName = useRef();
  const initialValues = {
    name: "",
    brand: "",
    rating: "",
    price: "",
    category: "",
    isFeatured: "",
    richDescription: "",
    description: "",
    images: [],
  };
  const [addNewProduct, { data, isLoading, isSuccess, isError, error }] =
    useAddNewProductMutation();
  const onSubmit =async (values) => {
    const ratings =await Number(parseFloat(values?.rating.replace("€", "").trim()));
    const prices =await Number(parseFloat(values?.price.replace("€", "").trim()));
    addNewProduct({
      name: [{ lang: "eng", value: values.name }],
      brand: values.brand,
      rating: ratings,
      price: prices,
      category: values.category,
      isFeatured: values.isFeatured,
      confirmPassword: values.confirmPassword,
      richDescription: values.richDescription,
      description: values.description,
      images: images,
      countInStock: 10,

    });
    console.log(values, ratings, prices);
  };
  if (isError) {
    console.log("error", error);
  }
  if (isSuccess) {
    console.log("data", data);
  }

  useEffect(() => {
    refName?.current?.focus();
    console.log("object");
  }, []);

  return (
    <div
      className={
        "relative bg-white w-full max-w-4xl p-8 z-[8] flex flex-col space-y-6 rounded-xl text-white"
      }
    >
      <div className="bg-cyan-700 border-cyan-950 border-2 z-[9] absolute left-0 top-0 p-10 backdrop-blur-3xl w-full h-full flex flex-col rounded-xl text-white"></div>
      <div className="flex flex-col lg:flex-row h-full lg:space-x-6 lg:space-y-0 z-[10] space-y-6 justify-around">
        <div className="lg:w-2/5 w-full">
          <div className="font-eng1">
            <h1 className="text-white font-eng2 font-bold text-4xl tracking-wide">
              Insert Product
            </h1>
            <p className="py-2 text-cyan-200 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A et
              consequuntur sit blanditiis, dolor inventore fugit voluptas?
              Temporibus vero, nulla deserunt sed necessitatibus aliquam vitae
              provident sapiente aut nam velit.
            </p>
          </div>
        </div>
        <div
          className={`${
            showImages && "backdrop-blur"
          }  bg-white w-auto rounded-xl  shadow-lg p-8`}
        >
          {showImages && (
            <MenuImages
              setShowImages={setShowImages}
              images={images}
              setImages={setImages}
            />
          )}

          <label className="block mb-3 w-5/6 ml-3 ">
            <input
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              className="block w-full text-sm text-slate-500 file:p-5 file:mr-3 file:py-1 file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
            />
          </label>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnChange={true}
            validateOnMount={true}
          >
            {(formik) => (
              <Form
                className={`flex  flex-col text-sm font-eng2 space-y-4 relative text-gray-700`}
              >
                <button
                  disabled={images.length === 0}
                  onClick={() => setShowImages(true)}
                  className="absolute -top-8 right-3 text-cyan-600 disabled:text-gray-500"
                >
                  <IoImages className=" text-xl shadow-md    focus:shadow-cyan-400 focus:drop-shadow-xl  " />
                  <span className="absolute -top-2 -right-3 p-2 w-5 h-5 text-sm rounded-full flex items-center justify-center text-gray-200 font-bold bg-red-600">
                    {images.length}
                  </span>
                </button>

                {openCrop && (
                  <CropEasy
                    setOpenCrop={setOpenCrop}
                    image={image}
                    images={images}
                    setImages={setImages}
                    setShowImages={setShowImages}
                  />
                )}

                <div className={`${openCrop ? "opacity-0" : "opacity-100"}`}>
                  <div className="flex flex-col md:flex-row md:space-x-2 items-center justify-between">
                    <div className="w-full pb-0">
                      <FormikControl
                        control="chakraInputSecond"
                        name="name"
                        label="Name of product :"
                        type="text"
                      />
                    </div>
                    <div className="w-full pb-0">
                      <FormikControl
                        control="chakraInputSecond"
                        name="brand"
                        label="Brand of product :"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-2 items-center justify-between">
                    <div className="w-full pb-0">
                      <FormikControl
                        control="ChakraInputNumber"
                        name="rating"
                        label="Rating :"
                        value={formik.values}
                      />
                    </div>

                    <div className="w-full pb-0">
                      <FormikControl
                        control="ChakraInputNumber"
                        name="price"
                        label={`Price :`}
                        value={formik.values}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-2 items-center justify-between">
                    <div className="w-full pb-0">
                      <FormikControl
                        control="ChakraSelected"
                        name="category"
                        label="Category"
                        options={category}
                      />
                    </div>

                    <div className="w-full pb-0">
                      <FormikControl
                        control="ChakraCheckBox"
                        name="isFeatured"
                        label="IsFeatured :"
                        value={formik.values}
                      />
                    </div>
                  </div>
                  <div className="w-full pb-0">
                    <FormikControl
                      control="ChakraTextArea"
                      placeholder="RichDescription"
                      rows="2"
                      label="RichDescription :"
                      name="richDescription"
                      type="textarea"
                    />
                  </div>
                  <div className="w-full pb-0">
                    <FormikControl
                      control="ChakraTextArea"
                      placeholder="Description"
                      rows="4"
                      label="Description :"
                      name="description"
                      type="textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!formik.isValid ? true : false}
                    className="btn a disabled:bg-slate-500 tracking-wide bg-slate-900 font-eng2 font-light text-sm py-3 px-6 rounded-xl active:bg-slate-700 text-purple-900"
                  >
                    {isLoading ? (
                      <PulseLoader color="#fff" size={5} />
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostProduct;
// {

//   "name": "ورساچ",
//   "nameEng": "versach",
//   "nameGrm": "versatsch",
//   "description": "one of the best product",
//   "richDescription": "the price is very good",
//   "images": [
//       "http://localhost:5000/2023-02-11T13-18-06.816Zlaura-college-K_Na5gCmh38-unsplash.jpg-1698606380796.jpeg"
//   ],
//   "brand": "",
//   "price": 50,
//   "category": {
//       "_id": "653e708464f7e9223464f290",

//   },
//   "countInStock": 10,
//   "rating": 4,
//   "numReviews": 0,
//   "isFeatured": true,

// },

import React from "react";

import PostProduct from "../components/PostProduct";

const PostProductPage = () => {
  return (
    <div className="m-12 h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex  items-center  justify-center w-full   ">
          <div
            className={`bg-white dark:bg-secondary-dark-bg flex h-full justify-center items-center   z-10  w-full   rounded-2xl`}
          >
            <div className="h-[100%] w-full flex-col flex items-center justify-center  p-4 relative">
              <PostProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProductPage;

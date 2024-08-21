const ErrorMessages = ({ message, arrowDir, position }, props) => {
  let arrowStyle = "";
  let locationstyle = "";
  switch (arrowDir) {
    case "down":
      arrowStyle = "  lg:top-7 -bottom-3 left-6  ";
      break;
    case "up":
      arrowStyle = "bottom-full lg:left-3 -bottom-3 rotate-180 ";
      break;
    case "left":
      arrowStyle = "-left-4  rotate-90 -bottom-3 lg:-translate-y-1/2 top-1/2";
      break;
    case "right":
      arrowStyle = "-right-4  -rotate-90 -bottom-3 lg:top-1/2 -translate-y-1/2";
      break;
    default:
      arrowStyle = "";
      break;
  }

  switch (position) {
    case "left":
      locationstyle = " w-full   bottom-0 right-[80%] mr-2 ";
      arrowStyle = " -rotate-90 -ml-1 top-[0.45rem] left-[98%] ";
      break;
    case "right":
      locationstyle = " w-full  left-[97%] ml-1 bottom-[0rem]  ";
      arrowStyle = "right-[96.8%]  rotate-90 top-[0.45rem] ";
      break;
    case "down":
      locationstyle = " w-full  -left-[4%] ml-1 top-[3.5rem]   ";
      arrowStyle = " -top-3  rotate-180 right-[1.1rem]  ";
      break;
    default:
      locationstyle = " -top-[25px]  w-full left-0";
      break;
  }

  return (
    <div
      className={`${locationstyle} ${
        position === "up"
          ? "w-full -top-14"
          : position === "down"
          ? "lg:w-full bottom-0"
          : "lg:w-3/4 bottom-0"
      } shadow-lg shadow-red-600/50 relative  rounded-lg   text-gray-100 text-sm text-left    px-2  pb-2   bg-red-600`}
    >
      {message}
      <div
        className={`${arrowStyle} shadow-xl shadow-red-600/50 w-0 h-0 absolute   border-l-[12px] border-l-transparent border-t-[14px] border-t-red-600 border-r-[12px] border-r-transparent`}
      ></div>
    </div>
  );
};

export default ErrorMessages;

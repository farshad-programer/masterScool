import React from "react";
import ChakraInput from "./ChakraInput";
import ChakraInputSecond from "./ChakraInputSecond";
import ChakraSelected from "./ChakraSelected";
import ChakraTextArea from "./ChakraTextArea";
import ChakraCheckBox from "./ChakraCheckBox";
import ChakraInputNumber from "./ChakraInputNumber";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "chakraInput":
      return <ChakraInput {...rest} />;
    case "chakraInputSecond":
      return <ChakraInputSecond {...rest} />;
    case "ChakraSelected":
      return <ChakraSelected {...rest} />;
    case "ChakraTextArea":
      return <ChakraTextArea {...rest} />;
    case "ChakraCheckBox":
      return <ChakraCheckBox {...rest} />;
      case "ChakraInputNumber":
      return <ChakraInputNumber {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;

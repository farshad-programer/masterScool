import * as Yup from "yup";

export const validationRegisterSchema = Yup.object({
    country: Yup.string().required("Country is required"),
    zip: Yup.number()
    .typeError("Zip code must be a number")
    .required("Zip code is required")
    .test(
      'len',
      'Zip code must be exactly 5 digits',
      val => val && val.toString().length === 5
    ),
  

    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street and house number is required"),
    phon: Yup.number()
  .transform(value => (isNaN(value) ? undefined : value))
  .test(
    'is-phone',
    'Phone number must be a valid number and have at least 10 and at most 15 digits',
    value => {
      if (!value) return false;
      const phoneNumber = String(value);
      return phoneNumber.length >= 10 && phoneNumber.length <= 15;
    }
  )
  .required('Phone number is required'),

    lName: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Invalid Last_Name")
      .min(2, "Last_Name number can not  have less than 2 characters")
      .max(50, "Last_Name number can not  have more than 50 characters")
      .required("Last_Name  is required"),
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Invalid Name")
      .min(2, "Name number can not  have less than 2 characters")
      .max(50, "Name number can not  have more than 50 characters")
      .required("Name  is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required(
        "Enter a combination of alt least eight numbers, letters and punctuation marks (such as ! and &,@)"
      )
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must contain uppercase, lowercase, number and  special character"
      ),

    confirmPassword: Yup.string()

      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  export const validationLogInSchema = Yup.object({
    
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required(
        "Enter a combination of alt least eight numbers, letters and punctuation marks (such as ! and &,@)"
      )
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must contain uppercase, lowercase, number and  special character"
      ),

  
  });
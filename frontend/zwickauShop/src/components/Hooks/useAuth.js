import { jwtDecode } from "jwt-decode";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const useAuth =  () => {
  const token =  useSelector(selectCurrentToken);

  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const decoded = jwtDecode(token);
    const { email, roles } = decoded.UserInfo;

    isAdmin = roles.includes("Admin");

    if (isAdmin) status = "Admin";
    

    return { email, roles, status, isAdmin };
  }

  return { email: "", roles: [], isAdmin, status };
};
export default useAuth;

import { USER_APIS } from "../Apis/Apis.js";
import { toast } from "react-hot-toast";
import {
  setsignupData,
  setLoading,
  setUser,
  setToken,
} from "../slices/auth.slice.js";
import { apiConnector } from "../Apis/apiConnector.js";

export const signup = (username, email, password, contactNumber, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("api", USER_APIS.SIGN_UP_API);

      console.log("username", username, email, password, contactNumber);
      const response = await apiConnector("POST", USER_APIS.SIGN_UP_API, {
        username,
        email,
        password,
        contactNumber,
      });

      console.log("first", response);

      if (!response) {
        throw new Error("ERROR IN SIGNUP API.....", response.error);
      }
      console.log("SignUp Response : ", response);

      // Save the token in local storage and then redirect to dashboard page

      dispatch(setsignupData(response.data.data));
      toast.success("Account Created Successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error in APi Calling", error);
    }
    dispatch(setLoading(false));
  };
};
export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("username", email, password);
      const response = await apiConnector("POST", USER_APIS.LOGIN_API, {
        email,
        password,
      });

      console.log("api", USER_APIS.LOGIN_API);

      if (!response) {
        throw new Error("ERROR IN LOGIN API.....", response.error);
      }
      console.log("LOGIN Response : ", response);

      dispatch(setUser(response.data.data.user));
      dispatch(setToken(response.data.data.accessToken));
      const Role = response.data.data.user.role;
      console.log("accesstokne", response.data.data.accessToken);

      localStorage.setItem(
        "token",
        JSON.stringify(response.data.data.accessToken)
      );
      console.log("user role", response.data.data.user.role);
      toast.success("Log in Successfully");
      if (Role === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/candidate");
      }
    } catch (error) {
      console.log("api", USER_APIS.LOGIN_API);
      toast.error(error.response.data.message);
      console.log("Error in APi Calling", error);
    }
    dispatch(setLoading(false));
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      dispatch(setUser(null));
      navigate("/login");
    } catch (err) {
      console.log("LogOut Error: ", err);
    }
  };
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", USER_APIS.FORGOT_PASSWORD, {
        email,
      });
      console.log("response", response);
      toast.success("Email sent successfully");
    } catch (error) {
      console.log("ERROR_IN_FORGOTPASSWORD_API.......", error);
    }
    dispatch(setLoading(false));
  };
};

export const resetpassword = (password, token, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("api", USER_APIS.RESET_PASSWORD);
      const response = await apiConnector(
        "PUT",
        `${USER_APIS.RESET_PASSWORD}/${token}`,
        {
          password,
        }
      );
      console.log("response", response);
      toast.success("Password reset successfully");
      navigate("/login");
    } catch (error) {
      console.log("ERROR_IN_RESETPASSWORD_API....", error);
    }
    dispatch(setLoading(false));
  };
};

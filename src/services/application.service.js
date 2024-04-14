import toast from "react-hot-toast";
import { APPLICATION_API } from "../Apis/Apis";
import { apiConnector } from "../Apis/apiConnector";
import { setApplication } from "../slices/application.slice";

export const createApplication = (applicationData, token, navigate) => {
  return async (dispatch) => {
    try {
      console.log("applicationdata", applicationData);
      const response = await apiConnector(
        "POST",
        `${APPLICATION_API.CREATE_NEWAPPLICATION_API}/${token}`,
        applicationData,
        {
          "Content-Type": "multipart/form-data",
        }
      );

      dispatch(setApplication(response.data.data));
      toast.success("Application Submitted Successfully");
      navigate("/dashboard/candidate");
    } catch (error) {
      console.log("ERROR_IN _APPLICATION_API...", error);
    }
  };
};

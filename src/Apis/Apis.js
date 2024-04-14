const BASE_URL = process.env.REACT_APP_BASE_URL;

export const USER_APIS = {
  SIGN_UP_API: BASE_URL + "/user/signup",
  LOGIN_API: BASE_URL + "/user/login",
  LOGOUT_API: BASE_URL + "/user/logout",
  FORGOT_PASSWORD: BASE_URL + "/user/resetpasswordtoken",
  RESET_PASSWORD: BASE_URL + "/user/update-password",
};

export const JOB_API = {
  CREATE_CATEGORY_API: BASE_URL + "/job/createcategory",
  CREATE_JOBTYPE_API: BASE_URL + "/job/createjobtype",
  CREATE_TAG_API: BASE_URL + "/job/createtag",
  CREATE_JOB_API: BASE_URL + "/job/createjob",
  GET_CATEGORY_API: BASE_URL + "/job/getcategory",
  GET_JOBTYPE_API: BASE_URL + "/job/getjobtype",
  GET_TAG_API: BASE_URL + "/job/gettag",
  GET_JOBS_API: BASE_URL + "/job/getjobs",
};

export const APPLICATION_API = {
  CREATE_NEWAPPLICATION_API: BASE_URL + "/application/newapplication",
  GET_ALL_APPLICATION: BASE_URL + "/application/getallapplication",
  UPDATE_APPLICATION_STATUS: BASE_URL + "/application/updateapplicationstatus",
  GET_APPLIED_JOB_API: BASE_URL + "/application/appliedjob",
  GET_ALL_RESUME_API: BASE_URL + "/application/allresume",
};

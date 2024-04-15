import axios from "axios";

// axios.defaults.headers.common["Origin"] =
//   "https://job-board-frontend-teal.vercel.app";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

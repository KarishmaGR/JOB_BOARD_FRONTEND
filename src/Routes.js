import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import Admin from "./Componets/Admin/Admin.jsx";
import Home from "./Componets/Home.jsx";
import Candidate from "./Componets/Candidate.jsx";
import SignUp from "./Componets/SignUp.jsx";
import Login from "./Componets/Login.jsx";
import Forgotpassword from "./Componets/Common/Forgotpassword.jsx";
import ResetPassword from "./Componets/ResetPassword.jsx";
import Application from "./Componets/Application.jsx";
import AppliedJobs from "./Componets/AppliedJobs.jsx";
import CreateCategory from "./Componets/Admin/CreateCategory.jsx";
import CreateTag from "./Componets/Admin/CreateTag.jsx";
import CreateJobType from "./Componets/Admin/CreateJobType.jsx";
import CreateJob from "./Componets/Admin/CreateJob.jsx";
import AllApplications from "./Componets/Admin/AllApplications.jsx";
import UpdateApplicationstatus from "./Componets/Admin/UpdateApplicationstatus.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <Home /> },
      { path: "/dashboard/admin", element: <Admin /> },
      { path: "/dashboard/candidate", element: <Candidate /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/forgotpassword", element: <Forgotpassword /> },
      { path: "/resetpassword/:id", element: <ResetPassword /> },
      { path: "/application/:id", element: <Application /> },
      { path: "/appliedjobs", element: <AppliedJobs /> },
      { path: "/category", element: <CreateCategory /> },
      { path: "/tag", element: <CreateTag /> },
      { path: "/jobtype", element: <CreateJobType /> },
      { path: "/newjob", element: <CreateJob /> },
      { path: "/allapplications", element: <AllApplications /> },
      { path: "/updateapplication/:id", element: <UpdateApplicationstatus /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default Router;

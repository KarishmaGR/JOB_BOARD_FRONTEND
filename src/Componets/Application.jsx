import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createApplication } from "../services/application.service";
const Application = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desiredsalary, setdesiredsalary] = useState("");
  const [currentcompany, setcurrentcompany] = useState("");
  const [resume, setresume] = useState(null);
  //   const { applicationdata } = useSelector((state) => state.application);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("desiredsalary", desiredsalary);
    formData.append("resume", resume);
    formData.append("currentcompany", currentcompany);
    const token = location.pathname.split("/").at(-1);
    const applicationData = {
      username,
      email,
      phone,
      desiredsalary,
      resume,
      currentcompany,
    };

    console.log("appliaiton", applicationData);
    //dispatch(setCourseData(courseData));
    dispatch(createApplication(applicationData, token, navigate));
    setcurrentcompany("");
    setdesiredsalary("");
    setemail("");
    setphone("");
    setusername("");
    setresume(null);
  };

  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="max-w-4xl  mt-10 mb-10 w-[50vw] bg-white  text-white dark:bg-gray-900 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className=" mt-10 mb-10 w-[50vw]  bg-slate-700  dark:bg-gray-900 rounded-xl shadow-md p-4 sm:p-7">
          <form
            className=" bg-slate-800 px-8 py-8 rounded-xl  "
            encType="multipart/form-data"
            onSubmit={handleOnSubmit}
          >
            {/* <!-- Section --> */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-gray-100">
                  Submit your application
                </h2>
              </div>
              {/* <!-- End Col --> */}

              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                >
                  Full name
                </label>
              </div>
              {/* <!-- End Col --> */}

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="name"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-50 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              {/* <!-- End Col --> */}

              {/* email */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                >
                  Email
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* phone */}
              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="phone"
                    className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* current company */}
              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="currentcompany"
                    className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                  >
                    Current Company
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="currentcompany"
                  type="text"
                  name="currentcompany"
                  value={currentcompany}
                  onChange={(e) => setcurrentcompany(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-gray-100">Profile</h2>
              </div>
              {/* <!-- End Col --> */}

              {/* resume */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="resume"
                  className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                >
                  Resume/CV
                </label>
              </div>

              <div className="sm:col-span-9">
                <label htmlFor="resume-cv" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={(e) => setresume(e.target.files[0])}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <div className="sm:col-span-12">
                <h2 className="text-lg font-semibold text-gray-100">
                  Before sending your application, please let us know...
                </h2>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="desiredsalary"
                  className="inline-block text-sm font-medium text-gray-100 mt-2.5"
                >
                  Desired salary
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="desiredsalary"
                  name="desiredsalary"
                  value={desiredsalary}
                  onChange={(e) => setdesiredsalary(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* <!-- End Col --> */}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Application;

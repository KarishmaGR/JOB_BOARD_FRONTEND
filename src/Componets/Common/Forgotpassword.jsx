import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { forgotPassword } from "../../services/auth.service.js";

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    email: "",
  });
  useEffect(() => {}, []);

  const handelonchange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const forgotpasswordData = {
      ...formdata,
    };
    console.log("formdata", forgotpasswordData);

    const { email } = forgotpasswordData;
    dispatch(forgotPassword(email));
    setFormdata({
      email: "",
    });
  };
  return (
    <section className=" mt-10 mb-10 w-[50vw] bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex  items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></Link>
        <div className="w-full   rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Enter Your Email To send Link For Password Reset
            </h1>
            <form
              className="  space-y-4 md:space-y-6"
              onSubmit={handleOnSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={formdata.email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handelonchange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full border-blue-900 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Forgotpassword;

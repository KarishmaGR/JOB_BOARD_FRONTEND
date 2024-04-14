import { useState } from "react";
import { apiConnector } from "../../Apis/apiConnector";
import { JOB_API } from "../../Apis/Apis";
import toast from "react-hot-toast";

const CreateJobType = () => {
  const [jobtype, setjobtype] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      jobtype,
    };
    console.log("data", data);
    try {
      const { jobtype } = data;
      if (!jobtype) {
        toast.error("Please Enter Job Type");
        return;
      }
      const response = await apiConnector("POST", JOB_API.CREATE_JOBTYPE_API, {
        jobtype,
      });
      if (response) {
        toast.success("Job Type Created Successfully");
      }
      setjobtype("");
    } catch (error) {
      console.log("ERROR_IN_CATEGORY_API...", error);
    }
  };
  return (
    <>
      <div className="grid text-white bg-slate-900 min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="max-w-[500px] bg-slate-900 rounded-2xl border-slate-900 border-1 shadow-white shadow  p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Create New Job Type
          </h1>

          <form onSubmit={handleOnSubmit} className=" ">
            <label className="relative">
              <input
                required
                type="text"
                name="jobtype"
                value={jobtype}
                onChange={(e) => setjobtype(e.target.value)}
                placeholder="Enter Job Type"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full text-black rounded-[8px] bg-yellow-50 px-[12px] py-[12px] font-medium text-richblack-900"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateJobType;

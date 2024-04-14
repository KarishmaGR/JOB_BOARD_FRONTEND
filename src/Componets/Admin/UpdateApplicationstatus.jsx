import { useState } from "react";
import { apiConnector } from "../../Apis/apiConnector";
import { APPLICATION_API } from "../../Apis/Apis";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateApplicationstatus = () => {
  const [status, setStatus] = useState("");
  const location = useLocation();
  const [rejectionReason, setrejectionReason] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      status: status.toLowerCase(),
      rejectionReason: rejectionReason,
    };
    console.log(data);
    try {
      const id = location.pathname.split("/").at(-1);
      const { status, rejectionReason } = data;
      const response = await apiConnector(
        "PUT",
        `${APPLICATION_API.UPDATE_APPLICATION_STATUS}/${id}`,
        { status, rejectionReason }
      );
      if (response) {
        toast.success("Status Apdated Successfully");
      }
    } catch (error) {
      console.log("ERROR_IN_UPDATE_SATUS_API....", error);
    }
  };
  return (
    <div className="grid text-white bg-slate-900 min-h-[calc(100vh-3.5rem)] place-items-center">
      <div className="max-w-[500px] bg-slate-900 rounded-2xl border-slate-900 border-1 shadow-white shadow  p-4 lg:p-8">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
          Update Application Status
        </h1>

        <form onSubmit={handleOnSubmit} className=" ">
          <label className="relative">
            <input
              required
              type="text"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Enter Status"
              className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <label className="relative">
            <input
              type="text"
              name="rejectionReason"
              value={rejectionReason}
              onChange={(e) => setrejectionReason(e.target.value)}
              placeholder="If Rejected Please mention Rejection Reasone"
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
  );
};
export default UpdateApplicationstatus;

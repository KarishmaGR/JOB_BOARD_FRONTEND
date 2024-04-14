import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { apiConnector } from "../Apis/apiConnector";
import { APPLICATION_API } from "../Apis/Apis";

const AppliedJobs = () => {
  //const { appliactions } = useSelector((state) => state.application);
  const [appliactions, setApplications] = useState([]);

  useEffect(() => {
    const allApplicationOfJob = async () => {
      const response = await apiConnector(
        "GET",
        APPLICATION_API.GET_APPLIED_JOB_API
      );

      console.log("response", response.data.data);

      if (!response) {
        toast.error("NO APPLICATION FOUND..");
      }

      setApplications(response.data.data);
      console.log("application", appliactions);
    };

    allApplicationOfJob();
  }, []);
  return (
    <>
      {appliactions ? (
        <div className="m-5">
          {appliactions.map((job) => {
            return (
              <>
                <div
                  key={job.job._id}
                  className="group mx-2 mt-10  bg-slate-800  grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg  py-8  text-gray-300 shadow transition hover:shadow-lg sm:mx-auto"
                >
                  <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                    <h3 className="text-sm text-gray-50">{job.job.company}</h3>
                    <Link
                      to="#"
                      className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                    >
                      {job.job.title}
                    </Link>
                    <p className="overflow-hidden pr-7 text-sm">
                      {job.job.description ?? null}
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-50 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Experience:
                        <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                          {" "}
                          {job.job.experienceRequired} year
                        </span>
                      </div>
                      <div className="">
                        Salary:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.job.salary}
                        </span>
                      </div>
                      <div className="">
                        Education:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.job.customefields?.education ?? null}
                        </span>
                      </div>
                      <div className="">
                        Location:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.job.customefields?.location ?? null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <>
          <div className="text-white text-2xl">No Jobs Found</div>
        </>
      )}
    </>
  );
};
export default AppliedJobs;

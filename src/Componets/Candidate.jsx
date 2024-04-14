import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiConnector } from "../Apis/apiConnector";
import { JOB_API } from "../Apis/Apis";
//import { useSelector } from "react-redux";

const Candidate = () => {
  const [jobs, setJobs] = useState([]);
  // const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const jobresponse = async () => {
      try {
        const response = await apiConnector("GET", JOB_API.GET_JOBS_API);
        if (response.status === 200) {
          setJobs(response.data.data);
        }
      } catch (error) {
        console.log("ERROR_IN_JOBS_GET_API...", error);
      }
    };

    jobresponse();
  }, []);
  return (
    <>
      {jobs ? (
        <div className="m-5">
          {jobs.map((job, index) => {
            return (
              <>
                <div
                  key={index}
                  className="group mx-2 mt-10  bg-slate-800  grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg  py-8  text-gray-300 shadow transition hover:shadow-lg sm:mx-auto"
                >
                  <div
                    key={index}
                    className="col-span-11 flex flex-col pr-8 text-left sm:pl-4"
                  >
                    <h3 className="text-sm text-gray-50">{job.company}</h3>
                    <Link
                      to="#"
                      className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                    >
                      {job.title}
                    </Link>
                    <p className="overflow-hidden pr-7 text-sm">
                      {job.description ?? null}
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-50 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Experience:
                        <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                          {" "}
                          {job.experienceRequired} year
                        </span>
                      </div>
                      <div className="">
                        Salary:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.salary}
                        </span>
                      </div>
                      <div className="">
                        Education:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.customefields?.education ?? null}
                        </span>
                      </div>
                      <div className="">
                        Location:
                        <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                          {job.customefields?.location ?? null}
                        </span>
                      </div>
                    </div>
                    <div className=" mt-8">
                      <Link
                        to={`/application/${job._id}`}
                        className=" bg-slate-700 mt-4 rounded-lg py-2 px-6"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <>
          <div>No Jobs Found</div>
        </>
      )}
    </>
  );
};
export default Candidate;

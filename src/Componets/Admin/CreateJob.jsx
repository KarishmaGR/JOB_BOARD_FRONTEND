import { useEffect, useState } from "react";
import { apiConnector } from "../../Apis/apiConnector";
import { JOB_API } from "../../Apis/Apis";
import toast from "react-hot-toast";

const CreateJob = () => {
  const [Category, setCategory] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [tag, setTag] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedjobtypeId, setselectedjobtypeId] = useState("");
  const [selectedtagid, setselectedtagid] = useState("");

  const [formdata, setformdata] = useState({
    title: "",
    company: "",
    experienceRequired: "",
    salary: "",
    description: "",
    skills: [],
    customefields: {},
    customefieldsInput: "",
  });

  const handelOnchange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      setformdata((prevData) => ({
        ...prevData,
        skills: value.split(",").map((skill) => skill.trim()),
      }));
    } else if (name === "customefields") {
    } else {
      setformdata((pre) => ({
        ...pre,
        [name]: value,
      }));
    }
  };
  const handelOnInput = (e) => {
    const { value } = e.target;
    const [key, fieldValue] = value.split(":").map((item) => item.trim());

    setformdata((prevData) => ({
      ...prevData,
      customefieldsInput: value,
      customefields: {
        ...prevData.customefields,
        [key]: fieldValue,
      },
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formdata,
    };

    try {
      const {
        title,
        company,
        experienceRequired,
        salary,
        description,
        skills,
        customefields,
      } = data;
      if (!data) {
        toast.error("Please Enter Category");
        return;
      }
      const response = await apiConnector(
        "POST",
        `${JOB_API.CREATE_JOB_API}/${selectedCategoryId}/${selectedjobtypeId}/${selectedtagid}`,
        {
          title,
          company,
          experienceRequired,
          salary,
          description,
          skills,
          customefields,
        }
      );
      if (response) {
        toast.success("Job Created Successfully");
      }
      setformdata({
        title: "",
        company: "",
        experienceRequired: "",
        salary: "",
        description: "",
        skills: [],
        customefields: {},
      });
    } catch (error) {
      console.log("ERROR_IN_CATEGORY_API...", error);
    }
  };

  // console.log("id", selectedCategoryId);
  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  // console.log("id", selectedjobtypeId);
  const handleJobTypeChange = (e) => {
    setselectedjobtypeId(e.target.value);
  };

  // console.log("id", selectedtagid);
  const handleTagChange = (e) => {
    setselectedtagid(e.target.value);
  };

  useEffect(() => {
    const getCategory = async () => {
      const response = await apiConnector("GET", JOB_API.GET_CATEGORY_API);

      if (response) {
        setCategory(response.data.data);
      }
      console.log("category", Category);
    };
    const getjobtype = async () => {
      const response = await apiConnector("GET", JOB_API.GET_JOBTYPE_API);
      if (response) {
        setJobType(response.data.data);
      }
      console.log("jobtype", jobType);
    };
    const gettag = async () => {
      const response = await apiConnector("GET", JOB_API.GET_TAG_API);
      if (response) {
        setTag(response.data.data);
      }
      console.log("tag", tag);
    };
    console.log("category", Category);
    console.log("jobtype", jobType);
    console.log("tag", tag);
    getCategory();
    getjobtype();
    gettag();
  }, []);

  return (
    <>
      <div className="grid  my-36  text-white bg-slate-900  place-items-center">
        <div className="min-w-[700px] bg-slate-900 rounded-2xl border-slate-900 border-1 shadow-white shadow  p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Create New Job
          </h1>

          <form onSubmit={handleOnSubmit} className=" ">
            <label className="relative">
              <input
                required
                type="text"
                name="title"
                value={formdata.title}
                onChange={handelOnchange}
                placeholder="Enter Title"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="relative">
              <input
                required
                type="text"
                name="company"
                value={formdata.company}
                onChange={handelOnchange}
                placeholder="Enter Company Name"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="relative">
              <input
                required
                type="text"
                name="experienceRequired"
                value={formdata.experienceRequired}
                onChange={handelOnchange}
                placeholder="Experienced required"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="relative">
              <input
                required
                type="text"
                name="salary"
                value={formdata.salary}
                onChange={handelOnchange}
                placeholder="Salary"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="relative">
              <textarea
                required
                type="text"
                name="description"
                value={formdata.description}
                onChange={handelOnchange}
                placeholder="Description"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="relative">
              <input
                required
                type="text"
                name="skills"
                value={formdata.skills.join(", ")}
                onChange={handelOnchange}
                placeholder="Please Enter Skills (comma-separated)"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label htmlFor="customefields" className="relative">
              <div className="mt-4">customefields</div>
              <input
                required
                type="text"
                name="customefields"
                value={formdata.customefieldsInput}
                onChange={handelOnInput}
                placeholder="Custom Fields (key: value)"
                className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>

            <div className=" w-full flex flex-col gap-3 mt-6">
              <div>
                {Category ? (
                  <select
                    value={selectedCategoryId}
                    onChange={handleCategoryChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {Category.map((categori) => {
                      return (
                        <option value={categori._id}>
                          {categori.category}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {" "}
                {jobType ? (
                  <select
                    value={selectedjobtypeId}
                    onChange={handleJobTypeChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {jobType.map((jobtype) => {
                      return (
                        <option value={jobtype._id}>{jobtype.jobtype}</option>
                      );
                    })}
                  </select>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {" "}
                {tag ? (
                  <select
                    value={selectedtagid}
                    onChange={handleTagChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {tag.map((item) => {
                      return <option value={item._id}>{item.tag}</option>;
                    })}
                  </select>
                ) : (
                  <></>
                )}
              </div>
            </div>

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
export default CreateJob;

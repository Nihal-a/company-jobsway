import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo/Logo";
import { Icon } from "@iconify/react";

const AddJob = () => {
  const [qualifications, setQualifications] = useState([{ value: null }]);

  const handleChange = () => {};
  const handleSubmit = () => {};

  const handleAddQualification = () => {
      const values = [...qualifications]
      values.push({value:null})
      setQualifications(values)
  }

  const handleRemoveQualification = (i) => {
      const values = [...qualifications]
      if(i >= 1){
        values.splice(i,1)
      }
      setQualifications(values)
  }

  return (
    <div>
      <Logo />
      <div className="container mx-auto mt-10 max-w-screen-lg mx-auto">
        <h4 className="text-3xl font-semibold">
          Add a New <span className="text-primary">Job.</span>
        </h4>
        <div className="">
          <form
            action=""
            className="flex flex-col items-start "
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="mt-6 flex justify-between w-full ">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Job Title
                </label>
                <input
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Category
                </label>
                <input
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>
            <div className="mt-6 flex justify-between w-full ">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  for="grid-city"
                >
                  Experience Required
                </label>
                <div className="flex justify-between items-center">
                  <input
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="0"
                    min="0"
                  />
                  <span className="mx-4">To</span>
                  <input
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="1"
                    min="1"
                  />
                </div>
              </div>
              <div class="mt-4">
                <span class="text-gray-700">Time</span>
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="fullTime"
                    />
                    <span class="ml-2">Full Time</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="partTime"
                    />
                    <span class="ml-2">Part Time</span>
                  </label>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  for="grid-city"
                >
                  Salary
                </label>
                <div className="flex justify-between items-center">
                  <input
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="0"
                    min="0"
                  />
                  <span className="mx-4">To</span>
                  <input
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="50000"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between w-full ">
                <div className="w-4/5">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 ml-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
                        for="grid-password"
                        >
                        Qualification
                      </label>
                      <div className="flex items-end  w-full ">
                        <div className="w-full">
                        {qualifications.map((qualified, idx) => (
                        <div className="flex items-center">
                            <input
                          class="appearance-none my-2 block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          placeholder=""
                        />
                        <div className="py-3 px-3 ml-4 my-2 rounded-md bg-secondary flex items-center justify-center cursor-pointer" onClick={() => handleRemoveQualification(idx)}>
                        <Icon icon="ant-design:delete-outlined" />
                        </div>
                        </div>
                        ))}
                        </div>
                        <div className="py-3 px-3 ml-4 my-2 rounded-md bg-secondary flex items-center justify-center cursor-pointer" onClick={handleAddQualification}>
                          <Icon icon="akar-icons:plus" className="text-xl" />
                        </div>
                      </div>
                      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                  </div>
                </div>
            </div>

            {/* {formErr && (
              <p className="font-md mt-1" style={{ color: "red" }}>
                {formErr}
              </p>
            )} */}

            <div className="flex items-center justify-center w-full h-full">
              <button
                className="w-1/2 rounded-md my-5 bg-primary p-1 h-10"
                type="submit"
                style={{ color: "#fff" }}
              >
                Register Your Company
              </button>
            </div>
            <div className="text-center w-full">
              <p className="my-2 text-sm font-light ">
                Already on JobsWay?
                <Link
                  to="/login"
                  style={{ color: "#008FAE" }}
                  className="underline "
                >
                  Log in now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;

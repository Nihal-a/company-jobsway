import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo/Logo";
import { Icon } from "@iconify/react";


const initialState = { jobTitle: '', jobCategory: '' , minExp : '',maxExp : '',timeSchedule : '',minSalary : '',maxSalary : '',qualification : '',education : '',jobLocation : '',skills : '',language : ''}



const AddJob = () => {
  const [qualifications, setQualifications] = useState([{ value: null }]);
  const [qualificationValues, setQualificationValues] = useState([]);
  const [languages, setLanguages] = useState([])
  const [skills, setSkills] = useState([])
  const [formData, setFormData] = useState(initialState)


  const handleSubmit = (e) => {
      e.preventDefault()
      formData.skills = skills 
      formData.language = languages
      const num = qualifications.length

      formData.qualification = qualifications[num-1]
      console.log("formdata : ",formData);
      // login(formData)
    }
    const handleSkillChange = (e) => {
        var skill = e.target.value.split(',');
        setSkills(skill)
    }
    
    const handleQualificationChange = (e) => {
      let i = 0 ;
        setQualificationValues([...qualificationValues[i],e.target.value])
    }

    const handleChange = (e) => {
      e.preventDefault()
      setFormData({...formData,[e.target.name] : e.target.value})
  }
  const handleLangChange = (e) => {
    var lang = e.target.value.split(',');
    setLanguages(lang)
  }

  const handleAddQualification = (e) => {
      const values = [...qualifications]
      values.push(qualificationValues)
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
                required
                    onChange={handleChange}
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="jobTitle"
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
                required
                    onChange={handleChange}
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  name="jobCategory"
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
                  required
                    onChange={handleChange}
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="0"
                    min="0"
                    name="minExp"
                  />
                  <span className="mx-4">To</span>
                  <input
                  required
                    onChange={handleChange}
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="1"
                    min="1"
                    name="maxExp"
                  />
                </div>
              </div>
              <div class="mt-4">
                <span class="text-gray-700">Time</span>
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                    required
                        onChange={handleChange}
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="fullTime"
                      name="timeSchedule"
                    />
                    <span class="ml-2">Full Time</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                    required
                        onChange={handleChange}
                      type="radio"
                      class="form-radio"
                      name="accountType"
                      value="partTime"
                      name="timeSchedule"
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
                  required
                    onChange={handleChange}
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="0"
                    min="1"
                    name="minSalary"
                  />
                  <span className="mx-4">To</span>
                  <input
                  required
                    onChange={handleChange}
                    class="appearance-none block w-1/2 bg-secondary text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="50000"
                    min="1"
                    name="maxSalary"
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
                            required
                                
                          class="appearance-none my-2 block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          placeholder={`Qualification ${idx+1}`}
                          name="qualification"
                          onChange={handleQualificationChange}
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

            <div className="flex justify-between w-full ">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Education
                </label>
                <input
                required
                    onChange={handleChange}
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  name="education"
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Job Location
                </label>
                <input
                required
                    onChange={handleChange}
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  name="jobLocation"
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>


            <div className="flex justify-between w-full ">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Skills
                </label>
                <input
                required
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Separated by Coma.."
                  onChange={handleSkillChange}
                  name="skills"
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  for="grid-first-name"
                >
                  Language
                </label>
                <input
                required
                  class="appearance-none block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Separated by Coma.."
                  onChange={handleLangChange}
                  name="language"
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>

            {/* {formErr && (
              <p className="font-md mt-1" style={{ color: "red" }}>
                {formErr}
              </p>
            )} */}

            <div className="flex items-center justify-center w-full h-full">
              <button
                className="w-1/4 rounded-md my-5 bg-primary p-1 h-10"
                type="submit"
                style={{ color: "#fff" }}
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;

import React, { useEffect, useState } from "react";
import { Link,useHistory,useLocation} from "react-router-dom";
import Logo from "../UI/Logo/Logo";
import { Icon } from "@iconify/react";
import moment from "moment";
import { AddNewJob, useCompanyDetails } from "../../Hooks/Company";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";


const initialState = { jobTitle: '', jobCategory: '' , minExp : '',maxExp : '',timeSchedule : '',minSalary : '',maxSalary : '',qualification : '',education : '',jobLocation : '',skills : '',language : '' , status : false}



const EditJob = () => {

  const {mutate : AddTheJob } = AddNewJob()
  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
  const {isLoading , isError , error , data} = useCompanyDetails(company?.company._id)
  const [languages, setLanguages] = useState([])
  const [skills, setSkills] = useState([])
  const [formData, setFormData] = useState(initialState)
  const history = useHistory()
  const [qualificationValues, setqualificationValues] = useState([{qualification : ""}])
  const [errors, setErrors] = useState('')
  const [ind, setInd] = useState(0)
  const location = useLocation()


  useEffect(() => {
    setErrors('')
    location.state = undefined
  }, [formData,qualificationValues])


  const handleSubmit = (e) => {
      e.preventDefault()
      formData.skills = skills 
      formData.language = languages
      formData.qualification = qualificationValues
      formData.createdAt = moment().format('YYYYMMDDhmmssa')
      var id = company.company._id
      AddTheJob({formData , id})
    }

    const handleSkillChange = (e) => {
        var skill = e.target.value.split(',');
        setSkills(skill)
    }

    if ( isLoading ) {
      return (
        <LoadingSpinner />
      );
    }
    
    const handleQualificationChange = (i,e) => {
        let newQualificationValues = [...qualificationValues]
        newQualificationValues[i][e.target.name] = e.target.value
        setqualificationValues(newQualificationValues)
    }


    const addQualificationValues = () => {
      if(qualificationValues[ind].qualification.trim() == '') return setErrors('Enter the Qualification')
      setqualificationValues([...qualificationValues,{qualification : ""}])
      setInd(ind + 1)
    }

    const removeQualificationValues = (i) => {
      let newQualificationValues = [...qualificationValues]
      newQualificationValues.splice(i,1)
      setqualificationValues(newQualificationValues)
      setInd(ind - 1)
    }


    const handleChange = (e) => {
      e.preventDefault()
      setFormData({...formData,[e.target.name] : e.target.value})
  }
  const handleLangChange = (e) => {
    var lang = e.target.value.split(',');
    setLanguages(lang)
  }


  return (
    <div className="p-10">
      <Logo />
      <div className="container mx-auto mt-10 max-w-screen-lg mx-auto">
        <h4 className="text-3xl font-semibold">
          Edit <span className="text-primary">Job.</span>
        </h4>
        {/* {location?.state?.Err && <h4 className="text-md">Errors : </h4>}
          {location?.state?.Err.map((error) => (
            <>
                <p className="text-red-800" style={{ color: "red" }}>{error.msg}</p>
            </>
          ))} */}
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

                    {errors && <p className="text-danger text-sm">{errors}</p>}
                    {qualificationValues.map((element,index) => (

                       <div className="flex items-center" key={index}>
                       <input

                     class="appearance-none my-2 block w-full bg-secondary text-gray-700 border border-0 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-password"
                     type="text"
                     placeholder={`Qualification ${index+1}`}
                     name="qualification"
                     onChange={e => handleQualificationChange(index ,e)}
                     value={element.qualification || "" }
                   />
                   {index ? <div className="py-3 px-3 ml-4 my-2 rounded-md bg-secondary flex items-center justify-center cursor-pointer" onClick={() => removeQualificationValues(index)}>
                   <Icon icon="ant-design:delete-outlined" />
                   </div> : null}
                   </div>
                    ))}
                        </div>
                        <div className="py-3 px-3 ml-4 my-2 rounded-md bg-secondary flex items-center justify-center cursor-pointer" onClick={() => addQualificationValues()}>
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

export default EditJob()

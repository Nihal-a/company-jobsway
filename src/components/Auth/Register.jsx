import React, { useState, useEffect } from "react";
import { Link, useHistory,useLocation} from "react-router-dom";
import noImage from "../../assets/images/noImage.jpg";
import Axios from "axios";
import { RegisterCompany } from "../../Hooks/Auth";
import toast from "react-hot-toast";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Logo from "../UI/Logo/Logo";
import ImageInput from "../UI/ImageInput/ImageInput";

const initialState = {
  companyName: "",
  industry: "",
  email: "",
  location: "",
  phone: "",
  bio: "",
  website: "",
  linkedIn: "",
  facebook: "",
  twitter: "",
  instagram: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false)
  const [formData, setformData] = useState(initialState);
  const [formErr, setFormErr] = useState(null);
  const { mutate: registerCompany, isLoading } = RegisterCompany();
  const history = useHistory();
  const location = useLocation()


  const handleChange = (e) => {
    e.preventDefault();
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setImage(null)
  }, [location])

useEffect(() => {
  location.state = undefined
}, [formData])

  if (isLoading || loading) {
    return (
      <LoadingSpinner />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerCompany({ companyDetails : formData , image});
  };


  return (
    <div>
      <Logo />
      <div className="flex flex-col items-center py-8">
        <div className="container max-w-screen-md px-5 w-full">
          <h3 className="text-3xl font-semibold mt-8 text-center">
            Register Your <span className="text-primary">Company</span>
          </h3>
          {location?.state?.Err && <h4 className="text-md">Errors : </h4>}
          {location?.state?.Err.map((error) => (
            <>
                <p className="text-red-800" style={{ color: "red" }}>{error.msg}</p>
            </>
          ))}
          <form
            action=""
            className="flex flex-col items-start"
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <h6 className="mt-4 font-normal">Basic Details :</h6>
            <p className="font-light text-secondary text-sm">
              Enter the details of company
            </p>
            <div className="mt-3 flex justify-between w-full ">
              <input
                
                onChange={handleChange}
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="mr-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
              />
              <input
                
                onChange={handleChange}
                name="industry"
                type="text"
                placeholder="Indutsry"
                className="ml-0.5  text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
              />
            </div>
            <input
              
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className="mt-3 ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
            />
            <div className="mt-3 flex justify-between w-full ">
              <input
                
                onChange={handleChange}
                name="location"
                type="text"
                placeholder="Location"
                className="mr-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
              />
              <input
                
                onChange={handleChange}
                name="phone"
                type="text"
                placeholder="Phone"
                className="ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
              />
            </div>
            <textarea
              onChange={handleChange}
              name="bio"
              placeholder="About your Company (Must be more than 20 words long)"
              className="text-sm font-light bg-secondary w-full mt-3 rounded-md h-40 border-none outline-none p-3 "
            />
            <div className="w-full h-40 flex items-center flex-col">

              <div className="w-full h-40 flex items-center flex-col mt-8">

              <img src={image ? image : noImage} alt="no image" className="w-40 h-40 rounded-md"/>

              <ImageInput setImage={setImage}/>
            </div>
            </div>
            <h6 className="mt-28 font-normal">Connect Social Media : </h6>
            <p className="font-light text-secondary text-sm">
              Input the links your accounts
            </p>
            <div className="mt-3 flex justify-between w-full ">
              <div className="mt-1 flex rounded-md shadow-sm w-full mr-1">
                <span class="inline-flex items-center px-3 rounded-l-md bg-dark  border-r-0 border-0 text-white text-sm w-44">
                  Website link
                </span>
                <input
                  onChange={handleChange}
                  name="website"
                  type="text"
                  placeholder="Link to Your Website"
                  className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between w-full ">
              <div className="mt-1 flex rounded-md shadow-sm w-full mr-1">
                <span class="inline-flex items-center px-3 rounded-l-md bg-dark  border-r-0 border-0 text-white text-sm">
                  linkedin.com/
                </span>
                <input
                  onChange={handleChange}
                  name="linkedIn"
                  type="text"
                  placeholder="Username"
                  className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
                />
              </div>
              <div className="mt-1 flex rounded-md shadow-sm w-full ml-1">
                <span class="inline-flex items-center px-3 rounded-l-md bg-dark  border-r-0 border-0 text-white text-sm">
                  twitter.com/
                </span>
                <input
                  onChange={handleChange}
                  name="twitter"
                  type="text"
                  placeholder="Username"
                  className="ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between w-full ">
              <div className="mt-1 flex rounded-md shadow-sm w-full mr-1">
                <span class="inline-flex items-center px-3 rounded-l-md bg-dark  border-r-0 border-0 text-white text-sm">
                  facebook.com/
                </span>
                <input
                  onChange={handleChange}
                  name="facebook"
                  type="text"
                  placeholder="Username"
                  className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
                />
              </div>
              <div className="mt-1 flex rounded-md shadow-sm w-full ml-1">
                <span class="inline-flex items-center px-3 rounded-l-md bg-dark  border-r-0 border-0 text-white text-sm">
                  instagram.com/
                </span>
                <input
                  onChange={handleChange}
                  name="instagram"
                  type="text"
                  placeholder="Username"
                  className="ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
                />
              </div>
            </div>
            <h6 className="mt-20 font-normal">Create password : </h6>
            <input
              
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className="mt-1 ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
            />
            <input
              
              onChange={handleChange}
              name="confirmPassword"
              type="Password"
              placeholder="Confirm Password"
              className="mt-2 ml-0.5 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
            />

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

export default Register;

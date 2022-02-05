import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Link ,useLocation,useHistory} from 'react-router-dom'
import { LoginCompany } from '../../Hooks/Auth'
import { LoginHrAccount } from '../../Hooks/hr'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import { useForm } from "react-hook-form";
import FormError from '../UI/Error/FormError'
const initialState = { email: '', password: '' }



function Login() {

    const location = useLocation()
    const history = useHistory()
    const {mutate: companyLogin , isLoading} = LoginCompany()
    const [formData, setFormData] = useState(initialState)
    const [loginErr, setLoginErr] = useState('')
    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const [hrAccount, sethrAccount] = useState(true)
    const {mutate : hrLogin , isLoading : loading} = LoginHrAccount()
  const { register, formState: { errors }, handleSubmit: validateSubmit } = useForm();


    useEffect(() => {
        setCompany(JSON.parse(localStorage.getItem('company')))
    }, [])

    const handleChangeCompany = (e) => {
        e.preventDefault()
        sethrAccount(!hrAccount)
    }


    const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(hrAccount){
            hrLogin(formData)
        }else{
            companyLogin(formData)
        }
    }

    if(isLoading || loading){
        return <LoadingSpinner />
    }
        

    return (
        <>
            <div className="container m-auto flex justify-center items-center h-screen text-4xl font-semibold flex-col">
            <Link className="font-semibold text-3xl absolute top-12 left-10">JobsWay.</Link>
            <form action="" className="flex flex-col justify-between items-center p-3" onSubmit={validateSubmit(handleSubmit)} >
                <h3 className="-mt-10"><span className="text-primary">Log In to your</span> Company</h3>
                <div className="w-full h-10 mt-5 flex justify-center">
                    <div className="text-sm bg-secondary w-1/2 h-full rounded-md flex font-light items-center justify-between">
                        <p onClick={handleChangeCompany} className={`px-3 py-2 cursor-pointer ${ !hrAccount &&  'bg-primary rounded-md text-white' }`}>Company</p>
                        <p onClick={handleChangeCompany} className={`px-3 py-2 cursor-pointer ${ hrAccount &&  'bg-primary rounded-md text-white' }`}>Hr Account</p>
                    </div>
                </div>
                {loginErr && <p className="text-sm font-light mt-1" style={{color:'red'}}>{loginErr}</p> }
                <input {...register("email", { required : true   , pattern : { value :  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } })}   onChange={handleChange} name="email" type="email" placeholder="Email" className="m-1 mt-8 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                {errors.email && <FormError text={"Enter a Valid Email Addres"} />}
                <input {...register("password", { required: true , minLength:8  })}  onChange={handleChange} name="password" type="password" placeholder="Password" className="m-1 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                {errors.password && <FormError text={"Password Must be 8 Charecter or more."} />}
                <button type="submit" className="text-white text-lg bg-primary px-7 py-1 m-3 rounded-lg font-medium" style={{ color: '#fff' }}>Sign In</button>
            </form>
            <p className="mt-4 text-sm font-light">
                Company not registerd?
                <Link to="/register" style={{ color: "#008FAE" }} className="underline">
                    Register now
                </Link>
            </p>
        </div>
        </>
    )
}

export default Login

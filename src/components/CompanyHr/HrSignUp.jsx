import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { ActivateHrAccount } from '../../Hooks/hr'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'

const initialState = { password: '', confirmPassword: '' }

const HrSignUp = () => {

    const {token , hrid} = useParams()
    const [expired, setExpired] = useState(false)
    const [Err, setErr] = useState('')
    const [formData, setFormData] = useState(initialState)
    const [decodedData, setDecodedData] = useState({})
    const {mutate : activateHrAccount , isLoading } = ActivateHrAccount()

    useEffect(() => {

      try {
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()) {
          setExpired(true)
          setErr('Your Link Has Been Expired !')
        }else{
          setDecodedData(decodedToken)
        }
      } catch (error) {
        setExpired(true)
        setErr('Invalid Token ! Please check the Token.')
      }
        
    }, [formData])

    const handleChange = (e) => {
      setFormData({...formData,[e.target.name] : e.target.value})
    }

    const handleActivateHrAccount = (e) => {
      e.preventDefault()
      if(formData.password != formData.confirmPassword) return setErr('Passwords do not match')
      activateHrAccount({token,hrid,formData})
    }

    if(isLoading){
      return <LoadingSpinner />
    }

    return (
        expired ? <><div className="w-full h-screen bg-secondary flex items-center justify-center">
          
          
          <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl absolute opacity-100 ">
	<div className="flex items-center justify-between">
		<div className="flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg"
				className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<div className="flex flex-col ml-3">
				<div className="font-medium leading-none text-danger text-xl">{Err}</div>
				{/* <p className="text-sm text-gray-600 leading-none mt-1">By deleting your account you will lose your all data
				</p> */}
			</div>
		</div>
		<Link to="/login" className="flex-no-shrink bg-primary px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider  text-white rounded-full">Go Home</Link>
	</div>
</div>
          
          
          <div className='bg-secondary w-full h-screen flex items-center justify-center flex-col text-center pointer-events-none opacity-10'>
        <h3 className='mb-4 text-xl font-light'>Activate Your HR Account  for email <span className='text-primary font-semibold'>nihalavulan1@gmail.com</span></h3>
        <div className="w-80 h-80 bg-white border-2 flex flex-col items-center p-4 justify-center">
            <h3 className='mt-2 font-medium text-secondary text-md'>Set Password</h3>
            <form action="" className='w-full mt-4'>
            <input
          name="password"
          type="password"
          placeholder="Password"
          className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
          disabled
        />
            <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary mt-4"
          disabled
        />

        <button className='text-sm bg-primary py-2 px-6 text-white mt-4 rounded-md ' type="submit">Activate Account</button>
            </form>
        </div>
    </div></div></> : <><div className='bg-secondary w-full h-screen flex items-center justify-center flex-col text-center'>
        <h3 className='mb-4 text-xl font-light'>Activate Your HR Account  for email <span className='text-primary font-semibold'>{decodedData.email}</span></h3>
        {Err && <p className='text-sm text-danger mb-2'>{Err}</p>}
        <div className="w-80 h-80 bg-white border-2 flex flex-col items-center p-4 justify-center">
            <h3 className='mt-2 font-medium text-secondary text-md'>Set Password</h3>
            <form action="" className='w-full mt-4' onSubmit={handleActivateHrAccount}>
            <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary"
        />
            <input
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary mt-4"
        />

        <button className='text-sm bg-primary py-2 px-6 text-white mt-4 rounded-md' type="submit" >Activate Account</button>
            </form>
        </div>
    </div></>
    )
}

export default HrSignUp

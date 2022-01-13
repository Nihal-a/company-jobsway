import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const HrSignUp = () => {

    const {token , hrid} = useParams()


    useEffect(() => {

    }, [])

    const handleChange = () => {}

    return (
        <div className='bg-secondary w-full h-screen flex items-center justify-center flex-col text-center'>
            <h3 className='mb-4 text-xl font-light'>Activate Your HR Account  for email <span className='text-primary font-semibold'>nihalavulan1@gmail.com</span></h3>
            <div className="w-80 h-80 bg-white border-2 flex flex-col items-center p-4 justify-center">
                <h3 className='mt-2 font-medium text-secondary text-md'>Set Password</h3>
                <form action="" className='w-full mt-4'>
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

            <button className='text-sm bg-primary py-2 px-6 text-white mt-4 rounded-md ' type="submit">Activate Account</button>
                </form>
            </div>
        </div>
    )
}

export default HrSignUp

import React from 'react'
import { Link } from 'react-router-dom'
import {useHistory} from "react-router-dom"


const UnverifiedCompany = () => {

    const history = useHistory()

    const handleLogin =  async (e) => {
        e.preventDefault()
        await localStorage.removeItem('company')
        history.push('/')
    }
    

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl mt-4">Your Company has Created Successfully.</h2>
            <p className="text-center mt-6 text-2xl font-light">JobsWay will Verify Your Company and Provide the <br /> Dashboard to you within 1 - 2 days</p>
            <Link onClick={handleLogin} className="underline text-sm mt-8 text-primary">Back to login</Link>
        </div>
    )
}

export default UnverifiedCompany

import React from 'react'
import { Link } from 'react-router-dom'
import {useHistory} from "react-router-dom"


const BannedCompany = () => {


const history = useHistory()

    const handleLogin =  (e) => {
        e.preventDefault()
            localStorage.removeItem('company')
            history.push('/')
    }

    return (
        <div className="flex flex-col text-center">
            <h2 className="text-2xl mt-4" style={{ color: 'red' }}>Your Company has been Blocked by JobsWay.</h2>
            <h2 className="text-sm mt-4">We have noted some action against JobsWay's terms & conditions.</h2>
            <Link onClick={handleLogin} className="underline text-sm mt-8 text-primary">Back to login</Link>
            </div>
    )
}

export default BannedCompany

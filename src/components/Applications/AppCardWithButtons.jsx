import React from 'react'
import { Link } from 'react-router-dom'
import AppCard from './AppCard'


const AppCardWithButtons = () => {
    return (
        <div className="flex items-center justify-around">
            <AppCard />
            <div className="flex flex-col justify-between ">
                <Link className="py-3 px-6 rounded-md text-white bg-success mb-2">Add to Shortlist</Link>
                <Link className="py-3 px-6 rounded-md text-white bg-danger mt-2">Reject Application</Link>
            </div>
        </div>
    )
}

export default AppCardWithButtons

import React from 'react'
import { Link } from 'react-router-dom'
import JobsCard from './JobsCard'

const JobsCardWithButtons = () => {
    return (
        <div className="flex items-center justify-around">
            <JobsCard />
            <div className="flex flex-col justify-between ">
                <Link className="py-3 px-6 rounded-md text-white bg-warning mb-2">Edit Job</Link>
                <Link className="py-3 px-6 rounded-md text-white bg-danger mt-2">Delete Job</Link>
            </div>
        </div>
    )
}

export default JobsCardWithButtons

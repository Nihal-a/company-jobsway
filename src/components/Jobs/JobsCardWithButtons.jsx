import React, { useEffect } from 'react'
import { Link , useLocation} from 'react-router-dom'
import JobsCard from './JobsCard'


const JobsCardWithButtons = ({job}) => {

    const location = useLocation()

    useEffect(() => {
        console.log("rerendering 2");
    },[location])

    return (
        <div className="flex items-center justify-around">
            <JobsCard job={job}/>
            <div className="flex flex-col justify-between ">
                <Link to='/editjob' className="py-3 px-6 text-center rounded-md text-white bg-warning mb-2">Edit Job</Link>
                <Link className="py-3 px-6 text-center rounded-md text-white bg-danger mt-2">Delete Job</Link>
            </div>
        </div>
    )
}

export default JobsCardWithButtons

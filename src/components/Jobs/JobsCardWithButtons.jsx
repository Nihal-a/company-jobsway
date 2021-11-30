import React, { useEffect } from 'react'
import { Link , useLocation} from 'react-router-dom'
import swal from 'sweetalert'
import { DeleteJobById } from '../../Hooks/Company'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import JobsCard from './JobsCard'


const JobsCardWithButtons = ({job}) => {

    const location = useLocation()
    const {mutate : deleteJob , isLoading} = DeleteJobById()

    useEffect(() => {
        console.log("rerendering 2");
    },[location])

    const handleDelete = (e) => {
        e.preventDefault()
        swal({
            title: `Are you sure to Delete ${job.jobTitle}?`,
            text: "Once deleted, you will not be able to recover this data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              deleteJob(job._id)
            } else {
              swal("Action Cancelled");
            }
          });
    }

    if(isLoading){
        <LoadingSpinner />
    }

    return (
        <div className="flex items-center justify-around">
            <JobsCard job={job}/>
            <div className="flex flex-col justify-between ">
                <Link to={`/editjob/${job._id}`} className="py-3 px-6 text-center rounded-md text-white bg-warning mb-2">Edit Job</Link>
                <Link onClick={handleDelete} className="py-3 px-6 text-center rounded-md text-white bg-danger mt-2">Delete Job</Link>
            </div>
        </div>
    )
}

export default JobsCardWithButtons

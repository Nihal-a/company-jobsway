import swal from '@sweetalert/with-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RejectApplicant, ShortListApplicant } from '../../Hooks/user'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import AppCard from './AppCard'


const AppCardWithButtons = ({user , hr}) => {

    const {mutate : rejectApplicant , isLoading} = RejectApplicant()
    const {mutate : shortListApplicant , isLoading : loading} = ShortListApplicant()

    const handleAddToShotlist = (e) => {
        e.preventDefault()

        swal({
            title: "Add to Short List?",
            icon: "info",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
                const hrId = hr._id
                const data = {
                    jobId  : user?.applications?.jobId ,
                    userId  : user?.applications?.userId
                }
                shortListApplicant({hrId , data})
            }
          });
    }

    // if(isLoading || loading){
    //     return <LoadingSpinner />
    // }

    const handleRejectApplication = (e) => {
        e.preventDefault()
        swal({
            title: "Are you sure to Rejct?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const hrId = hr._id
                const data = {
                    jobId  : user?.applications?.jobId ,
                    userId  : user?.applications?.userId
                }
                rejectApplicant({hrId , data})
            }
          });
    }


    return (
        <div className="flex items-center justify-around">
            <AppCard user={user}/>
            <div className="flex flex-col justify-between ">
                <Link onClick={handleAddToShotlist} className="py-3 px-6 text-center rounded-md text-white bg-success mb-2">Add to Shortlist</Link>
                <Link onClick={handleRejectApplication} className="py-3 px-6 text-center rounded-md text-white bg-danger mt-2">Reject Application</Link>
            </div>
        </div>
    )
}

export default AppCardWithButtons

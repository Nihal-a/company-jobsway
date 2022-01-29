import { Button } from '@material-tailwind/react';
import swal from '@sweetalert/with-react';
import React, { useEffect } from 'react'
import { Link,Route } from 'react-router-dom'
import { ApproveTaskCompleted, RejectCompletedTask } from '../../Hooks/user';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';


function TaskCompleteCard({user}) {

    const {mutate : rejectCompletedTask , isLoading} = RejectCompletedTask()
    const {mutate : approveTaskCompleted , isLoading : loading} = ApproveTaskCompleted()

    const handleReject = (e) => {
        e.preventDefault()
        swal({
            title: "Are you sure to Reject?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                rejectCompletedTask(user._id)
            }
          });
    }



   

    const handleContact = (e) => {
        e.preventDefault()
        swal({
            buttons: true,
            content : (
                <div className="text-2xl flex flex-col gap-3 justify-center ">
                <p>{`Contact ${user?.userDetails[0]?.name} : `}</p><a className='text-primary font-semibold' href={user?.userDetails[0]?.authmode == 'email' ? `mailto:${user?.userDetails[0]?.email}` : `tel:91${user?.userDetails[0]?.phone}`} >{user?.userDetails[0]?.authmode == 'email' ? `${user?.userDetails[0]?.email}` : `${user?.userDetails[0]?.phone}`}</a>
                <div className="flex items-center justify-center mt-3">
                </div>
                </div> 
            )
          })
          .then((willDelete) => {
            if (willDelete) {
                const data = {
                    jobId : user.jobId ,
                    userId : user.userId
                }
              approveTaskCompleted({taskId : user._id , data})
            }
          });
    }
 
    if(isLoading || loading){
        return <LoadingSpinner />
    }

    
    return (
        <div className="w-full h-24 rounded-md flex justify-between items-center px-8 mt-2" style={{backgroundColor:'#B8E8F2'}}>
            <h3 className="text-md "><span className="text-xl mr-2 font-bold" style={{color:'#004756'}}>{user?.userDetails[0]?.name}</span>Has Completed the task</h3>
            <div className="flex items-center">
                <a target={'_blank'} href={user?.result} className="underline mr-8 text-lg">View</a>
                <Link onClick={handleContact} className="py-3 px-6 bg-success text-white rounded-md mr-2">Contact</Link>
                <Link onClick={handleReject} className="py-3 px-6 bg-danger text-white rounded-md ">Reject</Link>
            </div>
        </div>
    )
}

export default TaskCompleteCard










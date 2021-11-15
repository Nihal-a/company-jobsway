import React, { useEffect } from 'react'
import { Link,Route } from 'react-router-dom'


function TaskCompleteCard({name}) {

    return (
        <div className="w-full h-24 rounded-md flex justify-between items-center px-8 mt-4" style={{backgroundColor:'#B8E8F2'}}>
            <h3 className="text-md "><span className="text-xl mr-2 font-bold" style={{color:'#004756'}}>{name}</span>Has Completed the task</h3>
            <div className="flex items-center">
                <Link className="underline mr-8 text-lg">View</Link>
                <Link className="py-3 px-6 bg-success text-white rounded-md mr-2">Contact</Link>
                <Link className="py-3 px-6 bg-danger text-white rounded-md ">Reject</Link>
            </div>
        </div>
    )
}

export default TaskCompleteCard










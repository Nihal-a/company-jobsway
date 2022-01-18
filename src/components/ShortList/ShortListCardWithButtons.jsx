import React from 'react'
import { Link } from 'react-router-dom'
import AppCard from '../Applications/AppCard'


const ShortListCardWithButtons = ({user}) => {
    return (
        <div className="flex items-center justify-around">
            <AppCard user={user}/>
            <div className="flex flex-col justify-between ">
                <Link className="py-3 px-6 rounded-md text-white bg-primary mb-2">Assign Task</Link>
            </div>
        </div>
    )
}

export default ShortListCardWithButtons

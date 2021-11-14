import React, { useEffect, useState } from 'react'
import SideNav from '../UI/Sidenav/SideNav'
import {  } from 'react-query'
import { useLocation } from 'react-router-dom'


function Dashboard() {

    // const {} = useQuery('company')

    const [company, setCompany] = useState('')

    const location = useLocation()

    useEffect(() => {
        console.log(location.state);
    }, [location])

    return (
        <div>
            <SideNav />
        </div>
    )
}

export default Dashboard

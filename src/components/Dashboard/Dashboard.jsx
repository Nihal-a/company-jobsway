import React, { useEffect, useState } from 'react'
import SideNav from '../UI/Sidenav/SideNav'
import { QueryClient, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { fetchCompany } from '../../actions/Auth'


function Dashboard() {

    // const [company, setCompany] = useState('')
    const location = useLocation()

    return (
        <div>
            <SideNav />
        </div>
    )
}

export default Dashboard

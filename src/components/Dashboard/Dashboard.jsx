import SideNav from '../UI/Sidenav/SideNav'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import {  useCompanyDetails } from '../../Hooks/Company'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import { fetchCompanyDetails } from '../../api'
import UnverifiedCompany from './UnverifiedCompany'
import BannedCompany from './BannedCompany'
import Logo from '../UI/Logo/Logo'

function Dashboard() {

    const location = useLocation()
    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))

    const {isLoading , isError , error , data} = useCompanyDetails(company?.company._id)

    if(isLoading){
        <LoadingSpinner />
    }
    if(isError){
        console.log("Error : ",error);
    }

    return (
        <>
        {(data?.data.company.status !== true && !data?.data.company.ban) && <Logo />}
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-semibold mb-10">Hey <span className="text-primary">{data?.data.company.companyName},</span></h1>

        {data?.data.company?.status == true ? 
        data?.data.company.ban ? <BannedCompany /> : <><p>DAshboard dude</p></>
        : 
        data?.data.company.status == false ? <UnverifiedCompany /> : <><p>Rejected</p></> }
        </div>
        </>
    )
}

export default Dashboard

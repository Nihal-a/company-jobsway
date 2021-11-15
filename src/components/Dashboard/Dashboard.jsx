import SideNav from '../UI/Sidenav/SideNav'
import { Link, useLocation } from 'react-router-dom'
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
        <h1 className="text-6xl font-semibold mb-5">Hey <span className="text-primary">{data?.data.company.companyName},</span></h1>

        {data?.data.company?.status == true ? 
        data?.data.company.ban ? <BannedCompany /> : <><p>DAshboard dude</p></>
        : 
        data?.data.company.status == false ? <UnverifiedCompany /> :  <><h2 className="text-2xl mt-4">Your Company has been Rejected.</h2>
        <p className="text-center mt-6 text-md font-medium" style={{ color: 'red' }}>Reason : <br /> {data?.data.company?.reason}</p>
        <Link onClick className="underline text-sm mt-8 text-primary">Re-register company</Link> </>}
        </div>
        </>
    )
}

export default Dashboard

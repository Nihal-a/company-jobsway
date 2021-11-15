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
        {(data?.data.company.status !== true || data?.data.company.ban == true) && <Logo />}
        {(data?.data.company.status == true && data?.data.company.ban == false) ? null : <h1 className="text-6xl font-semibold mb-5 text-center mt-24">Hey <span className="text-primary">{data?.data.company.companyName},</span></h1>}

        {data?.data.company?.status == true ? 
        data?.data.company.ban ? <div className="flex items-center justify-center mt-10">
            <BannedCompany />
        </div> :
        <>
            <div className="">
                <SideNav companyName={data?.data.company.companyName}/>
            </div>
        </>
        : 
        data?.data.company.status == false ? <UnverifiedCompany /> :  <div className="flex flex-col items-center justify-center"><h2 className="text-2xl mt-4 text-center">Your Company has been Rejected.</h2>
        <p className="text-center mt-6 text-md font-medium " style={{ color: 'red' }}>Reason : <br /> {data?.data.company?.reason}</p>
        <Link onClick className="underline text-sm mt-8 text-primary ">Re-register company</Link> </div>}
        </>
    )
}

export default Dashboard

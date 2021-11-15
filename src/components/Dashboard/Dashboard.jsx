import SideNav from '../UI/Sidenav/SideNav'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import {  useCompanyDetails } from '../../Hooks/Company'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../UI/Sidenav/LoadingSpinner/LoadingSpinner'
import { fetchCompanyDetails } from '../../api'
import UnverifiedCompany from './UnverifiedCompany'
import BannedCompany from './BannedCompany'

function Dashboard() {

    const location = useLocation()
    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))

    const {isLoading , isError , error , data} = useCompanyDetails(company?.company._id)

    if(isLoading){
        <LoadingSpinner />
    }
    if(isError){
        console.log("yess error",error);
    }

    
    // console.log(data.data.company.status);

    return (
        <>
        {data?.data.company?.status == true ? 
        data?.data.company.ban ? <BannedCompany /> : <><p>DAshboard dude</p></>
        : 
        data?.data.company.status == false ? <UnverifiedCompany /> : <><p>Rejected</p></> }
        </>
    )
}

export default Dashboard

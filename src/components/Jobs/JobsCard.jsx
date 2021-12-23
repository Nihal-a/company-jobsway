import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import googleLogo from '../../assets/images/noImage.jpg'
import { Icon } from '@iconify/react';
import { useCompanyDetails, useCompanyJobs } from '../../Hooks/Company';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import moment from 'moment';


function JobsCard({job}) {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const {isLoading , isError , error , data:companyData} = useCompanyDetails(company?.company._id)
    const location = useLocation()

    if(isLoading){
        <LoadingSpinner />
    }

    useEffect(() => {
        console.log("rerednering 4");
    },[location])

    const postedDate = moment(job.createdAt , "YYYYMMDDhmmssa").startOf('hour').fromNow()

    return (
        <div className="w-4/5 h-62 rounded-md p-4 mt-3" style={{ backgroundColor: '#2c2c2c' }}>
            <div className="flex justify-between">
                <Link className="flex items-center">
                    <img src={companyData?.data.company.logoUrl} alt="company logo" className="w-14 h-14 rounded-md" />
                    <div className="ml-3">
                    <h6 className=" text-2xl font-semibold text-white">{companyData?.data.company.companyName}</h6>
                    <div className="text-sm text-secondary flex items-center">
                        <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{companyData?.data.company.location}</p>
                    </div>
                    </div>
                </Link>
                <div className="text-white capitalize">{postedDate}</div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white mt-3">{job.jobTitle}</h2>
                <div className="flex items-center">
                    <span className="flex items-center mt-2">
                        <Icon icon="bx:bx-rupee" height="34" color="#00B512" />
                        <h6 className="text-2xl font-semibold" style={{color:'#00B512'}}>{job.minSalary }- {job.maxSalary}</h6>
                    </span>
                    <h5 className="text-white font-light mt-2 ml-5">{job.timeSchedule}</h5>
                </div>
            </div>
            <div className="flex justify-between mt-2 ml-2">
                <p className="text-white">{job.minExp} - {job.maxExp} year of Experience</p>
                <Link className="text-white underline text-md">See Applications</Link>
            </div>
        </div>
    )
}

export default JobsCard

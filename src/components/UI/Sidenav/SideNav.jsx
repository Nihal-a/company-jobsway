import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useCompanyDetails } from '../../../Hooks/Company';

const SideNav = () => {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const {isLoading , isError , error , data} = useCompanyDetails(company?.company._id)

    return (
        <div>
            <div className="h-screen w-64 bg-white border-r-2 flex flex-col justify-between items-center sticky top-0">
            <Link className="font-semibold text-xl mt-4">JobsWay.</Link>

            <div className="flex items-start justify-start h-auto flex-col mx-16 mb-20">
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon icon="akar-icons:home" className="mr-3 text-xl" />
                    <p className="text-lg font-light">Dashboard</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bx:bx-buildings" />
                    <p className="text-lg font-light">Companies</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="clarity:users-line" />
                    <p className="text-lg font-light">Users</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bytesize:settings" />
                    <p className="text-lg font-light">Settings</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="simple-line-icons:logout" />
                    <p className="text-lg font-light">Logout</p>
                </a>
            </div>
            <div className="flex items-center flex-col">
            <div className="w-20 h-20 rounded-md">
                <img src={data?.data.company.imgUrl} alt="" className="rounded-md"/>
            </div>
            <h4 className="mb-6 mt-4 font-semibold">{data?.data.company.companyName}</h4>
            </div>
        </div>
        </div>
    )
}

export default SideNav

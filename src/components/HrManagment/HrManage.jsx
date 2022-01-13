import React, { useEffect, useState } from "react";
import SideNav from '../UI/Sidenav/SideNav'
import { Link,useLocation } from "react-router-dom";
import { useCompanyDetails, useCompanyJobs } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import { Icon } from "@iconify/react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";


const HrManage = () => {

    const [company, setCompany] = useState(
        JSON.parse(localStorage.getItem("company"))
      );
      const { isLoading, isError, error, data } = useCompanyDetails(
        company?.company._id
      );
    
      const {isLoading: loading , isError :isJobError , error : jobError , data:jobs } = useCompanyJobs(data?.data.company._id)
      const location = useLocation()
    
      if(isLoading || loading){
          <LoadingSpinner />
      }
    
      const handleChange = () => {}
    
      useEffect(() => {

      },[location])
    
    

    return (
        <div className='flex'>
            <SideNav />
            <div className="w-full">
          <PageHeader
            name={data?.data?.company.companyName}
            desc="Welcome Back!"
          />
          <div className="mt-12 px-8 container w-full">
            <div className="flex w-full justify-center items-center gap-10">
            <input required onChange={handleChange} name="name" type="text" placeholder="Hr Name" className=" text-sm w-1/4 h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
              <input required onChange={handleChange} name="email" type="email" placeholder="Hr Email" className="text-sm w-1/4 h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
              <Link to="/add-hr" className="bg-success py-3 px-6 rounded-md text-white flex items-center ">
                <p>Add Hr </p>
                <Icon icon="akar-icons:plus" className="text-xl ml-2" />
              </Link>
            </div>


            <div className="p-3 mt-8">
            <h5 className="text-xl font-semibold text-dark m-2 text-primary">
                HR Accounts :
              </h5>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Actions</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-md divide-y divide-gray-100 ">
                            <tr >
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">alexshatov@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">active</div>
                                </td>
                                <td className="p-2 whitespace-nowrap flex align-center justify-center">
                                    <div className="text-lg text-center cursor-pointer"><Icon icon="ant-design:delete-outlined" height="24" color="#f24e1e" /></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>

          </div>
        </div>
        </div>
    )
}

export default HrManage

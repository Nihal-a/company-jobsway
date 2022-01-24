import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { useCompanyDetails, useCompanyJobs } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import { Icon } from "@iconify/react";
import JobsCardWithButtons from "./JobsCardWithButtons";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { useHrJobDetails } from "../../Hooks/hr";


function Jobs() {

  const [company, setCompany] = useState(
    JSON.parse(localStorage.getItem("company"))
  );
  const [hr, setHr] = useState(
    JSON.parse(localStorage.getItem("hrData"))
  );
  const { isLoading, isError, error, data } = useCompanyDetails(hr?.hrDetails?.companyId || company?.company._id );

  
  if(company){
    var cstatus = true
  }else{
    var hstatus = true
  }

  // const {isLoading: loading , isError :isJobError , error : jobError , data:jobs } = useCompanyJobs(data?.data.company._id , cstatus)



  const { data : jobsByHr , isLoading : loading} = useHrJobDetails(hr?.hrDetails?._id , hstatus)

  
  const location = useLocation()

  if(isLoading || loading){
      <LoadingSpinner />
  }


  useEffect(() => {
    console.log("rerending 1");
  },[location])


  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full">
          <PageHeader
            name={cstatus ? data?.data?.company.companyName : hr?.hrDetails?.name}
            desc="Welcome Back!"
          />
          <div className="mt-12 px-8 container w-full">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Jobs :
              </h5>
              {!company && <Link to="/add-job" className="bg-success py-3 px-6 rounded-md text-white flex items-center ">
                <p>Add New Job </p>
                <Icon icon="akar-icons:plus" className="text-xl ml-2" />
              </Link>}
            </div>

            <div className="mt-8 mb-8">
              { jobsByHr?.data.length == 0  ? <p className="text-danger text-center text-2xl mt-4">Jobs are empty ! Add a new Job</p> : <>
                { jobsByHr?.data .map((job) => (
                  <JobsCardWithButtons job={job} hrId={hr?.hrDetails?._id}/>
                ))
                }</> }
                
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;

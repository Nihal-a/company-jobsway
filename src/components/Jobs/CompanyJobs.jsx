import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { useCompanyDetails, useCompanyJobs } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import { Icon } from "@iconify/react";
import JobsCardWithButtons from "./JobsCardWithButtons";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { useHrJobDetails } from "../../Hooks/hr";
import JobsCard from "./JobsCard";


function CompanyJobs() {

  const [company, setCompany] = useState(
    JSON.parse(localStorage.getItem("company"))
  );


  const { isLoading, isError, error, data } = useCompanyDetails(company?.company._id);


  const {isLoading :loading , isError :isJobError , error : jobError , data:jobsByHr } = useCompanyJobs(company?.company._id)

  
  useEffect(() => {

  },[])

  if(isLoading || loading ){
      return <LoadingSpinner />
  }


console.log(jobsByHr);

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full">
          <PageHeader
            name={data?.data?.company.companyName }
            desc="Welcome Back!"
          />
          <div className="mt-12 px-8 container w-full">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Jobs :
              </h5>
            </div>

            <div className="">
              { jobsByHr?.data.length == 0  ? <p className="text-danger text-center text-2xl mt-4">Jobs are empty.</p> : <>
                { jobsByHr?.data .map((job) => (
                  <JobsCard job={job}/>
                ))
                }</> }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyJobs;




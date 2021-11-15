import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCompanyDetails } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import { Icon } from "@iconify/react";
import JobsCardWithButtons from "../UI/Items/JobsCardWithButtons";


function Jobs() {
  const [company, setCompany] = useState(
    JSON.parse(localStorage.getItem("company"))
  );
  const { isLoading, isError, error, data } = useCompanyDetails(
    company?.company._id
  );

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full">
          <PageHeader
            name={data?.data?.company.companyName}
            desc="Welcome Back!"
          />
          <div className="mt-12 px-8 container w-full">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Jobs :
              </h5>
              <Link className="bg-success py-3 px-6 rounded-md text-white flex items-center ">
                <p>Add New Job </p>
                <Icon icon="akar-icons:plus" className="text-xl ml-2" />
              </Link>
            </div>

            <div className="mt-8">
                <JobsCardWithButtons />
                <JobsCardWithButtons />
                <JobsCardWithButtons />
                <JobsCardWithButtons />
                <JobsCardWithButtons />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;

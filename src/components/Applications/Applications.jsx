import React, { useState } from "react";
import { useCompanyDetails } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import AppCardWithButtons from "./AppCardWithButtons";


const Applications = () => {

    const [company, setCompany] = useState(
        JSON.parse(localStorage.getItem("company"))
      );
      const { data } = useCompanyDetails(
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
              <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Applications :
              </h5>
              <AppCardWithButtons />
              <AppCardWithButtons />
              <AppCardWithButtons />
          </div>
        </div>
      </div>
        </div>
    )
}

export default Applications

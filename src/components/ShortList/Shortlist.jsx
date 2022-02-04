import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCompanyDetails } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import { Icon } from "@iconify/react";
import ShortListCardWithButtons from "./ShortListCardWithButtons";
import { useShortlistedUsers } from "../../Hooks/user";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";




function Shortlist() {
  const [hr, setHr] = useState(
    JSON.parse(localStorage.getItem("hrData"))
  );


  const { data : shortListedUsers , isLoading } = useShortlistedUsers(hr?.hrDetails?._id)

  console.log(shortListedUsers);

  if(isLoading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full">
          <PageHeader
            name={hr?.hrDetails?.name}
            desc="Welcome Back!"
          />
          <div className="mt-12 px-8 container w-full">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Short Listed :
              </h5>
              <Link to='/set-task' className="bg-success py-3 px-6 rounded-md text-white flex items-center">
                <p>Task Sets </p>
              </Link>
            </div>

            <div className="mt-8 mb-8">
              {
                !shortListedUsers?.data.length == 0 ?  shortListedUsers?.data?.map((user) => (
                  <ShortListCardWithButtons user={user}/>
                )) : <p className="text-danger">No Shortlisted Users Found</p>
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortlist;

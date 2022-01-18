import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCompanyDetails } from "../../Hooks/Company";
import PageHeader from "../UI/Items/PageHeader";
import SideNav from "../UI/Sidenav/SideNav";
import { Icon } from "@iconify/react";
import ShortListCardWithButtons from "./ShortListCardWithButtons";




function Shortlist() {
  const [hr, setHr] = useState(
    JSON.parse(localStorage.getItem("hrData"))
  );


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
              <Link className="bg-success py-3 px-6 rounded-md text-white flex items-center ">
                <p>Task Sets </p>
              </Link>
            </div>

            <div className="mt-8 mb-8">
                <ShortListCardWithButtons />
                <ShortListCardWithButtons />
                <ShortListCardWithButtons />
                <ShortListCardWithButtons />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortlist;

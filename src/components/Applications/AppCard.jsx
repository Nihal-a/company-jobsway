import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AppCard = ({user}) => {

  console.log(user);
  return (
    <div className="w-4/5 h-60 rounded-md p-5 mt-3 bg-secondary">
      <h4 className="text-center font-medium text-xl">{user?.applications?.firstName} {user?.applications?.lastName}</h4>
      <div className="flex items-center text-xl justify-between p-5">
        <img
          src={user?.applications?.imgUrl}
          alt="Applicant"
          className="w-24 h-24 rounded-md"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Icon icon="akar-icons:location" />
            <p className="ml-1">{user?.applications?.location}</p>
          </div>
          <div className="flex items-center">
          <Icon icon="ant-design:mail-outlined" />
            <p className="ml-1">{user?.applications?.email}</p>
          </div>
          <div className="flex items-center">
          <Icon icon="akar-icons:phone" />
            <p className="ml-1">{user?.applications?.phone}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center hover:text-primary">
        <Icon icon="akar-icons:location" />
            <a target="_blank" href={user?.applications?.portfolio} className="ml-1 underline ">Portfolio</a>
          </div>
          <div className="flex items-center hover:text-primary">
          <Icon icon="iconoir:doc-star" />
            <Link to={user?.applications?.resume} className="ml-1 underline ">Resume</Link>
          </div>
          <div className="flex items-center">
          <Icon icon="uit:calender" />
            <p className="ml-1 ">{user?.applications?.experience} Year Exp</p>
          </div>
        </div>
      </div>
      <p className="text-lg mt-3 ml-2">
        Applied for : <span className="font-semibold text-2xl">{user?.jobTitle}</span>
      </p>
    </div>
  );
};

export default AppCard;

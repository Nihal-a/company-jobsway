import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompanyDetails } from '../../Hooks/Company'
import PageHeader from '../UI/Items/PageHeader'
import SideNav from '../UI/Sidenav/SideNav'



const Profile = () => {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const {isLoading , isError , error , data} = useCompanyDetails(company?.company._id)

    return (
        <div className="flex">
            <SideNav />
            <div className="w-full">
                <PageHeader name={data?.data?.company.companyName} desc="Welcome Back!" />
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Company Profile :</h5>
                    <div className="w-full h-40 flex items-center justify-center flex-col">
                        <img src={data?.data.company.logoUrl} alt="Company logo" className="w-32 rounded-md shadow-xl bg-primary" />
                        <h4 className="mt-3 text-2xl font-semibold ">{data?.data.company.companyName}</h4>
                    </div>
                    <div className="w-full h-30  mt-8 grid grid-cols-2 justify-items-center">
                        <div className="">
                            <div className="flex">
                                <div className="flex flex-col items-start mt-2">
                                    <h6 className="mt-2 font-light text-xl">Industry</h6>
                                    <h6 className="mt-2 font-light text-xl">Location</h6>
                                    <h6 className="mt-2 font-light text-xl">Email</h6>
                                    <h6 className="mt-2 font-light text-xl">Phone</h6>
                                </div>
                                <div className="flex flex-col items-start mt-2">
                                    <h4 className="mt-2 font-medium text-xl ml-8">{data?.data.company.industry}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{data?.data.company.location}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{data?.data.company.email}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{data?.data.company.phone}</h4>
                                </div>
                            </div>
                            <div className="mt-8 max-w-md">
                                <h5 className="font-semibold text-lg">Bio : </h5>
                                <p>{data?.data.company.bio}</p>
                            </div>
                        </div>
                        <div className="">
                        <div className="flex">
                                <div className="flex flex-col items-start mt-2">
                                    <h6 className="mt-2 font-light text-xl">Website</h6>
                                    <h6 className="mt-2 font-light text-xl">LinkedIn</h6>
                                    <h6 className="mt-2 font-light text-xl">Facebook</h6>
                                    <h6 className="mt-2 font-light text-xl">Twitter</h6>
                                    <h6 className="mt-2 font-light text-xl">Instagram</h6>
                                </div>
                                <div className="flex flex-col items-start mt-2">
                                    <a target={'_blank'} href={data?.data.company.website} className="underline mt-2 font-medium text-xl ml-8">{data?.data.company.website}</a>
                                    <a target={'_blank'} href={`https://www.linkedin.com/in/${data?.data.company.linkedIn}`} className="underline mt-2 font-medium text-xl ml-8">{data?.data.company.linkedIn}</a>
                                    <a target={'_blank'} href={`https://www.facebook.com/${data?.data.company.facebook}`} className="underline mt-2 font-medium text-xl ml-8">{data?.data.company.facebook}</a>
                                    <a target={'_blank'} href={`https://twitter.com/${data?.data.company.twitter}`} className="underline mt-2 font-medium text-xl ml-8">{data?.data.company.twitter}</a>
                                    <a target={'_blank'} href={`https://www.instagram.com/${data?.data.company.instagram}`} className="underline mt-2 font-medium text-xl ml-8">{data?.data.company.instagram}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

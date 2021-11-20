import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useCompanyDetails } from '../../Hooks/Company';
import Logo from '../UI/Logo/Logo'
import PaymentCard from '../UI/PaymentCard/PaymentCard';







const JobPayment = () => {

   
    const location = useLocation()


    return (
        <div>
            <Logo />
           <div className="container mx-auto p-5 w-full mt-10">
           <h5 className="text-2xl font-semibold text-dark mb-8 text-primary">
                Select Your Payment Plan :
            </h5>
            <div className="flex justify-around items-center">
                <PaymentCard days="3" planName="Free" amount="0" small paid={false}/>
                <PaymentCard days="10" planName="Basic" amount="349" colored popular paid/>
                <PaymentCard days="30" planName="Premium" amount="899" colored small paid/>
            </div>

           </div>
        </div>
    )
}

export default JobPayment

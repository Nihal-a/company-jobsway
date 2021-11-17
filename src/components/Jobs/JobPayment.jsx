import React from 'react'
import { useLocation } from 'react-router-dom';
import Logo from '../UI/Logo/Logo'
import PaymentCard from '../UI/PaymentCard/PaymentCard';


const JobPayment = () => {

    const location = useLocation()

    console.log(location?.state);

    return (
        <div>
            <Logo />
           <div className="container mx-auto p-5 w-full mt-10">
           <h5 className="text-xl font-semibold text-dark mb-8 text-primary">
                Select Your Payment Plan :
            </h5>
            <div className="flex justify-around items-center">
                <PaymentCard days="3" planName="Free" amount="0" small/>
                <PaymentCard days="10" planName="Basic" amount="12" colored popular/>
                <PaymentCard days="30" planName="Premium" amount="20" colored small/>
            </div>

           </div>
        </div>
    )
}

export default JobPayment

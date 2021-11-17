import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const PaymentCard = ({small ,colored,popular,planName,amount,days}) => {
    return (
        <div className={`w-3/4 m-8 h-${small ? '80' : '96'} shadow-xl rounded-xl flex flex-col justify-between p-6 ${colored && 'text-white'}`} style={!colored ? {border : '.5px solid #0A0047'} : {backgroundColor:'#0A0047'}}>
           <div className="flex justify-between items-center">
           <h4 className="font-semibold text-xl w-full">{planName}</h4>
           {popular && <span className="text-sm bg-success py-1 px-4 rounded-2xl text-white ">Popular</span>}
           </div>
            <div className="w-full flex items-center justify-center flex-col">
                <div className="flex items-end"><p className="text-6xl font-semibold flex items-center"><Icon icon="bx:bx-rupee" color="black" height="54" className="p-0 m-0" color={colored && '#f8f8f8'} />{amount}</p><span className="text-secondary text-sm mb-3">/job</span></div>
                <p className="mt-2">Jobs Show for {days} days</p>
            </div>
            <Link className="bg-primary w-full rounded-md h-10 flex items-center justify-center text-white font-semibold" style={{backgroundColor:'#5B40FF'}}>Select Plan</Link>
        </div>
    )
}

export default PaymentCard

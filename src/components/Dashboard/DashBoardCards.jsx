import React from 'react'

const DashBoardCards = ({number,data}) => {
    return (
        <div className="w-96 h-56 bg-primary rounded-2xl text-dark p-6 flex flex-col items-center justify-around m-4" style={{backgroundColor:'#F9F8F3'}}>
            <span className="text-6xl font-medium">{number}</span>
            <h3 className="text-2xl font-semibold">{data}</h3>
        </div>
    )
}

export default DashBoardCards

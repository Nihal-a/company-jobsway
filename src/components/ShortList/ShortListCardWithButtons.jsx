import React from 'react'
import { Link } from 'react-router-dom'
import AppCard from '../Applications/AppCard'
import swal from '@sweetalert/with-react'
import { useState } from 'react/cjs/react.development'

const ShortListCardWithButtons = ({user}) => {

    const [formData, setformData] = useState();

    const handleSubmit = () => {

    }

    const handleAssigntask = (e) => {
        e.preventDefault()
        swal(
            {
                button : "close",
                dangerMode : true , 
                content : (
                    <div className="w-full">
                <div className="flex flex-col items-center w-full">
                    <form action="" className='w-full'>
                    <div className="flex flex-col w-full">
                        <h5 className='font-semibold m-1'>Assign Task</h5>
                        <input required name='set3a'  placeholder='Question 1' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-ful'/>
                        <input required name='set3b'  placeholder='Question 2' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-ful'/>
                        <input required name='set3c'  placeholder='Question 3' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-ful'/>
                        <input required name='set3d'  placeholder='Question 4' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-ful'/>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <button className='px-5 py-3 m-2 rounded-md text-black bg-secondary'>1</button>
                            <button className='px-5 py-3 m-2 rounded-md text-black bg-secondary'>2</button>
                            <button className='px-5 py-3 m-2 rounded-md text-black bg-secondary'>3</button>
                        </div>
                        <div className="w-full mt-3">
                            <input required type="number" min={5}  name='time'  placeholder='Timer in Minutes' className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-1/2' />
                        </div>
                    </div>
                        <div className="">
                            <button type="submit" className='py-2 px-6 rounded-md text-white bg-success mt-4'>Assign Task</button>
                        </div>
                    </form>
                </div>
            </div>
                )
            }
        )
    }

    return (
        <div className="flex items-center justify-around">
            <AppCard user={user}/>
            <div className="flex flex-col justify-between ">
                <Link onClick={handleAssigntask} className="py-3 px-6 rounded-md text-white bg-primary mb-2">Assign Task</Link>
            </div>
        </div>
    )
}

export default ShortListCardWithButtons

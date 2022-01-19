import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { SetHrTask, useHrTasks } from '../../Hooks/hr';
import PageHeader from '../UI/Items/PageHeader';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import SideNav from '../UI/Sidenav/SideNav';


const SetTask = () => {

    const [hr, setHr] = useState(
        JSON.parse(localStorage.getItem("hrData"))
      );
      const {data : hrTasks , isLoading } = useHrTasks(hr?.hrDetails?._id)

    const [formData , setFormData] = useState({
        set1a : '' ,
        set1b : '' ,
        set1c : '' ,
        set1d : '' ,
        set2a : '' ,
        set2b : '' ,
        set2c : '' ,
        set2d : '' ,
        set3a : '' ,
        set3b : '' ,
        set3c : '' ,
        set3d : '' ,
        })

    const { mutate : setHrTasks , isLoading : loading } = SetHrTask()


      if(isLoading || loading) {
        return <LoadingSpinner />
        }
        
        if(hrTasks.data){
           formData.set1a = hrTasks?.data?.Qset1.q1
           formData.set1b = hrTasks?.data?.Qset1.q2
           formData.set1c = hrTasks?.data?.Qset1.q3
           formData.set1d = hrTasks?.data?.Qset1.q4
           formData.set2a = hrTasks?.data?.Qset2.q1
           formData.set2b = hrTasks?.data?.Qset2.q2
           formData.set2c = hrTasks?.data?.Qset2.q3
           formData.set2d = hrTasks?.data?.Qset2.q4
           formData.set3a = hrTasks?.data?.Qset3.q1
           formData.set3b = hrTasks?.data?.Qset3.q2
           formData.set3c = hrTasks?.data?.Qset3.q3
           formData.set3d = hrTasks?.data?.Qset3.q4
        }

      const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name] : e.target.value})
      }
      
      

      const handleSubmit = (e) => {
          e.preventDefault()
              var set1 = {
                 q1 : formData.set1a,
                 q2 : formData.set1b,
                 q3 : formData.set1c,
                 q4 : formData.set1d,
              }

              var set2 = {
                 q1 : formData.set2a,
                 q2 : formData.set2b,
                 q3 : formData.set2c,
                 q4 : formData.set2d,
              }

              var set3 = {
                 q1 : formData.set3a,
                 q2 : formData.set3b,
                 q3 : formData.set3c,
                 q4 : formData.set3d,
              }
              const data = { set1 , set2 , set3 }
              const hrId = hr?.hrDetails?._id
              setHrTasks({ data , hrId})
      }



  return (
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
            Set Tasks :
          </h5>
        </div>

        <div className="mt-8 mb-8">
            <form action="" onSubmit={handleSubmit}>
            <div className=" flex flex-col">
                <h5 className='font-semibold m-1'>Set 1 : </h5>
                <input value={formData.set1a}  name='set1a' onChange={handleChange} placeholder='Question 1' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set1b}  name='set1b' onChange={handleChange} placeholder='Question 2' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set1c}  name='set1c' onChange={handleChange} placeholder='Question 3' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set1d}  name='set1d' onChange={handleChange} placeholder='Question 4' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
            </div>
            <div className="mt-4 flex flex-col">
                <h5 className='font-semibold m-1'>Set 2 : </h5>
                <input value={formData.set2a} name='set2a' onChange={handleChange} placeholder='Question 1' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set2b} name='set2b' onChange={handleChange} placeholder='Question 2' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set2c} name='set2c' onChange={handleChange} placeholder='Question 3' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set2d} name='set2d' onChange={handleChange} placeholder='Question 4' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
            </div>
            <div className="mt-4 flex flex-col">
                <h5 className='font-semibold m-1'>Set 3 : </h5>
                <input value={formData.set3a} name='set3a' onChange={handleChange} placeholder='Question 1' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set3b} name='set3b' onChange={handleChange} placeholder='Question 2' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set3c} name='set3c' onChange={handleChange} placeholder='Question 3' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
                <input value={formData.set3d} name='set3d' onChange={handleChange} placeholder='Question 4' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary'/>
            </div>
            <div className="flex items-center justify-center ">
                <button className='bg-success py-3 px-6 rounded-md text-white flex items-center mt-4' type="submit">Update Task</button>
            </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
};

export default SetTask;

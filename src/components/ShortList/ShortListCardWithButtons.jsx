import React from 'react'
import { Link } from 'react-router-dom'
import AppCard from '../Applications/AppCard'
import swal from '@sweetalert/with-react'
import { useEffect, useState } from 'react/cjs/react.development'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import { useHrTasks } from '../../Hooks/hr'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@material-tailwind/react'
import { AssignTaskToUser } from '../../Hooks/user'


const ShortListCardWithButtons = ({user}) => {


    const [formData, setformData] = useState({ 
        q1 : '' ,
        q2 : '' ,
        q3 : '' ,
        q4 : '' ,
     });
     const [time, setTime] = useState(5);
     const [selected, setSelected] = useState(null);
     
     const [hr, setHr] = useState(
        JSON.parse(localStorage.getItem("hrData"))
     );
         
    
      const {data : hrTasks , isLoading } = useHrTasks(hr?.hrDetails?._id)
      const {mutate : assignTaskToUser , isLoading : loading} = AssignTaskToUser()


      useEffect(() => {
      setShowModal(false)
      }, []);
      
    

      useEffect(() => {

      }, [formData]);


      if(loading){
          return <LoadingSpinner />
      }
      

      const handleChange = (e) => {
        e.preventDefault()
        setformData({...formData , [e.target.name] : [e.target.value] })
      }

    const handleTaskSubmit = (e) => {
        e.preventDefault()
        const data = {
          taskQuestions : formData ,
          time,
          userId : user?.applications?.userId,
          jobId : user?.applications?.jobId,
          companyId : hr?.hrDetails?.companyId ,
          submitType : "URL"
        }
        const hrId =  hr?.hrDetails?._id 
        setShowModal(false)
        assignTaskToUser({hrId,data})
    }

    const handleButtonClick= (e , num) => {
        e.preventDefault()
        setSelected(num)
        switch (num) {
            case 1:
                setformData({
                    q1 : hrTasks?.data?.Qset1.q1 ,
                    q2 : hrTasks?.data?.Qset1.q2 ,
                    q3 : hrTasks?.data?.Qset1.q3 ,
                    q4 : hrTasks?.data?.Qset1.q4 
                })                
                break;
            case 2:
                setformData({
                    q1 : hrTasks?.data?.Qset2.q1 ,
                    q2 : hrTasks?.data?.Qset2.q2 ,
                    q3 : hrTasks?.data?.Qset2.q3 ,
                    q4 : hrTasks?.data?.Qset2.q4 
                })                
                break;
            case 3:
                setformData({
                    q1 : hrTasks?.data?.Qset3.q1 ,
                    q2 : hrTasks?.data?.Qset3.q2 ,
                    q3 : hrTasks?.data?.Qset3.q3 ,
                    q4 : hrTasks?.data?.Qset3.q4 
                })                
                break;
            default:
                break;
        }
    }


    const [showModal, setShowModal] = useState(false);


    const handleAssignTask = (e) => {
      e.preventDefault()
      setShowModal(true)
    }
    
    if(isLoading) {
        return <LoadingSpinner />
      }

    return (
        <>
        {
            showModal ? <>
            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Assign task 
                </ModalHeader>
                <ModalBody>
                    <form action="" className='flex flex-col items-center w-full' onSubmit={handleTaskSubmit}>
                    <div className="flex flex-col items-center w-full">
                        <div className="text-center">
                          <h6>Select an Task : </h6>
                            <button onClick={(e) => handleButtonClick(e , 1)} className={`px-5 py-3 m-2 rounded-md ${ selected == 1 ? 'bg-primary text-white' : 'bg-secondary text-black' }`}>1</button>
                            <button onClick={(e) => handleButtonClick(e , 2)} className={`px-5 py-3 m-2 rounded-md ${ selected == 2 ? 'bg-primary text-white' : 'bg-secondary text-black' }`}>2</button>
                            <button onClick={(e) => handleButtonClick(e , 3)} className={`px-5 py-3 m-2 rounded-md ${ selected == 3 ? 'bg-primary text-white' : 'bg-secondary text-black' }`}>3</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <input value={formData.q1} onChange={handleChange} required name='set3a'  placeholder='Question 1' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-96'/>
                        <input value={formData.q2} onChange={handleChange} required name='set3b'  placeholder='Question 2' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-96'/>
                        <input value={formData.q3} onChange={handleChange} required name='set3c'  placeholder='Question 3' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-96'/>
                        <input value={formData.q4} onChange={handleChange} required name='set3d'  placeholder='Question 4' type="text" className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-96'/>
                    </div>
                        <div className="w-full flex flex-col items-center">
                        <div className="w-full mt-3 flex flex-col items-center ">
                            <input onChange={(e) => setTime(e.target.value)} required type="number" min={5}  name='time'  placeholder='Timer in Minutes' className='m-1 text-sm h-14 rounded-md font-light border-none outline-none p-3 bg-secondary w-1/2' />
                        </div>
                            <button type="submit" className='py-2 px-6 rounded-md text-white bg-success mt-4'>Assign Task</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
            </> :   <div className="flex items-center justify-around">
            <AppCard user={user}/>
            <div className="flex flex-col justify-between ">
                <button onClick={(e) => handleAssignTask(e)} className="py-3 px-6 rounded-md text-white bg-primary mb-2">Assign Task </button>
            </div>
        </div>
        }
        </>
    )
}

export default ShortListCardWithButtons


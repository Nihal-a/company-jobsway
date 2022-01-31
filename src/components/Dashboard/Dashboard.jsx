import SideNav from '../UI/Sidenav/SideNav'
import { Link, useLocation,useHistory } from 'react-router-dom'
import {  useCompanyDetails } from '../../Hooks/Company'
import {  useState } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import UnverifiedCompany from './UnverifiedCompany'
import BannedCompany from './BannedCompany'
import Logo from '../UI/Logo/Logo'
import PageHeader from '../UI/Items/PageHeader'
import DashBoardCards from './DashBoardCards'
import TaskCompleteCard from './TaskCompleteCard'
import { useTaskCompletedUsers } from '../../Hooks/user'



function Dashboard() {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const [hr, setHr] = useState(JSON.parse(localStorage.getItem('hrData')))
    const [hstatus, sethstatus] = useState(hr == null ? false : true);
    const { isLoading ,isError , error , data} = useCompanyDetails(company?.company._id || hr?.hrDetails.companyId)
    const {data: taskCompletedData , isLoading : loading} = useTaskCompletedUsers(hr?.hrDetails?._id , hstatus)
    const history = useHistory()
    const location = useLocation()


    if(isLoading || loading){
        return <LoadingSpinner />
    }

    if(isError){
        console.log("Error : ",error);
    }

    const handleReRegister = (e) => {
        e.preventDefault()
        history.push('/reregister' , {reRegister : true})
    }

    console.log(taskCompletedData);
    return (
        <>
        {(data?.data.company.status !== true || data?.data.company.ban == true) && <Logo />}
        {(data?.data.company.status == true && data?.data.company.ban == false) ? null : <h1 className="text-6xl font-semibold mb-5 text-center mt-24">Hey <span className="text-primary">{data?.data.company.companyName},</span></h1>}

        {data?.data.company?.status == true ? 
        data?.data.company.ban ? <div className="flex items-center justify-center mt-10">
            <BannedCompany />
        </div> :
        <>
            <div className="flex">
                <SideNav />
                <div className="w-full">
                <PageHeader name={company ? data?.data?.company.companyName : hr?.hrDetails?.name} desc="Welcome Back!"/>
                <div className="mt-12 px-8 container w-full">
                    {company && <><div className="flex w-full justify-center">
                        <DashBoardCards number={14} data="New Applications" />
                        <DashBoardCards number={7} data="Jobs" />
                    </div>
                    <div className="flex w-full justify-center">
                        <DashBoardCards number={14} data="No. of HR" />
                        <DashBoardCards number={7} data="Jobs" />
                    </div></>}
                    { !company && <div className="mt-10 mb-8">
                        {
                            !taskCompletedData.data.length == 0 ? taskCompletedData.data.map((user) => (
                                <TaskCompleteCard  user={user}/>
                            )) : <></>
                        }
                    </div> }
                </div>
            </div>
            </div>
        </>
        : 
        data?.data.company.status == false ? <UnverifiedCompany /> :  <div className="flex flex-col items-center justify-center"><h2 className="text-2xl mt-4 text-center font-semibold" style={{color:'red'}}>Your Company has been Rejected.</h2>
        <h6 className="text-md">Check the reasons for rejetion and try to re-apply, All the best.</h6>
        <p className="text-center mt-6 text-md font-medium " style={{ color: 'red' }}>Reasons : <br /> {data?.data.company?.reason}</p>
        <Link onClick={handleReRegister} className="underline text-sm mt-8 text-primary ">Re-register company</Link> </div>}
        </>
    )
}

export default Dashboard

import { Route, Switch ,Redirect,useLocation} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect,useState } from "react";
import ReRegister from "./components/Auth/ReRegister";
import Jobs from "./components/Jobs/Jobs";
import Applications from "./components/Applications/Applications";
import Shortlist from "./components/ShortList/Shortlist";
import Profile from "./components/Profile/Profile";
import AddJob from "./components/Jobs/AddJob";
import JobPayment from "./components/Jobs/JobPayment";
import Stripepay from "./components/UI/Stripe/Stripepay";
import EditJobs from "./components/Jobs/EditJobs";
import HrSignUp from "./components/CompanyHr/HrSignUp";
import HrManage from "./components/CompanyHr/HrManage";
import SetTask from "./components/ShortList/SetTask";





const Routed = () => {
  const [company, setCompany] = useState(null)
  const [hrAccount, setHrAccount] = useState(null)
  const [loginTrue, setloginTrue] = useState(false)
  const location = useLocation()

    useEffect(() => {
        setCompany(JSON.parse(localStorage.getItem('company')))
        setHrAccount(JSON.parse(localStorage.getItem('hrData')))
        console.log("readering");
        if(company || hrAccount) {
          setloginTrue(true)
        }else if(company == null || hrAccount == null){
          setloginTrue(false)
        }
    }, [location])

    console.log(loginTrue);
    return (
        <Switch>

          {/* main */}
          <Route exact path="/">
            {loginTrue ? <Dashboard/> : <Redirect to="/login"/>}
          </Route>


          {/* Auth */}
          <Route path="/login">
           {loginTrue ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {loginTrue ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/reregister">
            {(loginTrue && location?.state?.reRegister) ?  <ReRegister /> : <Redirect to="/" />}
          </Route>


          {/* Pages */}
          <Route path="/jobs">
            {loginTrue ?  <Jobs /> : <Redirect to="/login" />}
          </Route>
          <Route path="/applications">
            {loginTrue ?  <Applications /> : <Redirect to="/login" />}
          </Route>
          <Route path="/shortlist">
            {loginTrue ?  <Shortlist /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile">
            {loginTrue ?  <Profile /> : <Redirect to="/login" />}
          </Route>


          {/* Subpages */}
          <Route path="/add-job">
            {loginTrue ?  <AddJob /> : <Redirect to="/login" />}
          </Route>
          <Route path="/edit-job">
            {loginTrue ?  <AddJob /> : <Redirect to="/login" />}
          </Route>
          <Route path="/job-payment">
            {(loginTrue && location?.state?.payment) ?  <JobPayment /> : <Redirect to="/login" />}
          </Route>
          <Route path="/stripe-payment">
            {loginTrue ?  <Stripepay /> : <Redirect to="/login" />}
          </Route>
          <Route path="/editjob/:id">
            {loginTrue ?  <EditJobs /> : <Redirect to="/login" /> }
          </Route>

          {/* Hr Managment */}
          <Route path="/hr-management">
            {loginTrue ?  <HrManage /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/set-task">
            {loginTrue ?  <SetTask /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/hr-signup-page/:token/:hrid">
            {<HrSignUp /> }
          </Route>
        </Switch>
    )
}

export default Routed

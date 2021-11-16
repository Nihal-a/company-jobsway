import { BrowserRouter as Router, Route, Switch ,Redirect,useLocation} from "react-router-dom";
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


const Routed = () => {
  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const location = useLocation()

    useEffect(() => {
        setCompany(JSON.parse(localStorage.getItem('company')))
        console.log(location?.state?.reRegister);
    }, [location])

    return (
        <Switch>

          //Main
          <Route exact path="/">
            {company ? <Dashboard/> : <Redirect to="/login"/>}
          </Route>


          //Auth
          <Route path="/login">
           {company ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {company ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/reregister">
            {(company && location?.state?.reRegister) ?  <ReRegister /> : <Redirect to="/" />}
          </Route>


          //Pages
          <Route path="/jobs">
            {company ?  <Jobs /> : <Redirect to="/login" />}
          </Route>
          <Route path="/applications">
            {company ?  <Applications /> : <Redirect to="/login" />}
          </Route>
          <Route path="/shortlist">
            {company ?  <Shortlist /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile">
            {company ?  <Profile /> : <Redirect to="/login" />}
          </Route>

          //Subpages
          <Route path="/add-job">
            {company ?  <AddJob /> : <Redirect to="/login" />}
          </Route>


        </Switch>
    )
}

export default Routed

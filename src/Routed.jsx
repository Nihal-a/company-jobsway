import { BrowserRouter as Router, Route, Switch ,Redirect,useLocation} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect,useState } from "react";
import ReRegister from "./components/Auth/ReRegister";
import Jobs from "./components/Jobs/Jobs";


const Routed = () => {
  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const location = useLocation()

    useEffect(() => {
        setCompany(JSON.parse(localStorage.getItem('company')))
        console.log(location?.state?.reRegister);
    }, [location])

    return (
        <Switch>
          <Route exact path="/">
            {company ? <Dashboard/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
           {company ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {company ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/jobs">
            {company ?  <Jobs /> : <Redirect to="/login" />}
          </Route>
          <Route path="/reregister">
            {(company && location?.state?.reRegister) ?  <ReRegister /> : <Redirect to="/" />}
          </Route>
        </Switch>
    )
}

export default Routed

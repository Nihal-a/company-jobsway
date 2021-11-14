import { BrowserRouter as Router, Route, Switch ,Redirect,useLocation} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect,useState } from "react";


const Routed = () => {
  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const location = useLocation()

    useEffect(() => {
        setCompany(JSON.parse(localStorage.getItem('company')))
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
        </Switch>
    )
}

export default Routed

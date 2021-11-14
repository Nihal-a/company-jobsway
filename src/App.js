import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import { useEffect,useState } from "react";

function App() {

  const [company, setCompany] = useState(localStorage.getItem('company'))
  const queryClient = new QueryClient('company');



  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            {company ? <Dashboard/> : <Redirect to="/login"/>}
          </Route>
          <Route exact path="/login">
           {company ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register">
            {company ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

import {QueryClientProvider , QueryClient} from "react-query"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard";
function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/login">
            <Dashboard/>
          </Route>
          <Route exact path="/register">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

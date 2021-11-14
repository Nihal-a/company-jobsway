import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { BrowserRouter as Router,useLocation} from "react-router-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import { useState,useEffect } from "react";
import Routed from "./Routed";

function App() {

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
        <Routed/>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

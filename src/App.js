import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Component/Router/Router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect, useState } from "react";
import Window_spinner from "./Component/Pages/Window_spinner/Window_spinner";
const queryClient = new QueryClient()

function App() {
  const [windowSpnr, setWindowSpnr] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWindowSpnr(false)
    }, 2000);
  }, [])

  return (
    <>
      <div className="relative">

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <div><Toaster /></div>
        </QueryClientProvider>

        {windowSpnr && <div className="fixed w-full h-screen top-0 left-0 z-50">
          <Window_spinner />
        </div>}
      </div>

    </>

  );
}

export default App;

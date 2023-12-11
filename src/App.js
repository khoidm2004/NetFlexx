import React, { Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Loading from "./Component/Loading/Loading";

const Route1 = React.lazy(() => import("./Component/Route/Route"));
const Footer1 = React.lazy(() => import("./Component/Footer/Footer"));
const Navbar1 = React.lazy(() => import("./Component/Navbar/Navbar"));

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <div className="navbar">
          <Navbar1 />
        </div>
        <Route1 />
        <Footer1 />
        <ToastContainer />
      </Suspense>
    </div>
  );
};

export default App;

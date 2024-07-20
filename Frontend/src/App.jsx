import React from "react";
import Home from "./components/homePage/Home";
import { Navigate,Route, Routes } from "react-router-dom";
import Courses from "./coursesRepo/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Instruct from "./components/Instruct";
import {Toaster} from "react-hot-toast";
import {useAuth} from  "./context/AuthProvider";

const App = () => {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-cyan-950 dark:text-stone-400'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser?<Courses />: <Navigate to="/instruct"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/instruct" element={!authUser?<Instruct/>:<Navigate to="/courses"/>} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
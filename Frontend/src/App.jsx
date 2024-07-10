import React from "react";
import Home from "./components/homePage/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./coursesRepo/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className='dark:bg-cyan-950 dark:text-stone-400'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
// import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
<<<<<<< HEAD
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Dashboard />
      {/* <Router>
        {/* <ComingSoon /> 

=======
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Router>
        {/* <ComingSoon /> */}
>>>>>>> fd099b268c66ccb3ca1bbc0248d93ae10e30afb9
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
<<<<<<< HEAD
      </Router> */}
    </>
=======
      </Router>
    </div>
>>>>>>> fd099b268c66ccb3ca1bbc0248d93ae10e30afb9
  );
}

export default App;

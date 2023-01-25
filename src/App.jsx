import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <ComingSoon />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

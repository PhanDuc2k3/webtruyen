import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Sử dụng BrowserRouter
import Home from "../pages/Homes/Home";
import Layout from "../components/LayoutComponent/LayoutComponent";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;

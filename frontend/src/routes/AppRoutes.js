import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Sử dụng BrowserRouter
import Home from "../pages/Homes/Home";
import Layout from "../components/LayoutComponent/LayoutComponent";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Sử dụng BrowserRouter
import Home from "../pages/Homes/Home";
import Layout from "../components/LayoutComponent/LayoutComponent";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MangaPage from "../pages/MangaPage/MangaPage";
import ManhwaPage from "../pages/ManhwaPage/ManhwaPage";
import ManhuaPage from "../pages/Manhua.page/ManhuaPage";
const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mangaPage" element={<MangaPage />} />
          <Route path="/manhwaPage" element={<ManhwaPage />} />
          <Route path="/manhuaPage" element={<ManhuaPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;

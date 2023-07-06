import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import SelectedPage from "../pages/SelectedPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/selected" element={<SelectedPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;

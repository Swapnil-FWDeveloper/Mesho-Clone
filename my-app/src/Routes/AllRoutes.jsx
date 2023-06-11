import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import WomenEthnic from "../Pages/WomenEthnic";
import Western from "../Pages/Western";
import Men from "../Pages/Men";
import Kids from "../Pages/Kids";
import HomeKitchen from "../Pages/HomeKitchen";
import BeautyHelth from "../Pages/BeautyHelth";
import JwelleryAccessories from "../Pages/JwelleryAccessories";
import Electronics from "../Pages/Electronics";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Cart from "../Pages/Cart";
import SingleProductPage from "../Pages/SingleProductPage";
import Errorpage from "../Pages/Errorpage";
import Privateroutes from "./Privateroutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/WomenEthnic" element={<WomenEthnic />} />
      <Route path="/element" element={<Western />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/HomeKitchen" element={<HomeKitchen />} />
      <Route path="/BeautyHelth" element={<BeautyHelth />} />
      <Route path="/JwelleryAccessories" element={<JwelleryAccessories />} />
      <Route path="/BarProp" element={<BarProp />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/SingleProductPage" element={<SingleProductPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default AllRoutes;

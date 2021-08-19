import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SiteBanner from "./components/SiteBanner";


export default function App() {

  return (
    <div>
      <Navbar/>
      <SiteBanner/>
      <Products/>
    </div>
  );
}

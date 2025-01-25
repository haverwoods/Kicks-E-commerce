// import { useState } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Listingpage from "./pages/listingpage";
import Sidebar from "./component/sidebar/sidebar";
import Productpage from "./pages/productpage";


function App() {

  return (
   <div>
    <div className="bg-stone-200 min-h-screen">
  <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/landingpage" element={<Landingpage/>}/>
      <Route path="/listingpage" element={<Listingpage/>}/>   
      <Route path="/Productpage" element={<Productpage/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/> 
  </Routes>
    </div>
   </div>
    
  );
}

export default App;

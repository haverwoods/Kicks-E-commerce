// import { useState } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";


function App() {

  return (
   <div>
  <Routes>
      <Route path="/" element={<Landingpage/>}/>
 
  </Routes>
   </div>
    
  );
}

export default App;

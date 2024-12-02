import { useState } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Card from "./component/card";

function App() {

  return (
   <div>
  <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/card" element={<Card/>}/>
  </Routes>
   </div>
    
  );
}

export default App;

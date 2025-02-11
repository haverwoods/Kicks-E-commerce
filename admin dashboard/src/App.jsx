import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Sidebars from "./component/sidebar/sidebars";

const App = () => {
  return (
    <div>
      <div className="className= bg-[#181818]">

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebars />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;

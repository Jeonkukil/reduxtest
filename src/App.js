import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AAAA from "./screen/AAAA";
import BBBB from "./screen/BBBB";
import CCCC from "./screen/CCCC";
import DDDD from "./screen/DDDD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AAAA />}></Route>
        <Route path="/b-page" element={<BBBB></BBBB>} />
        <Route path="/c-page" element={<CCCC></CCCC>} />
        <Route path="/d-page" element={<DDDD></DDDD>} />
      </Routes>
    </Router>
  );
}

export default App;

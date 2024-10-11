import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from "./components/start";
import Predict from "./components/predict";


function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Predict" element={<Predict />} />
    </Routes>
    </Router>     
    </div>
  );
}

export default App;

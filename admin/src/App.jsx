import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
// import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;

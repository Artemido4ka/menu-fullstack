import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Products from "./pages/Products";
// import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route exact path="/orders" element={<Orders />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;

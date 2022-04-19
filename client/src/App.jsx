import { Routes, Route } from "react-router-dom";

import "./App.css";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product/Product";
import Register from "./pages/Register";
import Order from "./pages/Order/Order";
import User from "./pages/User";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;

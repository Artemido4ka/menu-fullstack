import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Order from "./pages/Order";

const App = () => {
  const { isFetching, error, user } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route
        exact
        path="/"
        element={<ProtectedRoute user={user} component={<Home />} />}
      />
      <Route
        exact
        path="/products"
        element={<ProtectedRoute user={user} component={<Products />} />}
      />
      <Route
        path="/products/:id"
        element={<ProtectedRoute user={user} component={<Product />} />}
      />
      <Route
        exact
        path="/orders"
        element={<ProtectedRoute user={user} component={<Orders />} />}
      />
      <Route
        path="/orders/:id"
        element={<ProtectedRoute user={user} component={<Order />} />}
      />
    </Routes>
  );
};

export default App;

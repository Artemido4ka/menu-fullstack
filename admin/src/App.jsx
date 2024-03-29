import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Order from "./pages/Order";

import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import User from "./pages/User";
import AllUsers from "./pages/AllUsers";
import { useEffect } from "react";
import { fetchIsUserLoggedIn } from "./redux/apiCalls/auth.api";
import SubUser from "./pages/SubUser";

const App = () => {
  const { isFetching, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchIsUserLoggedIn(dispatch);
  }, [dispatch]);

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
        exact
        path="/products/new"
        element={<ProtectedRoute user={user} component={<CreateProduct />} />}
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

      <Route
        path="/users/:id"
        element={<ProtectedRoute user={user} component={<User />} />}
      />
      <Route
        path="/users"
        element={<ProtectedRoute user={user} component={<AllUsers />} />}
      />

      <Route
        path="/subUser/:id"
        element={<ProtectedRoute user={user} component={<SubUser />} />}
      />
    </Routes>
  );
};

export default App;

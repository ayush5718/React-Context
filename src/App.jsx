import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import UserPage from "./pages/UserPage";
import UserDetails from "./pages/UserDetails";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<UserPage />} />
        {/* making a dynamic routing for a user to get the specific user details from their id */}
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App;

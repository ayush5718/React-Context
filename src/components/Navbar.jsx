import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ data }) {
  return (
    <>
      <nav className="flex justify-center gap-10 p-4 bg-zinc-100">
        <NavLink
          to="/"
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/user"
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
        >
          Users List
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;

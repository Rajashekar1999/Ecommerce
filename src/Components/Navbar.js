import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import logo from "../pictures/logo.png";

export default function Navbar() {
  const Cart = useSelector((state) => state.reducer.cart);

  const navigate = useNavigate();
  useEffect(() => {
    console.log("hii");
  }, [Cart]);

  return (
    <div className="nav-bar">
      <NavLink to="/home">
        <div className="nav-logo">
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "orange" }}>
            Dailyby
          </p>
        </div>
      </NavLink>
      <div className="nav-links">
        <div className="navlink-container" style={{ fontWeight: "500" }}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Orders
          </NavLink>
        </div>
      </div>
      <div className="nav-cart">
        <button onClick={() => navigate("/cart")}>
          <p className="cart-count">{Cart.length}</p>
          <span className="cart-icon">
            <BsCart />
          </span>
        </button>
      </div>
    </div>
  );
}

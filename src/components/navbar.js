import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Cart from "../asset/svg/grocery-15.svg";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);
  function toggleHamburger() {
    sethamburgerOpen(!hamburgerOpen);
  }
  useEffect(() => {
    console.log(hamburgerOpen);
  });
  return (
    <nav>
      <div className="brand-title">
        <Link to="/" className="links">
          Home's Good
        </Link>
      </div>

      <button className="nav-hamburger" onClick={toggleHamburger}>
        <FaBars className="fabars" />
      </button>
      <ul className={`nav-ul ${hamburgerOpen ? "showLinks" : ""}`}>
        <li>
          <Link to="/" className="links">
            Category
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
      </ul>

      <div className="snipcart-checkout cart">
        <Cart className="cart-svg" />
        <span className="snipcart-summary">
          <span className="snipcart-items-count"></span>
        </span>
      </div>
    </nav>
  );
}

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../style/global.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

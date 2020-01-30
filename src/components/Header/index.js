import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <span className="logo">Google Fonts</span>
      <ul>
        <i className="fas fa-bars" />
        <span className="nav-title">
          <li className="active">Catalog</li>
          <li>Featured</li>
          <li>Articles</li>
          <li>About</li>
        </span>
      </ul>
    </nav>
  );
};

export default Header;

import React from "react";


const Header = () => {
  return (
    <header
      style={{ height: "15vh" }}
      className="d-flex  bg-primary justify-content-between align-items-center p-4"
    >
      <span>React Shop</span>
      <nav className="d-flex align-items-center gap-5">
        <a href="#">About</a>
        <a href="#">Series</a>
      </nav>
    </header>
  );
};

export default Header;

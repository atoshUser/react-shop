import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <span>React Shop</span>
      <nav className="d-flex align-items-center gap-5">
        <a href="#">About</a>
        <a href="#">Series</a>
      </nav>
    </header>
  );
};

export default Header;

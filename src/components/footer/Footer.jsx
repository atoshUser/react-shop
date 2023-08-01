import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ height: "15vh" }}
      className="d-flex p-4 bg-primary justify-content-between align-items-center"
    >
      <span>{new Date().getFullYear()} @copyright</span>
      <h3>Repo</h3>
    </footer>
  );
};

export default Footer;

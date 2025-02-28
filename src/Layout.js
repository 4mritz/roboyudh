import React from "react";
import "./Layout.css"; // Create this file

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;

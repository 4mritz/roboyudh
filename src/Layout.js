import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Home/navbar";
import Footer from "./Home/footer";
import "./App.css"; // Import styles

const Layout = () => {
    return (
        <div className="layout">
            <Navbar /> {/* ✅ Navbar is displayed */}
            <div className="content">
                <Outlet /> {/* ✅ This must be here to show page content */}
            </div>
            <Footer /> {/* ✅ Footer is displayed */}
        </div>
    );
};

export default Layout;

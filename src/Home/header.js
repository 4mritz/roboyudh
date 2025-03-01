import React from 'react';
import Navbar from './navbar'; // Import Navbar component
import '../App.css'; 

const Header = () => {
    return (
        <div className="header">
            <Navbar /> {/* Navbar now separate */}
            <div className="text">
                <h1>SATHYABAMA</h1>
                <p>INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p>(DEEMED TO BE UNIVERSITY)</p>
                <h3>Category 1 University By UGC</h3>
                <h3>ACCREDITED WITH GRADE "A++" BY NAAC | APPROVED BY AICTE</h3>
                <br /><br /><br /><br />
                <h2>SCHOOL OF COMPUTING</h2>
                <h2>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
                <p>(SPECIALIZATION IN ARTIFICIAL INTELLIGENCE AND ROBOTICS)</p>
                <p>PRESENTS</p>
            </div>
            <div className="imgs1">
                <img src="/sathyabamalogo-Photoroom.png" className="logo1" alt="Sathyabama Logo" width="100" height="100" />
                <img src="/naac-Photoroom.png" className="logo2" alt="NAAC" width="100" height="80" />
                <img src="/otherlogos-Photoroom.png" className="logo3" alt="Other Logos" />
                <h1>ROBO YUDH</h1>
                <h3>On 27 & 28 March, 2025</h3>
            </div>
        </div>
    );
};

export default Header;

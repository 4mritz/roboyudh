import React, { useEffect } from "react";
import "./LoadingScreen.css"; // Import CSS for full-screen loading effect
import RobotClashLoader from "./RobotClashLoader"; // Your animation component

const LoadingScreen = () => {
  useEffect(() => {
    // Redirect to Unstop after 4 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://unstop.com/p/robo-wars-sathyabama-university-1415219?lb=HYHZmLEj&utm_medium=Share&utm_source=shortUrl";
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="loading-screen">
      <RobotClashLoader /> {/* Your animation component */}
    </div>
  );
};

export default LoadingScreen;

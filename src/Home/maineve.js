// src/MainEvent.js
import React, { useEffect } from 'react';
import '../App.css'; // Import CSS styles

const MainEvent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight * 0.8; // 80% of viewport height

            // Elements to animate
            const elementsToCheck = ['.listy', '.listy2', '.text-container', '.chan', '.pat', '.conn', '.fac', '.std'];

            elementsToCheck.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;

                    if (elementTop < triggerBottom) {
                        el.classList.add('visible');
                    } else {
                        el.classList.remove('visible');
                    }
                });
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once to check already visible elements
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // This component is only for applying effects, it does not render UI
};

export default MainEvent;

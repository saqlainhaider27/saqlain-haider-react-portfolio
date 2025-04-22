import React from 'react';
import FarmDogBingo from './FarmDogBingo';
import ParkItUp from './ParkItUp';
import './Portfolio.css'; // We'll use this for styling

const Portfolio = () => {
    return (
        <div>
            <div className="gradient-line"></div> {/* The moving gradient line */}
            <div className="title-text">
                <h1>Portfolio</h1>
            </div>
            <div className="portfolio-container">
                <FarmDogBingo />
                <ParkItUp />
            </div>
        </div>
    );
};

export default Portfolio;

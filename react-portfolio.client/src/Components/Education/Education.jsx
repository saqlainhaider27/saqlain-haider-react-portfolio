import React from 'react';
import EducationTimeline from './EducationTimeline'; // Adjust path if needed

const Education = () => {
    return (
        <div className="min-h-screen bg-black text-white py-10 px-5">
            <div className="gradient-line"></div>
            <div className="title-text text-center mb-10">
                <h1 className="text-4xl font-bold text-green-400">Education</h1>
            </div>
            <div className="education-container">
                <EducationTimeline />
            </div>
        </div>
    );
};

export default Education;

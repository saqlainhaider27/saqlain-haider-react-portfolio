import React from "react";
import "./EducationTimeline.css"; // make sure this CSS file is imported

const EducationTimeline = () => {
    const timelineData = [
        {
            date: "2020-2021",
            title: "O Levels",
            text: "From: LGS in 8 Subjects ",
        },
        {
            date: "2023-2024",
            title: "A Levels",
            text: "From: LGS in 3 Subjects",
        },
        {
            date: "2024-2028",
            title: "BSSE (Bachelor of Science in Software Engineering)",
            text: "From: COMSATS University Islamabad",
        },
    ];

    return (
        <div className="timeline">
            {timelineData.map((item, index) => (
                <div
                    key={index}
                    className={`container ${index % 2 === 0 ? "left" : "right"}`}
                >
                    <div className="date">{item.date}</div>
                    <i className={`icon fa ${item.icon}`}></i>
                    <div className="content">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationTimeline;

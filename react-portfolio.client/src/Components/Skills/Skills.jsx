import React from 'react';
import styled, { keyframes } from 'styled-components';
import unityLogo from '../../assets/logos/unity.png';
import csharpLogo from '../../assets/logos/csharp.png';
import cppLogo from '../../assets/logos/cpp.png';
import cLogo from '../../assets/logos/c.png';
import javaLogo from '../../assets/logos/java.png';
import openglLogo from '../../assets/logos/opengl.png';
import gitLogo from '../../assets/logos/git.png';

const Skills = () => {
    const skills = [
        { logo: unityLogo, level: 80 },
        { logo: csharpLogo, level: 80 },
        { logo: cppLogo, level: 50 },
        { logo: cLogo, level: 50 },
        { logo: javaLogo, level: 70 },
        { logo: openglLogo, level: 60 },
        { logo: gitLogo, level: 70 }
    ];

    return (
        <StyledWrapper>
            <div className="separator" />
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="logo-container">
                            <img src={skill.logo} alt="skill-logo" className="skill-logo" />
                        </div>
                        <div className="progress-wrapper">
                            <div className="progress-container">
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${skill.level}%`,
                                        height: '100%',
                                        backgroundColor: '#2ecc71',
                                        borderRadius: '7.5px',
                                    }}
                                />
                                <span className="progress-text">{skill.level}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </StyledWrapper>
    );
};

const moveGradient = keyframes`
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
`;

const slideIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const StyledWrapper = styled.div`
    
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .separator {
        width: 80%;
        height: 5px;
        background: linear-gradient(90deg, #32cd32, #00ff00, #32cd32);
        background-size: 200% 100%;
        animation: ${moveGradient} 2s linear infinite;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .skills-title {
        text-align: center;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 3rem;
    }

    .skills-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        width: 80%;
        margin-bottom: 8rem; /* Added margin below the skills container */
    }

    .skill-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: ${slideIn} 0.6s ease both;
        width: 100%;
        justify-content: center;
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skill-logo {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-bottom: 0;
    }

    .progress-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progress-container {
        position: relative;
        width: 80%;
        height: 15px;
        background-color: #ddd;
        border-radius: 7.5px;
        overflow: hidden;
    }

    .progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
        color: black;
        font-weight: bold;
    }
`;

export default Skills;
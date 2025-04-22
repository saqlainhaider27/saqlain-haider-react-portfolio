import React from 'react';
import './Header.css';
import Image from '../../assets/blank-profile.png';
import DownloadButton from './DownloadButton'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-image">
                    <div className="header-image-inner">
                        <img src={Image} alt="Profile" />
                    </div>
                </div>
                <h1>Hi, I'm Saqlain Haider</h1>
                <div className="header-text">
                    <p>I'm a Unity Developer based in Pakistan.</p>
                </div>
                <div className = "info-text">
                    <p>With more than 3 years of hands-on experience in game development in Unity with C#, I have developed diverse self-initiated projects that demonstrate my enthusiasm for game-based experiences and gameplay systems. My background in graphics programming is solid, and I keep broadening my horizon by learning about low-level rendering APIs like OpenGL and DirectX. My areas of interest include creating immersive games, performance optimization, and ongoing learning to explore the limits of real-time graphics and interactivity.</p>
                </div>
                <div>
                    <DownloadButton />
                </div>
            </div>
        </div>
    );
};

export default Header;

import React from 'react';
import './Navbar.css';
import ConnectButton from './ConnectButton';

const Navbar = () => {

    // Function to handle scrolling
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleConnectClick = () => {
        window.location.href = "mailto:saqlainhaider2700@gmail.com?subject=Let's Connect&body=Hi Saqlain,";

    };

    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('education')}>Education</li>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                {/*<li onClick={() => scrollToSection('experience')}>Experience</li>*/}
            </ul>
            <div>
                <ConnectButton onClick={handleConnectClick} />
            </div>
        </div>
    );
};

export default Navbar;

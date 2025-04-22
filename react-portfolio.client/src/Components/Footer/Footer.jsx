import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>© 2025 Saqlain Haider. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/saqlainhaider27" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/saqlain-haider-486b19348/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:saqlainhaider2700@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

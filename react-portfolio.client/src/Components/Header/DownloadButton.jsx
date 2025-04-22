import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const fileUrl = '../../assets/YourCV.pdf'; // Replace this with the path to your file
    const fileName = 'YourCV.pdf'; // Replace this with the file name

    return (
        <StyledWrapper>
            <a href={fileUrl} download={fileName}>
                <button className="cssbuttons-io-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" />
                    </svg>
                    <span>Download CV</span>
                </button>
            </a>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  margin-top: 20px;

  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit button text color */
  }

  .cssbuttons-io-button {
    display: flex;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.5em 0.8em 1.2em;
    color: #0f0f0f;
    background: linear-gradient(135deg, #00ff88 0%, #a6ff00 100%);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em rgba(0, 255, 136, 0.5);
    letter-spacing: 0.05em;
    border-radius: 20em;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
  }

  .cssbuttons-io-button svg {
    margin-right: 8px;
    fill: #0f0f0f;
  }

  .cssbuttons-io-button:hover {
    box-shadow: 0 0.5em 1.5em -0.2em rgba(166, 255, 0, 0.6);
    transform: scale(1.03);
  }

  .cssbuttons-io-button:active {
    box-shadow: 0 0.3em 1em -0.3em rgba(0, 255, 136, 0.5);
    transform: scale(0.97);
  }
`;

export default Button;

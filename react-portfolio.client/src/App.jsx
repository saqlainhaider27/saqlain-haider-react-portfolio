import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Education from './Components/Education/Education.jsx';
import Footer from './Components/Footer/Footer.jsx';
const App = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <Header />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Portfolio />
            </section>
            {/*<section id="experience">*/}
            {/*    <div style={{ minHeight: '100vh', padding: '4rem', textAlign: 'center', backgroundColor: '#111', color: 'white' }}>*/}
            {/*        <h1>Experience</h1>*/}
            {/*        <p>This is the experience section. Add your content here.</p>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Footer/>
        </div>
    );
};

export default App;

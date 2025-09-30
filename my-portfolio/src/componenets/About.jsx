//About.jsx
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">

                        <h2 className="section-title">
                            <h2 className="section-title">
                                <FontAwesomeIcon icon={faUser} 
                                className="d-block mx-auto mb-2 text-primary" size="3x" />
                            </h2>
                        </h2>
                    </div>
                    <p className="section-description mt-4">
                        I am a React.js developer who started training via 
                        an Internship in  2024  for 1 month and then continued 
                        to do self projects. 

                        I have a Ruby on Rails experience for some projects since I 
                        finished a Training program in 2020. 
                        
                        My skills include technologies such as HTML, CSS, JavaScript, 
                        Bootstrap, React.Js, and Ruby on Rails. 
                        
                        My best website till now is "Devabollators" which was built
                        upon a real-time open source project but I elaborated more
                        on its features to include a learning program for developers to
                        start learning ReactJS/Ruby on Rails from Scratch via Teams 
                        and a free mentorship.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
import React from "react";
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import './Footer.css';

const Footer=()=> {

    return(

        <footer className="footer">

            <div className="footer-section">
                <h3>Contact Us</h3>
                <p><FaMapMarkedAlt/> Location</p>
                <p><FaPhone/>Call +91 1234567890</p>
                <p><FaEnvelope/>xyz@gmail.com</p>
            </div>


            <div className="footer-section">
                <h3>Food Palace</h3>
                <p>ddffggttyuuiikkmnnhhggffdsefcujj</p>
            </div>

                <div className="social-icons">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaInstagram/>
                </div>


                <div className="footer-section">
                    <h3>Opening Hours</h3>
                    <p>Everyday</p>
                    <p>10:00 AM_10:00 PM </p>

                </div>

                <div className="footer-bottom">
                    <p>@ 2025 All right Reserved Vy Free Shubham</p>
                    <p>@ distributed by Shubham</p>
                </div>

        </footer>
    );
};

export default Footer;
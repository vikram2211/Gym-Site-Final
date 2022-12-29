import React from 'react';
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
const year = new Date().getFullYear()

    return (
        <footer className='footer' data-aos="fade-up" data-aos-duration="2000">
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer_box'>
                        <div className='logo'>
                            <div className='logo_img'>
                                <img src={logo} alt='' />
                            </div>
                            <h2>fitBody</h2>
                        </div>
                        <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                    </div>
                    <div className='footer_box'>
                        <h4 className='footer_title'>Company</h4>
                        <ul className='footer_links'>
                            <li><a href='#'>Our Programe</a></li>
                            <li><a href='#'></a>Our Plans</li>
                            <li><a href='#'></a>Become A Member</li>
                        </ul>
                    </div>
                    <div className='footer_box'>
                        <h4 className='footer_title'>Quick Links</h4>
                        <ul className='footer_links'>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'></a>Contact Us</li>
                            <li><a href='#'></a>Support</li>
                        </ul>
                    </div>
                    <div className='footer_box'>
                        <h4 className='footer_title'>Quick Links</h4>
                        <ul className='footer_links'>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'></a>Contact Us</li>
                            <li><a href='#'></a>Support</li>
                        </ul>
                    </div>
                </div>
                <p className='copyright'>Copyrights-{year} developed by Vikram. All rights are reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
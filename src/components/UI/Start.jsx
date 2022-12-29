import React from 'react';
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png"

const Start = () => {
    return (
        <section id='classes'>
            <div className='container'>
                <div className='start_wrapper'>
                    <div className='start_img'>
                        <img src={trainerImg} alt=''  data-aos="fade-left" data-aos-duration="1500"/>
                    </div>
                    <div className='start_content'  data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='section_title'>
                            Ready To Make <span className='highlights'>Change?</span>
                        </h2>
                        <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                        <button className='register_btn'>Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Start
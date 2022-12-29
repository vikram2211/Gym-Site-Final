import React from 'react';
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';

const Exercises = () => {
    return (
        <section id='schedule'>
            <div className='container exercise_container' >
                <div className='exercise_top'>
                    <h2 className='section_title'>Benifits of <span className='highlights'>exercise</span>

                    </h2>
                    <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.<br /> But if you are like many Americans, you are busy, you have a sedentary job, and you haven't yet changed your exercise habits</p>
                </div>

                <div className='exercise_wrapper'>
                    <div className='extercise_item' data-aos="zoom-in" data-aos-duration="1500">
                        <span className='exercise_icon'><img src={lunges} alt='' />
                        </span>

                        <div className='exercise_content'>
                            <h4>Healthy Lifestyle</h4>
                            <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                        </div>

                    </div>

                    <div className='extercise_item'  data-aos="zoom-in" data-aos-duration="1500">
                        <span className='exercise_icon'><img src={yoga} alt='' />
                        </span>

                        <div className='exercise_content'>
                            <h4>Increased Flexibility</h4>
                            <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                        </div>

                    </div>

                    <div className='extercise_item'  data-aos="zoom-in" data-aos-duration="1500">
                        <span className='exercise_icon'><img src={extended} alt='' />
                        </span>

                        <div className='exercise_content'>
                            <h4>Reducing Bood Pressure</h4>
                            <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Exercises;
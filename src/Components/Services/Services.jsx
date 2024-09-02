import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My services</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="service-container">
                {Services_Data.map((Service, index) => {
                    return (
                        <div key={index} className="service-format">
                            <h3>{Service.s_no}</h3>
                            <h2>{Service.s_name}</h2>
                            <p>{Service.s_desc}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="Arrow Icon" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;

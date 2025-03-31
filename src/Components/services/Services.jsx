import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div 
      id='services' 
      className='services'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="services-title">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          My Projects
        </motion.h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <motion.a 
              href={service.s_link} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='services-link'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <motion.div 
                  className='services-readmore'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <p>Take a Look</p>
                  <img src={arrow_icon} alt="" />
                </motion.div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
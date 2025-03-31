import React from 'react';
import './about.css';
import profile_Img from '../../assets/profile_Img2.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      id='about' 
      className='about'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="about-title">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h1>
      </div>
      <div className="about-sections">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <img src={profile_Img} alt="" />
        </motion.div>
        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className="about-para">
            <p> An aspiring IT student who overcame financial challenges and worked hard to earn enough to put himself through school. Currently working remotely from the Philippines as an administrative assistant, striving to balance work, life, and studies.</p>
            <p>Passionate about learning, exploring new technologies, and collaborating on exciting projects. Aspires to become a skilled software developer, contribute to innovative tech solutions, and eventually mentor and support others in the field.</p>              
          </div>
          <div className="about-skills">
            <motion.div className="about-skill" whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1 }} viewport={{ once: false }}>
              <p>HTML & CSS</p><hr style={{width:"30%"}}/>
            </motion.div>
            <motion.div className="about-skill" whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1 }} viewport={{ once: false }}>
              <p>React JS</p><hr style={{width:"15%"}}/>
            </motion.div>
            <motion.div className="about-skill" whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1 }} viewport={{ once: false }}>
              <p>JavaScript</p><hr style={{width:"10%"}}/>
            </motion.div>
            <motion.div className="about-skill" whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1 }} viewport={{ once: false }}>
              <p>MERN Stack</p><hr style={{width:"20%"}}/>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="about-achievements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="about-achievement">
          <h1>10+</h1>
          <p>months of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>New Topics Learned</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

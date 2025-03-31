import React from 'react';
import './Hero.css';
import profile_Img from '../../assets/profile_Img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      id='home' 
      className='hero' 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    > 
      <motion.img 
        src={profile_Img} 
        alt="Profile" 
        className="profile-pic"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      />
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false }}
      >
        <span>I'm Adriane Leberiaga,</span> Virtual Assistant based in the Philippines
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: false }}
      >
        Adriane is just new to this industry with 5 years of experience in BPO. I have handled various administrative tasks such as taking inbound calls, making outbound calls, scheduling, customer service, sales, tech support, email, and chat. I have excellent multi-tasking skills and can work in any time zone.
      </motion.p>
      <motion.div 
        className="hero-action"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: false }}
      >
        <motion.div 
          className="hero-connect"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </motion.div>
        <motion.div 
          className="hero-resume"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a 
            href="https://docs.google.com/document/d/1-v2z1jbkuDdnZcNRrd4A2l77zQ9z5E8y/edit?usp=sharing&ouid=116917566031891326633&rtpof=true&sd=true" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

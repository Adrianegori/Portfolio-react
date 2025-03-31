import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import facebook_icon from '../../assets/facebook.svg';
import instagram_icon from '../../assets/instagram.svg';

const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9b53804e-96e6-40f0-bc32-59148832c870");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects. As someone new to the industry, I'm eager to gain experience and build my portfolio. I'm willing to work for lower pay in exchange for opportunities to learn and grow. If you need a dedicated web developer to bring your ideas to life, feel free to reach out!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>adriane_leberiaga06@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+63 993 9217 727</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Iloilo, Philippines</p>
                </div>
            </div>
            <div className="contact-social-media">
                <a href="https://www.facebook.com/aleberiaga/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook_icon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/adriane_gori/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
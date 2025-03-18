import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageImage from "../Assets/right_img.png"; 
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ContactForm = () => {
   const isInView = useScrollAnimation(100);
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Apply fade-in effect when in view
        transition={{ duration: 1 }}
      >
        
    <div className='contact-section'>
    <h1> let's collaborate on something <span className='intro'>extraordinary</span></h1>
    <div className=" border-container">
      <div className="row">
        <div className="col-md-6">
          
          <form>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label text-white text-start">Fullname</label>
              <input type="text" className="form-control" id="fullname" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white text-start">Your email</label>
              <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-white text-start">Your message (I will respond via your email)</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={MessageImage} alt="Message Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
     </motion.div>
  );
};

export default ContactForm;

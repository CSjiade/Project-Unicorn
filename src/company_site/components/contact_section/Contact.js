import React, { useState, useEffect } from "react";
import "./Contact.css";
// import { db } from "../firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  
  var isValidate = true;  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);




  const initialValues = { name: "", email: "", message: "",};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const notifyToastMessage = () => {
    toast.success('Message successfully sent!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
    // alert("Your message has been submitted👍");

    // db.collection("contacts")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Your message has been submitted👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    if(isValidate) {
        setFormValues(initialValues)
        notifyToastMessage()
    }

  
  };



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
      isValidate = false; 
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid valid email format!";
      isValidate = false; 
    }
    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.trim().split(' ').length > 10 ) {
      errors.message = "Kindly keep message length to within 500 words";
      isValidate = false; 
    } 
    return errors;
   
  };

  return (
    <div className="body">
    <div className="aaa">

    
    <form className="form" onSubmit={handleSubmit}>
    <div className="title">
        <h2>Contact Us</h2>
      </div>

      <div className="half">

        <div className="item">
            <label>Name</label>
            <input 
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            />
             <p>{formErrors.name}</p>
        </div>
        
    <div className="item">
        <label>Email</label>
         <input
        type="text"
        name="email" 
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
      />
       <p>{formErrors.email}</p>
      </div>
     
    </div>


    <div className="full">

      <label>Message</label>
      <textarea
        type="text"
        name="message" 
        placeholder="Message"
        value={formValues.message}
        onChange={handleChange}
      ></textarea>
       <p>{formErrors.message}</p>
    </div>
   

      <div className="action">
      <button
        type="submit"
      
      >
        Submit
      </button>

      </div>
    </form>

    </div>


    <div className="gmap">
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.822452759223!2d103.85200711475392!3d1.28017959906628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190fcb89f33f%3A0x8b97dd9310acdb0b!2sThe%20Executive%20Centre%20-%20Marina%20Bay%20Financial%20Centre%20Tower%201!5e0!3m2!1sen!2ssg!4v1686763629252!5m2!1sen!2ssg"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />


    </div>






    

    <ToastContainer/>
    </div>
    
  );
};



export default Contact;







import React, { useState } from "react";
import './Contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        alert("Message Sent!");
    };

    return (
        <section className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to help. Reach out for inquiries or support!</p>
            </div>

            <div className="contact-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Our Contact Information</h2>
                    <ul>
                        <li><strong>Phone:</strong>+91 9347159594</li>
                        <li><strong>Email:</strong> punjajagannath51@gmail.com</li>
                        <li><strong>Address:</strong> 123 Cinema Street, Film City, FC 56789</li>
                    </ul>
                    <div id="map">
                    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.869110474774!2d77.61304407380925!3d12.916133016094523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fb12ef8b81%3A0xf064c4524732d374!2sBesant%20Technologies!5e0!3m2!1sen!2sin!4v1741755080239!5m2!1sen!2sin"
          width="100%"
          height="300"
        ></iframe>
                      </div> 
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

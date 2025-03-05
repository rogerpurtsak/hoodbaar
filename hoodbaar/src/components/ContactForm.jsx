import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert("✅ Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert(`❌ Failed to send message: ${data.error}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Something went wrong. Please try again.");
        }
    };
    

    return (
        <div className="contact-container">

            <div className="contact-info">
                <h2>Got a Question? Let’s Chat Over a Cocktail!</h2>
                <p>It's time to create something great and audible together!</p>
                <div className="contact-details">
                    <p>📧 <a href="mailto:huudbaar@gmail.com">huudbaar@gmail.com</a></p>
                    <p>☎️ <a href="tel:+37258364966">+372 5836 4966</a></p>
                </div>
            </div>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                    <button type="submit">Submit a request</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

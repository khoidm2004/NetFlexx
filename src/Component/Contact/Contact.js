import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleButtonClick = () => {
    toast.success("Message sent!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container_contact">
        <div className="row">
          <div className="left_row">
            <h1>Contact us</h1>
            <p>
              <FaPaperPlane />
              NetFlexx@info.com
            </p>
            <p>
              <FaPhone />
              1900 8910
            </p>
            <div className="social_icons">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="right_row">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <textarea
                placeholder="Your message"
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

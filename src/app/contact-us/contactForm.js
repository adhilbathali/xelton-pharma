"use client";
import React, { useState } from "react";
import "./contactForm.css";
import PhoneInput from "./phoneInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: { country: "", number: "" },
    representType: "Individual",
    representName: "",
    query: "",
  });

  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phoneData) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: {
        country: phoneData.country,
        number: phoneData.number,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setMessage("Invalid email");
      setFormData({ ...formData, email: "" });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Form submitted successfully ✅");
      } else {
        setMessage(data.error || "Error submitting form ❌");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
      console.error("Error:", error);
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: { country: "", number: "" },
      representType: "Individual",
      representName: "",
      query: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-slate-700">Contact Form</h2>

      <div className="first-last-name">
        <div className="form-attribute">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-attribute">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-attribute">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <PhoneInput value={formData.phone} onChange={handlePhoneChange} />

      <div className="form-attribute">
        <label htmlFor="query">Query</label>
        <textarea name="query" value={formData.query} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

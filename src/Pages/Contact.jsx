import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {
      return Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all the fields!",
        confirmButtonColor: "#2563eb",
      });
    }

    if (!isValidEmail(email)) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address!",
        confirmButtonColor: "#2563eb",
      });
    }

    // Success Message
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "We will respond within 24 hours.",
      confirmButtonColor: "#2563eb",
      timer: 2200,
      showConfirmButton: false,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>📍 <span className="font-medium">Address:</span> Karachi, Pakistan</p>
              <p>📞 <span className="font-medium">Phone:</span> +92 300 1234567</p>
              <p>📧 <span className="font-medium">Email:</span> support@yourstore.com</p>
              <p>⏰ <span className="font-medium">Support:</span> 24/7 Available</p>
            </div>

            <img
              src="https://images.openai.com/static-rsc-4/dZG9wJ569bnl57KjMrot_7ZKnBdd0llDIL1dx6T7ykIvVxHVjJnwnOpfdnqxmib4Gn5dDst2-6mDHO1X_NL6G-4pJgWIT6zjc52ILyKOZcwNwecIS_LWXCPbFt8GLBgnarSCRiE0RcnCQt4lGZtfynPID7l6i4Qu58ukbI0U-AI?purpose=inline"
              alt="contact"
              className="mt-6 rounded-xl shadow"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Store. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default Contact;
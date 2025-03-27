import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", username: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    checkRateLimit();
  }, []);

  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem('lastSubmission');
    const submissionCount = Number(localStorage.getItem('submissionCount') || 0);
    
    if (lastSubmission) {
      const timeElapsed = Date.now() - Number(lastSubmission);
      if (timeElapsed < 24 * 60 * 60 * 1000 && submissionCount >= 3) {
        setIsBlocked(true);
        setStatus("Maximum messages per day reached. Please try again tomorrow.");
      }
    }
  };

  const updateRateLimit = () => {
    const count = Number(localStorage.getItem('submissionCount') || 0);
    localStorage.setItem('lastSubmission', Date.now().toString());
    localStorage.setItem('submissionCount', (count + 1).toString());
  };

  const validateInput = () => {
    if (formData.username) return false;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;
    
    if (formData.name.length < 2 || formData.message.length < 10) return false;
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isBlocked) {
      setStatus("Please wait 24 hours before sending another message.");
      return;
    }

    if (!validateInput()) {
      setStatus("Invalid input. Please check your entries.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      updateRateLimit();
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", username: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 px-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transition-colors duration-300">
        {/* Honeypot field - hidden from real users */}
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          aria-hidden="true"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <Button 
          className="mx-auto block" 
          type="submit" 
          text={isSending ? "Sending..." : "Send Message"} 
          variant="primary"
          disabled={isBlocked || isSending}
        />
      </form>
      {status && (
        <p className={`text-center mt-4 text-lg font-semibold ${
          status.includes("successfully") ? "text-green-600" : "text-red-600"
        } dark:text-gray-300 transition`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default ContactForm;

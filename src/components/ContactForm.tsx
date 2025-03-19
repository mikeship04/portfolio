import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_wbhfrx5",
        "template_3yulvwy",
        formData,
        "Zj3LfhlonBSI5bUQO"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="py-16 px-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transition-colors duration-300"
      >
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
        <Button className="mx-auto block" type="submit" text={isSending ? "Sending..." : "Send Message"} variant={"primary"} onClick={() => {}} />
      </form>
      {status && <p className="text-center mt-4 text-lg font-semibold text-gray-900 dark:text-gray-300 transition">{status}</p>}
    </section>
  );
};

export default ContactForm;

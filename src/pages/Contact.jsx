import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
message: "",
});

function handleChange(e) {
const { name, value } = e.target;
setForm((prev) => ({ ...prev, [name]: value }));
}

const handleSubmit = (e) => {
e.preventDefault();
alert("Form submitted!");
setForm({ firstName: "", lastName: "", email: "", message: "" });
};

return ( <section className="bg-black text-gray-200 py-28 px-6 md:px-16 mx-4 sm:mx-6 md:mx-16">
{/* Heading */} <div className="text-center mb-12 sm:mb-16">
<motion.h1
className="text-3xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide"
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
Contact
</motion.h1> <div className="w-24 h-[2px] bg-gray-700 mx-auto rounded-full"></div> </div>

  {/* Contact Layout */}
  <div className="grid gap-12 sm:gap-16 md:grid-cols-2 max-w-6xl mt-4 mx-auto">
    {/* Left: Info */}
    <motion.div
      className="space-y-6 sm:space-y-8 mt-8 sm:mt-12"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">Get in Touch</h2>
      <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
        Whether you have a question, an opportunity, or just want to say
        hello — feel free to reach out. I’d love to connect.
      </p>

      <p className="text-gray-300 text-base sm:text-lg">
        <span className="font-medium text-white">Email:</span>{" "}
        <a
          href="mailto:vaishgaikwad472@gmail.com"
          className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
        >
          vaisghaikwad472@gmail.com
        </a>
      </p>

      <a
        href="resume.pdf"
        download
        className="inline-block mt-4 px-8 py-3 text-lg border border-gray-700 text-black bg-white font-semibold transform transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-100"
      >
        Download Resume
      </a>
    </motion.div>

    {/* Right: Contact Form */}
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
      <div className="grid gap-4 sm:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
          <label className="block text-sm sm:text-base mb-1">First Name *</label>
          <input
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/30 px-2 py-2 focus:outline-none focus:border-white rounded-sm"
            placeholder="Vaishnavi"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
          <label className="block text-sm sm:text-base mb-1">Last Name *</label>
          <input
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/30 px-2 py-2 focus:outline-none focus:border-white rounded-sm"
            placeholder="Gaikwad"
          />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}>
        <label className="block text-sm sm:text-base mb-1">Email *</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/30 px-2 py-2 focus:outline-none focus:border-white rounded-sm placeholder-white/40"
          placeholder="example@mail.com"
        />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <label className="block text-sm sm:text-base mb-1">Message *</label>
        <textarea
          name="message"
          rows="4"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/30 px-2 py-2 focus:outline-none focus:border-white rounded-sm placeholder-white/40 resize-none"
          placeholder="Write your message here..."
        />
      </motion.div>

      <motion.button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 border border-white text-white font-semibold transform transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white hover:text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Submit
      </motion.button>
    </form>
  </div>
</section>


);
}

export default Contact;

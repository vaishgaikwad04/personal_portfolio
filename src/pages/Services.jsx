import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive UIs using React, Tailwind CSS, and modern JavaScript for seamless user experiences.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      desc: "Creating scalable and secure backend systems using Node.js and Express to manage APIs and server logic efficiently.",
      icon: "⚙️",
    },
    {
      title: "API Integration",
      desc: "Integrating RESTful APIs and third-party services to enable smooth communication between frontend and backend systems.",
      icon: "🔗",
    },
    {
      title: "Authentication & Authorization",
      desc: "Implementing secure login, registration, and role-based access using JWT, cookies, and middleware authentication flows.",
      icon: "🔒",
    },
    {
      title: "Clean Code",
      desc: "Writing structured, maintainable, and reusable code while following modern coding standards and design principles.",
      icon: "</>",
    },
    {
      title: "UI/UX Optimization",
      desc: "Enhancing user experience through clean layouts, accessibility, smooth transitions, and intuitive interactions.",
      icon: "🎨",
    },
    {
      title: "Deployment",
      desc: "Deploying full-stack applications on platforms like Vercel, Netlify, or Render with CI/CD setup and environment management.",
      icon: "🚀",
    },
  ];

  return (
    <div className="py-20 px-6 bg-black text-white font-sans">
      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          What Can I Do
        </h2>

        <div className="w-24 h-[2px] bg-gray-700 mx-auto rounded-full mb-12"></div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
className="bg-[#111] border border-gray-800 rounded-lg p-6 hover:border-gray-600 hover:shadow-[0_0_15px_rgba(156,163,175,0.3)] transition-all"
            >
              <div className="text-red-500 text-3xl mb-3">{service.icon}</div>
              <h4 className="text-white text-lg font-semibold mb-2">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

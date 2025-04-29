import React from 'react';
import { FaReact, FaMobileAlt, FaLaptopCode, FaShoppingCart, FaChalkboardTeacher, FaTools } from 'react-icons/fa';

const services = [
  { title: 'MERN Stack Development', description: 'Building modern and efficient web applications with MongoDB, Express.js, React, and Node.js.', icon: <FaReact /> },
  { title: 'UI/UX Design', description: 'Crafting intuitive user experiences and interfaces with a focus on responsiveness and accessibility.', icon: <FaMobileAlt /> },
  { title: 'Full-Stack Web Development', description: 'Developing scalable and secure web applications, from front-end design to back-end integration.', icon: <FaLaptopCode /> },
  { title: 'Responsive Web Design', description: 'Ensuring that websites are fully responsive and optimized for various devices and screen sizes using Tailwind CSS.', icon: <FaTools /> },
  { title: 'Interactive Coding Platforms', description: 'Creating interactive coding environments and educational platforms for web development training.', icon: <FaChalkboardTeacher /> },
  { title: 'E-Commerce Solutions', description: 'Designing and developing e-commerce platforms with advanced search, filtering, and user-friendly interfaces.', icon: <FaShoppingCart /> },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12">My Expertise at Your Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

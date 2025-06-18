import React from 'react';
import { FaReact, FaMobileAlt, FaLaptopCode} from 'react-icons/fa';

const services = [
  { title: 'MERN Stack Development', description: 'Building modern and efficient web applications with MongoDB, Express.js (Embedded Javascript  for light projects), React, TailwindCSS, and Node.js.', icon: <FaReact /> },
  { title: 'UI/UX Design', description: 'Crafting intuitive user experiences and interfaces with a focus on responsiveness and accessibility. Ensuring that websites are fully responsive and optimized for various devices and screen sizes.', icon: <FaMobileAlt /> },
  { title: 'Full-Stack Web Development', description: 'Developing scalable and secure web applications, from front-end design to back-end integration, Creating interactive coding environments and educational.', icon: <FaLaptopCode /> },
];

const Services = () => {
  return (
    <>

    <section id="services" className=" bg-white text-center px-4">
      <div className="flex items-center gap-6 overflow-x-auto pb-4">
      <div className="min-w-[250px] p-6 bg-white shadow-md rounded-lg text-left flex flex-col justify-center border-l-4 border-orange-600">
      <span className="text-sm text-orange-600 font-bold uppercase">Services</span>
      <h2 className="text-xl font-bold mt-1 mb-4 text-gray-900">I Provide Wide Range Of Digital Services</h2>
      <p className="text-gray-500 text-sm">I provide the following Services ad if you can not find what you are looking for please contact me and ask</p>
       <div className="flex space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"><i className="fas fa-arrow-left text-orange-600"></i></button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"><i className="fas fa-arrow-right text-arange-600"></i></button>
      </div>
      </div>
        {services.map((service, index) => (
          <div key={index} className="min-w-[250px] p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>

  );
};

export default Services;

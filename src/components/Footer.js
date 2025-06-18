import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000026] text-white pb-8 pt-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About / Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Zibeke Onwabe</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate full-stack developer focused on accessible, impactful software. I believe in empowering others
            through technology, especially within local communities.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 hover:text-white text-sm" />
            </a>
            <a href="https://linkedin.com/in/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-400 hover:text-white text-sm" />
            </a>
            <a href="https://github.com/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white text-sm" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center">
              <FaPhone className="mr-2 text-orange-500" />
              <span>+27 78-430-0901</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-500" />
              <span>Zibekeonwabe@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              <span>Durban, KwaZulu Natal, South Africa</span>
            </li>
          </ul>
        </div>

        {/* Technologies & Availability */}
        <div>
          <h4 className="text-lg font-semibold  mb-2 flex items-center">
            <FaCalendarCheck className="mr-2 text-orange-500" /> Availability
          </h4>
          <p className="text-sm text-gray-400">
            Open to freelance projects, mentorship, and remote collaborations worldwide.
          </p>
        </div>

        {/* Newsletter & Credit */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Developers</h3>
         <div className="mt-6 text-sm text-gray-400">
            <p className="mb-1">
              Designed with love by <a href="https://esgela.onrender.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Esgela Team</a>
            </p>
            <p>Empowering the youth through code & creativity.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


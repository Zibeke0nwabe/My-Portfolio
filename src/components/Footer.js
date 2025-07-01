import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative bg-[#000026] pt-32">
      {/*  Promo Banner */}
      <div className="absolute top-0 mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] bg-white text-black rounded-xl shadow-2xl px-6 py-6 z-20 text-center">
        <h2 className="text-2xl font-bold mb-1">Want to connect or learn more about me?</h2>
        <p className="text-orange-500 font-medium mb-4">Let's connect 24/7 on the following</p>
        
        <div className="flex justify-center flex-wrap gap-4">
          <a href="https://wa.me/27784300901" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-[#25D366] hover:text-green-500 text-2xl" />
          </a>
          <a href="https://linkedin.com/in/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0077B5] hover:text-blue-600 text-2xl" />
          </a>
          <a href="https://github.com/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black hover:text-gray-700 text-2xl" />
          </a>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="text-white pb-8 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

          {/* About / Mission */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Zibeke Onwabe</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Passionate full-stack developer focused on accessible, impactful software. I believe in empowering others
              through technology, especially within local communities.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-[#1877F2] hover:text-white text-sm" />
              </a>
              <a href="https://linkedin.com/in/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#0077B5] hover:text-white text-sm" />
              </a>
              <a href="https://github.com/Zibeke0nwabe" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white hover:text-gray-300 text-sm" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-[#FF0000] hover:text-white text-sm" />
              </a>
            </div>
          </div>

          {/*  Contact Info */}
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

          {/* Availability */}
          <div>
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <FaCalendarCheck className="mr-2 text-orange-500" /> Availability
            </h4>
            <p className="text-sm text-gray-400">
              Open to freelance projects, mentorship, and remote collaborations worldwide.
            </p>
          </div>

          {/* Credit */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-1">
                Designed with love by{' '}
                <a
                  href="https://esgela.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Esgela Team
                </a>
              </p>
              <p>Empowering the youth through code & creativity.</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

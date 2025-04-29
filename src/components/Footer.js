import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaProjectDiagram,
  FaTools,
  FaArrowRight,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* About / Branding */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-orange-500">Zibeke Onwabe</h2>
          <p className="text-sm text-gray-400 mb-6">
            Passionate full-stack developer dedicated to creating impactful, user-centric applications.
            Let's collaborate and build something extraordinary together.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            onClick={() => window.location = 'mailto:Zibekeonwabe@gmail.com'}
          >
            <FaArrowRight className="mr-2" /> Connect with Me
          </button>
        </div>

        {/* Projects & Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaProjectDiagram className="mr-2 text-orange-500" /> Featured Projects
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="https://esgela.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Esgela Online Application
              </a>
              <p className="text-xs text-gray-500">Streamlined application process for coding bootcamp admissions.</p>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">Port St. Johns Tour Guider</a>
              <p className="text-xs text-gray-500">Comprehensive travel guide for Eastern Cape visitors.</p>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">Sports Tournament Manager</a>
              <p className="text-xs text-gray-500">Efficient management of sports teams and schedules.</p>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-2 flex items-center">
            <FaTools className="mr-2 text-orange-500" /> Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            <span className="bg-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded">MongoDB</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Express</span>
            <span className="bg-gray-800 px-3 py-1 rounded">TailwindCSS</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
            <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-orange-500" /> Contact Information
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center">
              <FaPhone className="mr-2 text-orange-500" />
              <span>+27 78-430-0901</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-500" />
              <span>Zibekeonwabe@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="mr-2 text-orange-500" />
              <a href="https://linkedin.com/in/Zibeke0nwabe" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-2 text-orange-500" />
              <a href="https://github.com/Zibeke0nwabe" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                GitHub Portfolio
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              <span>Durban, KwaZulu Natal, South Africa</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Myinfo = () => {
  return (
    <section id="about" className="bg-white px-6 py-10 flex flex-col md:flex-row items-start justify-between relative">
            {/* Right Image */}
      <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end relative md:mr-12 mb-4">
        <img
          src="images/image0.jpeg"
          alt="Onwabe Zibeke"
          className="w-[450px] h-[420px] object-cover rounded-md"
        />
      </div>
      {/* Left Content */}
      <div className="md:pl-8 mb-12 md:mb-0">
        {/* Small Heading */}
        <p className="text-sm text-orange-500 font-semibold mb-2 uppercase tracking-wide">About Us</p>

        {/* Big Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
          You Can Imagine <br /> I Can Do
        </h2>

        {/* Small Subheading */}
        <p className="text-gray-600 text-base mb-2">Professional Full Stack Developer</p>

        {/* Horizontal Line */}
        <div className="w-64 h-2 bg-orange-500 mb-6 rounded-lg"></div>

        {/* Info Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-[90%] relative z-10">
          <h3 className="text-lg font-bold text-gray-800 mb-2">About Me</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            I am a MERN stack developer who studied ICT at Durban University of Technology.
            Though I haven’t had any luck securing an internship, I’ve never let that bring me down.
            My journey as a full stack developer has been enriched with the development of numerous projects,
            all contributing to my growth and expertise in software development. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Myinfo;

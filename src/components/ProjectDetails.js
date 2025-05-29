import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-red-500 text-lg mt-20">
        Project not found. Please check the ID.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 text-gray-800">
        {/* Title */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </header>

        {/* Top Grid: Carousel and Overview */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          {project.images?.length > 0 && (
            <div>
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                {project.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={`/${img}`}
                      alt={`Screenshot ${index + 1}`}
                      className="rounded-lg shadow-md object-contain h-[410px] w-full"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          {/* Overview + Tools */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.detailedDescription}</p>

            <div>
              <h3 className="font-semibold text-gray-800">Tools Used</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-orange-500 font-semibold px-5 py-2 rounded hover:bg-orange-500 hover:text-white transition"
                >
                  Visit Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-gray-800 hover:text-orange-500 transition"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Experience and Challenges */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">My Experience</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.experience}</p>

            <h3 className="text-xl font-semibold mt-6">Challenges Faced</h3>
            <p className="text-sm text-gray-600">{project.challenges}</p>
          </div>
          {/* Video */}
          {project.video && (
            <div className="w-full h-full">
              <video
                controls
                className="rounded-lg shadow-md w-full object-cover"
                poster={`/${project.videoThumbnail}`}
                autoPlay
                muted
                loop
              >
                <source src={`/${project.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </section>

        {/* Other Projects */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-6">Explore Other Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== id)
              .map(p => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <img
                    src={`/${p.image}`}
                    alt={p.title}
                    className="w-full h-40 object-contain mb-4 border rounded"
                  />
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetails;
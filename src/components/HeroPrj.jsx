import React, { useState } from "react"
import { Sparkles, Eye, X } from "lucide-react"
import p1 from "../assets/projects/p1.jpg";
import p2 from "../assets/projects/p2.jpg";
import p3 from "../assets/projects/p3.jpg";
import p4 from "../assets/projects/p4.jpg";

const Designs = [
  {
    id: 1,
    name: "OBAIMOLE",
    about: "flyer",
    img: p1,
    bg: "bg-[#ebf2f5]",
  },
  {
    id: 2,
    name: "SUG",
    about: "flyer",
    img: p2,
    bg: "bg-[#c1d4c0]",
  },
  {
    id: 3,
    name: "SUG",
    about: "flyer",
    img: p3,
    bg: "bg-[#066521]",
  },
  {
    id: 4,
    name: "OJUDE",
    about: "flyer",
    img: p4,
    bg: "bg-[#e0bfc6]",
  },
];

const HeroPrj = ({ times }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (design) => {
    setSelectedProject(design)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Styled Line */}
        <div className="mb-12">
          <div className="inline-block">
            <h3 className="text-[#018aBE] font-bold text-sm uppercase tracking-wider mb-2">
              Projects
            </h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#018aBE] via-[#018aBE]/50 to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-6 mb-3">
            Featured Work
          </h2>
          <p className="text-[#9a9a9a] text-base lg:text-lg">
            A selection of my recent design projects
          </p>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {Designs.slice(0, times).map((design, index) => (
            <div
              key={design.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(design.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openModal(design)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#018aBE]/20">
                {/* Colored Background */}
                <div className={`${design.bg} p-6 rounded-2xl transition-all duration-500 group-hover:scale-105`}>
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={design.img}
                      alt={design.name}
                      className="w-full h-80 lg:h-96 object-cover transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Eye className="w-5 h-5" />
                        <span className="font-semibold">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#018aBE] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* Project Info */}
              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-[#018aBE] transition-colors duration-300">
                    {design.name}
                  </h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#018aBE]" />
                </div>
                <p className="text-[#9a9a9a] text-sm">{design.about}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {times < Designs.length && (
          <div className="flex justify-center mt-12">
            <a
              href="/project"
              className="group flex items-center gap-3 bg-transparent border-2 border-[#202020] hover:border-[#018aBE] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              <span>View All Projects</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-[#121212] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#202020]"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalSlideIn 0.3s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-[#018aBE] rounded-full text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className={`${selectedProject.bg} p-8 flex items-center justify-center`}>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* Info Section */}
              <div className="p-8 lg:p-10 space-y-6">
                <div>
                  <span className="text-[#018aBE] text-sm font-semibold uppercase tracking-wider">
                    {selectedProject.about}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
                    {selectedProject.name}
                  </h2>
                </div>

                <div className="h-px bg-[#202020]" />

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#9a9a9a] text-sm font-semibold mb-1">Description</h4>
                    <p className="text-white leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[#9a9a9a] text-sm font-semibold mb-1">Client</h4>
                      <p className="text-white">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-[#9a9a9a] text-sm font-semibold mb-1">Year</h4>
                      <p className="text-white">{selectedProject.year}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#202020]" />

                <div className="flex gap-4">
                  <button 
                    onClick={closeModal}
                    className="border-2 border-[#202020] hover:border-[#018aBE] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
};

export default HeroPrj;

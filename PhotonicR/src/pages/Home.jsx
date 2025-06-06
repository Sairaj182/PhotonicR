import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-[90vh] py-12 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col gap-20">
        {/* HERO */}
        <div className="flex flex-col md:flex-row items-center gap-12 pt-8 relative">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] mb-6 leading-tight mt-8 md:mt-16">
              Illuminating <span className="text-green-500 underline decoration-green-300">Innovation</span> Through Photochemistry
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
              Designing the Future of Clean Chemistry with <span className="text-green-500 font-semibold">Smart Photoreactors</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                to="/contact"
                className="bg-green-400 hover:bg-green-500 text-[#0D1B2A] font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-300 text-lg ring-2 ring-green-100 hover:ring-green-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/reactors"
                className="border-2 border-green-400 text-green-500 hover:bg-green-400 hover:text-[#0D1B2A] font-bold px-7 py-3 rounded-full transition-all duration-300 text-lg shadow hover:shadow-lg"
              >
                Explore Our Reactors
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center">
                <span className="text-green-400 text-3xl mb-2">🔬</span>
                <span className="font-bold text-[#0D1B2A]">Cutting-edge R&D</span>
                <span className="text-gray-500 text-sm mt-1 text-center">Innovative photoreactor technology</span>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center">
                <span className="text-green-400 text-3xl mb-2">🌱</span>
                <span className="font-bold text-[#0D1B2A]">Sustainable Chemistry</span>
                <span className="text-gray-500 text-sm mt-1 text-center">Eco-friendly, energy-efficient solutions</span>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center">
                <span className="text-green-400 text-3xl mb-2">🤝</span>
                <span className="font-bold text-[#0D1B2A]">Collaborative Approach</span>
                <span className="text-gray-500 text-sm mt-1 text-center">Partnering with academia & industry</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end w-full relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Photoreactor"
                className="w-72 h-72 object-contain rounded-2xl shadow-2xl border-4 border-green-100"
              />
              <div className="absolute -inset-2 rounded-2xl border-2 border-green-200 opacity-30 pointer-events-none"></div>
              {/* Down arrow to hint at more content */}
              <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 animate-bounce z-10">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* WHY PHOTONICR */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Why PhotonicR?</h2>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
              <li>
                <b>Proven Results:</b> Our reactors are trusted by top institutions and deliver measurable improvements in yield and efficiency.
              </li>
              <li>
                <b>Custom Engineering:</b> We tailor every system to your needs, from lab scale to industrial production.
              </li>
              <li>
                <b>Expert Support:</b> Our team guides you from consultation to commissioning and beyond.
              </li>
              <li>
                <b>Future-Ready:</b> Built for automation, data integration, and sustainability.
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow p-8 w-full max-w-xs text-center border border-green-100">
              <h3 className="text-green-400 font-bold text-lg mb-2">Did you know?</h3>
              <p className="text-gray-600 text-base">
                PhotonicR’s patented light distribution technology can boost photochemical yields by up to <b>40%</b> compared to conventional systems.
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* "WHAT WE OFFER" */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-white rounded-xl shadow-md p-7 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Lab to Industry</h3>
            <p className="text-gray-600 mb-4">
              From benchtop prototypes to industrial-scale reactors, we deliver scalable solutions for every stage of your photochemistry journey.
            </p>
            <Link to="/reactors" className="text-green-500 font-semibold hover:underline mt-auto">See Reactor Types →</Link>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-md p-7 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Integrated Automation</h3>
            <p className="text-gray-600 mb-4">
              Our systems feature smart controls, data logging, and remote monitoring for seamless, reproducible results.
            </p>
            <Link to="/contact" className="text-green-500 font-semibold hover:underline mt-auto">Request a Demo →</Link>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-md p-7 flex flex-col justify-between hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Sustainability Focus</h3>
            <p className="text-gray-600 mb-4">
              We prioritize energy efficiency and green chemistry, helping you meet your sustainability goals.
            </p>
            <Link to="/about" className="text-green-500 font-semibold hover:underline mt-auto">Learn More →</Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* ACHIEVEMENTS SNAPSHOT */}
        <div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6 text-center">Recognized for Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="text-green-400 text-3xl mb-2">🛡️</span>
              <span className="font-bold text-[#0D1B2A] mb-1">Patent Granted</span>
              <span className="text-gray-500 text-sm text-center">
                Proprietary photoreactor design for enhanced light efficiency and yields.
              </span>
              <span className="text-xs text-gray-400 mt-2">Patent No. 2023/PHOTONICR/001</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="text-green-400 text-3xl mb-2">💸</span>
              <span className="font-bold text-[#0D1B2A] mb-1">Startup Bihar Funding</span>
              <span className="text-gray-500 text-sm text-center">
                Officially funded under the Government of Bihar’s Startup Bihar Scheme.
              </span>
              <span className="text-xs text-gray-400 mt-2">Cohort 2024</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <span className="text-green-400 text-3xl mb-2">🎓</span>
              <span className="font-bold text-[#0D1B2A] mb-1">Academic Collaborations</span>
              <span className="text-gray-500 text-sm text-center">
                Partnered with IIT Patna, CSIR, and more for real-world photochemistry.
              </span>
              <span className="text-xs text-gray-400 mt-2">Since 2022</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* TRUSTED BY */}
        <div>
          <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4 text-center">Trusted by Innovators & Institutions</h3>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_IIT_Patna.png" alt="IIT Patna" className="h-10 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/en/7/7e/Bihar_Government_Logo.png" alt="Govt of Bihar" className="h-10 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/CSIR_INDIA_logo.png" alt="CSIR" className="h-10 grayscale hover:grayscale-0 transition" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

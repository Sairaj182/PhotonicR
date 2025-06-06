import React from 'react'

const About = () => {
  return (
    <section className="min-h-[80vh] bg-gray-100 py-16 px-4 flex flex-col items-center">
      {/* Hero Card: Image + Intro */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-10 p-8 md:p-12 mb-10">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="PhotonicR Lab"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>
        {/* Intro Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-5">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <b>PhotonicR Pvt. Ltd.</b> is a deep-tech startup at the forefront of photochemistry innovation, developing next-generation photoreactor systems for both industrial and research applications.<br /><br />
            Founded by a passionate team of scientists and engineers, we are dedicated to making photochemistry more scalable, efficient, and environmentally sustainable. Our expertise spans chemical engineering, optics, and automation, allowing us to design and build reactors that deliver precise, reproducible results.<br /><br />
            We believe in the power of light-driven chemistry to transform manufacturing, reduce waste, and unlock new possibilities in synthesis. Our approach is collaborative and research-driven, ensuring every reactor we build is optimized for performance, safety, and sustainability.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1 bg-gray-50 rounded-xl shadow p-6 text-center">
          <h3 className="text-green-400 font-bold text-lg mb-2">Our Mission</h3>
          <p className="text-gray-600 text-base">
            To revolutionize chemical manufacturing with sustainable, light-powered technologies that enable cleaner, safer, and more efficient processes.
          </p>
        </div>
        <div className="flex-1 bg-gray-50 rounded-xl shadow p-6 text-center">
          <h3 className="text-green-400 font-bold text-lg mb-2">Our Vision</h3>
          <p className="text-gray-600 text-base">
            To be the global leader in photochemical reactor innovation, empowering industries and researchers to shape a cleaner, brighter future.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-5xl bg-gray-50 rounded-xl shadow p-8">
        <h4 className="text-[#0D1B2A] font-bold mb-4 text-center text-xl">Our Journey</h4>
        <ul className="text-gray-600 text-base space-y-3 mx-auto max-w-2xl">
          <li>
            <span className="font-semibold text-green-400">2021:</span> PhotonicR founded by a multidisciplinary team of scientists and engineers.
          </li>
          <li>
            <span className="font-semibold text-green-400">2022:</span> First prototype photoreactor deployed in academic research labs.
          </li>
          <li>
            <span className="font-semibold text-green-400">2023:</span> Patent granted for proprietary light distribution technology.
          </li>
          <li>
            <span className="font-semibold text-green-400">2024:</span> Selected for Startup Bihar funding and expanded collaborations with IIT Patna and CSIR.
          </li>
          <li>
            <span className="font-semibold text-green-400">Today:</span> Delivering custom photoreactor solutions to industry and academia, driving sustainable chemistry forward.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About

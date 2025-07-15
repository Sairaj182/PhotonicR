import React from 'react'

const reactors = [
  {
    name: "Bench-Scale Reactor",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Compact, versatile systems for lab-scale photochemical research and rapid prototyping.",
  },
  {
    name: "Pilot Reactor",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Mid-scale reactors for process optimization and scale-up studies in real-world conditions.",
  },
  {
    name: "Custom Industrial System",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Tailor-made photoreactor solutions for industrial production and specialized applications.",
  },
];

const Reactors = () => {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-white via-[#f1f5f9] to-[#e5e7eb] py-16 px-4 flex flex-col items-center font-sans">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-2 text-center">
        Our Photoreactors
      </h2>
      <p className="text-lg text-[#334155] mb-10 text-center">
        Tailored Engineering for Powerful Photochemistry
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {reactors.map((reactor, idx) => (
          <div
            key={reactor.name}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center p-7 text-center border border-[#e5e7eb] hover:border-[#2563eb]/40"
          >
            <img
              src={reactor.img}
              alt={reactor.name}
              className="w-40 h-40 object-cover rounded-xl mb-6 shadow-md"
            />
            <h3 className="text-xl font-bold text-[#1e293b] mb-2">{reactor.name}</h3>
            <p className="text-[#334155] mb-6">{reactor.desc}</p>
            <button
              className="px-6 py-2 rounded-full bg-[#2563eb] text-white font-bold shadow-md transition-all duration-300 hover:bg-[#1d4ed8] focus:outline-none"
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reactors

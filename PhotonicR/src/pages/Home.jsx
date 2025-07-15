import React from 'react'
import { Link } from 'react-router-dom'

// Design tokens for light theme
const accent = "text-[#2563eb]";
const headingText = "text-[#1e293b]";
const glassCard = "bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-[#e5e7eb] hover:border-[#2563eb]/40 transition-all duration-300";
const blueBtn = "bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-xl shadow-md transition-all duration-200 text-base md:text-lg";
const sectionTitle = "font-extrabold text-3xl md:text-4xl tracking-tight mb-6 md:mb-10 " + accent + " font-sans";
const subTitle = "font-semibold text-xl md:text-2xl text-[#1e293b] mb-3 font-sans";
const bodyText = "text-[#334155] text-base md:text-lg font-normal font-sans";

const Home = () => {
  return (
    <main className="relative min-h-[100vh] pt-28 pb-16 px-4 bg-gradient-to-br from-white via-[#f1f5f9] to-[#e5e7eb] font-sans">
      {/* Subtle blue background shapes */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[10%] w-[320px] md:w-[420px] h-[320px] md:h-[420px] bg-[#2563eb] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[260px] md:w-[360px] h-[260px] md:h-[360px] bg-[#60a5fa] opacity-10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-7xl flex flex-col gap-28 relative z-10">

        {/* HERO */}
        <section className="flex flex-col items-center text-center gap-8">
          <h1 className="font-black text-4xl md:text-6xl leading-tight mt-8 md:mt-16 mb-4 text-[#1e293b] tracking-tight">
            Illuminating <span className="underline decoration-[#2563eb]/60">Innovation</span> <br className="hidden md:block" />Through Photochemistry
          </h1>
          <p className="text-xl md:text-2xl text-[#334155] mb-8 font-medium max-w-2xl">
            Designing the Future of Clean Chemistry with <span className={accent + " font-semibold"}>Smart Photoreactors</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/contact" className={blueBtn + " font-bold text-lg"}>Get in Touch</Link>
            <Link to="/reactors" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-xl transition-all duration-200 text-lg shadow bg-white/60 backdrop-blur w-full sm:w-auto">Explore Our Reactors</Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full md:justify-center">
            <div className={`${glassCard} flex-1 min-w-[220px] max-w-xs p-7 flex flex-col items-center`}>
              <span className="text-[#2563eb] text-4xl mb-2">🔬</span>
              <span className="font-bold text-[#1e293b] text-lg">Cutting-edge R&D</span>
              <span className={bodyText + " mt-1 text-center"}>Innovative photoreactor technology</span>
            </div>
            <div className={`${glassCard} flex-1 min-w-[220px] max-w-xs p-7 flex flex-col items-center`}>
              <span className="text-[#60a5fa] text-4xl mb-2">🌱</span>
              <span className="font-bold text-[#1e293b] text-lg">Sustainable Chemistry</span>
              <span className={bodyText + " mt-1 text-center"}>Eco-friendly, energy-efficient solutions</span>
            </div>
            <div className={`${glassCard} flex-1 min-w-[220px] max-w-xs p-7 flex flex-col items-center`}>
              <span className="text-[#1e293b] text-4xl mb-2">🤝</span>
              <span className="font-bold text-[#1e293b] text-lg">Collaborative Approach</span>
              <span className={bodyText + " mt-1 text-center"}>Partnering with academia & industry</span>
            </div>
          </div>
        </section>

        {/* WHY PHOTONICR */}
        <section className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-bold text-3xl md:text-4xl mb-8 text-[#1e293b]">Why PhotonicR?</h2>
            <ul className={bodyText + " space-y-6"}>
              <li>
                <b className="text-[#1e293b]">Proven Results:</b> Our reactors are trusted by top institutions and deliver measurable improvements in yield and efficiency.
              </li>
              <li>
                <b className="text-[#1e293b]">Custom Engineering:</b> We tailor every system to your needs, from lab scale to industrial production.
              </li>
              <li>
                <b className="text-[#1e293b]">Expert Support:</b> Our team guides you from consultation to commissioning and beyond.
              </li>
              <li>
                <b className="text-[#1e293b]">Future-Ready:</b> Built for automation, data integration, and sustainability.
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className={`${glassCard} rounded-2xl shadow p-10 w-full max-w-sm text-center`}>
              <h3 className={subTitle + " " + accent}>Did you know?</h3>
              <p className={bodyText}>
                PhotonicR’s patented light distribution technology can boost photochemical yields by up to <b className="text-[#1e293b]">40%</b> compared to conventional systems.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section>
          <h2 className={sectionTitle + " text-center"}>What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${glassCard} p-8 flex flex-col justify-between items-start`}>
              <h3 className={subTitle}>Lab to Industry</h3>
              <p className={bodyText + " mb-5"}>
                From benchtop prototypes to industrial-scale reactors, we deliver scalable solutions for every stage of your photochemistry journey.
              </p>
              <Link to="/reactors" className="text-[#2563eb] font-semibold hover:underline mt-auto">See Reactor Types →</Link>
            </div>
            <div className={`${glassCard} p-8 flex flex-col justify-between items-start`}>
              <h3 className={subTitle}>Integrated Automation</h3>
              <p className={bodyText + " mb-5"}>
                Our systems feature smart controls, data logging, and remote monitoring for seamless, reproducible results.
              </p>
              <Link to="/contact" className="text-[#2563eb] font-semibold hover:underline mt-auto">Request a Demo →</Link>
            </div>
            <div className={`${glassCard} p-8 flex flex-col justify-between items-start`}>
              <h3 className={subTitle}>Sustainability Focus</h3>
              <p className={bodyText + " mb-5"}>
                We prioritize energy efficiency and green chemistry, helping you meet your sustainability goals.
              </p>
              <Link to="/about" className="text-[#2563eb] font-semibold hover:underline mt-auto">Learn More →</Link>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SNAPSHOT */}
        <section>
          <h2 className={sectionTitle + " text-center"}>Recognized for Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${glassCard} p-8 flex flex-col items-center`}>
              <span className="text-[#2563eb] text-4xl mb-3">🛡️</span>
              <span className="font-bold text-[#1e293b] mb-2 text-lg">Patent Granted</span>
              <span className={bodyText + " text-center"}>
                Proprietary photoreactor design for enhanced light efficiency and yields.
              </span>
              <span className="text-xs text-[#2563eb] mt-3">Patent No. 2023/PHOTONICR/001</span>
            </div>
            <div className={`${glassCard} p-8 flex flex-col items-center`}>
              <span className="text-[#60a5fa] text-4xl mb-3">💸</span>
              <span className="font-bold text-[#1e293b] mb-2 text-lg">Startup Bihar Funding</span>
              <span className={bodyText + " text-center"}>
                Officially funded under the Government of Bihar’s Startup Bihar Scheme.
              </span>
              <span className="text-xs text-[#60a5fa] mt-3">Cohort 2024</span>
            </div>
            <div className={`${glassCard} p-8 flex flex-col items-center`}>
              <span className="text-[#1e293b] text-4xl mb-3">🎓</span>
              <span className="font-bold text-[#1e293b] mb-2 text-lg">Academic Collaborations</span>
              <span className={bodyText + " text-center"}>
                Partnered with IIT Patna, CSIR, and more for real-world photochemistry.
              </span>
              <span className="text-xs text-[#1e293b] mt-3">Since 2022</span>
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <section>
          <h3 className="text-lg md:text-xl font-semibold mb-8 text-center text-[#1e293b]">Trusted by Innovators & Institutions</h3>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_IIT_Patna.png" alt="IIT Patna" className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300 drop-shadow" />
            <img src="https://upload.wikimedia.org/wikipedia/en/7/7e/Bihar_Government_Logo.png" alt="Govt of Bihar" className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300 drop-shadow" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/CSIR_INDIA_logo.png" alt="CSIR" className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300 drop-shadow" />
            {/* Add more logos as needed */}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home

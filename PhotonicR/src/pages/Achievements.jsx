import React from 'react'

const achievements = [
  {
    title: "Patent Granted",
    icon: (
      <span className="text-4xl text-[#2563eb]">
        {/* Shield icon */}
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#2563eb" strokeWidth="2" fill="none"/>
        </svg>
      </span>
    ),
    desc: (
      <>
        We hold a patent for a proprietary photoreactor design that enhances light efficiency and yields.<br />
        <span className="block mt-2 text-sm text-gray-500">
          <b>Highlights:</b> <br />
          • Unique light distribution technology<br />
          • Improved scalability for industrial use<br />
          • Recognized by leading scientific bodies
        </span>
      </>
    ),
  },
  {
    title: "Startup Bihar Funding",
    icon: (
      <span className="text-4xl text-[#2563eb]">
        {/* Rupee icon */}
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path d="M6 4h12M6 8h12M9 4v12a4 4 0 004 4h3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    ),
    desc: (
      <>
        PhotonicR is officially funded under the Government of Bihar’s Startup Bihar Scheme.<br />
        <span className="block mt-2 text-sm text-gray-500">
          <b>Impact:</b> <br />
          • Accelerated R&D and product development<br />
          • Access to a strong innovation network<br />
          • Support for scaling manufacturing
        </span>
      </>
    ),
  },
  {
    title: "Academic Collaborations",
    icon: (
      <span className="text-4xl text-[#2563eb]">
        {/* Academic cap icon */}
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-7-7v2a7 7 0 0014 0v-2" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    desc: (
      <>
        Partnered with research labs and institutions to advance real-world photochemistry.<br />
        <span className="block mt-2 text-sm text-gray-500">
          <b>Collaborators:</b> <br />
          • IIT Patna, CSIR, and more<br />
          • Joint publications and pilot projects<br />
          • Knowledge exchange and training
        </span>
      </>
    ),
  },
];

const Achievements = () => {
  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-white via-[#f1f5f9] to-[#e5e7eb] flex flex-col items-center justify-center py-16 px-4 font-sans">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-10 text-center">
        Recognized for Innovation
      </h2>
      <p className="max-w-2xl text-[#334155] text-center mb-12">
        At PhotonicR, our journey is marked by milestones that reflect our commitment to scientific excellence, industry impact, and collaborative growth. Explore some of our proudest achievements below.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {achievements.map((ach, idx) => (
          <div
            key={ach.title}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-1 min-w-[260px] max-w-sm p-8 flex flex-col items-center text-center border border-[#e5e7eb] hover:border-[#2563eb]/40"
          >
            <div className="mb-4">{ach.icon}</div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-2">{ach.title}</h3>
            <p className="text-[#334155]">{ach.desc}</p>
            <div className="mt-6 w-full border-t border-gray-200 pt-4 text-xs text-[#2563eb]">
              <span>
                {idx === 0 && "Patent No. 2023/PHOTONICR/001"}
                {idx === 1 && "Startup Bihar Cohort 2024"}
                {idx === 2 && "Active since 2022"}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Section Footer */}
      <div className="mt-14 max-w-3xl text-center text-[#334155] text-base">
        <span>
          Our recognitions are a testament to our relentless pursuit of innovation and our vision for a sustainable, light-powered future. We continue to expand our impact through new partnerships, technology breakthroughs, and industry leadership.
        </span>
      </div>
    </section>
  )
}

export default Achievements

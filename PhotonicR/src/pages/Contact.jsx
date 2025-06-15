import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      access_key: 'a31d554e-047b-44b1-b798-0739874e59cf', 
      subject: form.subject || 'New Contact from Website',
      from_name: form.name,
      email: form.email,
      message: `Phone: ${form.phone}\nOrganization: ${form.org || 'N/A'}\n\nMessage: ${form.message}`,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          phone: '',
          org: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 3500);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-2">Let’s Collaborate</h2>
          <p className="text-gray-600 mb-8">
            Interested in our reactors or want to explore partnerships?
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Organization <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="org"
                value={form.org}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
                placeholder="Your Organization"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-full bg-green-400 text-[#0D1B2A] font-bold text-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:shadow-[0_0_16px_4px_#39FF14] focus:outline-none"
            >
              Send Message
            </button>
          </form>

          {/* Success Toast */}
          {success && (
            <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold z-50 animate-fadein">
              Thank you! Your message has been sent.
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-center items-center p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <span className="text-gray-700 font-medium">contact@photonicr.in</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <span className="text-gray-700 font-medium">+91-XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Animation */}
      <style>
        {`
          .animate-fadein {
            animation: fadeInUp 0.5s, fadeOut 0.5s 3s;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeOut {
            to { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;

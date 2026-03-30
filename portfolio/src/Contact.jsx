import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m09w864",
      "template_dnjvtdj",
      e.target,
      "QsVvCr24_9Y3KBTcB"
    )
    .then(() => {
      alert("Message sent successfully ✅");
    })
    .catch(() => {
      alert("Failed to send ❌");
    });

    e.target.reset();
  };

  return (
    <section className="bg-slate-950 min-h-screen flex items-center justify-center px-4 sm:px-6 py-10" id="contact">

      <div className="w-full max-w-6xl backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-5 sm:p-6 md:p-10">

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500 text-center mb-3">
          Contact Me
        </h1>

        <p className="text-gray-400 text-center mb-8 sm:mb-10 text-sm sm:text-base">
          Let’s connect and build something amazing 🚀
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* FORM */}
          <div>
            <form onSubmit={sendEmail} className="grid gap-4 sm:gap-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg bg-slate-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg bg-slate-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="p-3 rounded-lg bg-slate-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="p-3 rounded-lg bg-slate-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-3 rounded-lg font-semibold text-sm sm:text-base"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* MAP */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-full rounded-xl overflow-hidden border border-gray-700">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3933.763924058396!2d77.246681!3d8.183561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTEnMDAuOCJOIDc3wrAxNCc0OC4xIkU!5e1!3m2!1sen!2sin!4v1774892896175!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
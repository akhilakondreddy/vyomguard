import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

const App = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) => {
    const s = document.getElementById(id);
    if (s) {
      containerRef.current.scrollTo({
        left: s.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const vw = window.innerWidth;
      let current = "hero";

      for (const item of navItems) {
        const sec = document.getElementById(item.id);
        if (sec && scrollLeft >= sec.offsetLeft - vw / 2) {
          current = item.id;
        }
      }
      setActive(current);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Google Fonts Import */}
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600;800&display=swap');"
        }
      </style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full bg-[#1a1a1acc] backdrop-blur-sm z-50 flex justify-between items-center px-8 py-4">
        <div className="text-3xl font-extrabold tracking-widest text-white select-none font-poppins">
          VyomGarud
        </div>

        <ul className="flex space-x-8 text-white font-semibold text-sm">
          {navItems.slice(0, -1).map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer border-b-2 pb-0.5 transition duration-300 ${
                active === id
                  ? "border-vyom"
                  : "border-transparent hover:border-vyom"
              }`}
            >
              {label}
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-1 rounded-full font-semibold border-2 border-vyom text-vyom hover:bg-vyom hover:text-[#222222] transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* MAIN SCROLLER */}
      <main
        ref={containerRef}
        className="flex h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth pt-[72px]"
      >
        {/* HERO */}
        <section
          id="hero"
          className="snap-start flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#111111]"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-white max-w-4xl px-6 font-poppins text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeSlide}
            transition={{ duration: 0.8 }}
          >
            VYOM GUARD
          </motion.h1>

          <motion.p
            className="text-vyom text-xl mt-6 font-semibold font-inter"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Autonomous drone technology for the future.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection("about")}
            className="mt-12 px-8 py-3 bg-vyom rounded-full font-semibold text-[#222222] hover:bg-[#e66b00] transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn More
          </motion.button>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="snap-start flex-shrink-0 w-screen h-screen bg-[#1b1b1b] px-12 md:px-24 flex flex-col justify-center"
        >
          <motion.h2
            className="text-4xl font-bold text-white border-b-4 border-vyom inline-block mb-6 font-poppins"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8 }}
          >
            About VyomGarud
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-3xl leading-relaxed font-inter"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            VyomGarud pioneers autonomous UAV innovation, delivering
            precision-engineered, reliable drones designed to meet modern
            military and industrial challenges. Our mission is to push aerial
            autonomy to new heights with unmatched performance and safety.
          </motion.p>
        </section>

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="snap-start flex-shrink-0 w-screen h-screen bg-[#222222] px-12 md:px-24 flex flex-col justify-center"
        >
          <motion.h2
            className="text-4xl font-bold text-white border-b-4 border-vyom inline-block mb-10 font-poppins"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8 }}
          >
            Our Capabilities
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                title: "Surveillance UAV",
                description:
                  "High endurance, real-time aerial surveillance for any terrain.",
              },
              {
                title: "Combat UAV",
                description:
                  "Robust, precision-enabled drones designed for tactical operations.",
              },
              {
                title: "Autonomous Navigation",
                description:
                  "Advanced AI algorithms for obstacle-free, self-guided flight.",
              },
              {
                title: "Payload Delivery",
                description:
                  "Secure, efficient transport of payloads in any environment.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-[#2a2a2a] p-6 rounded-lg border-2 border-transparent hover:border-vyom transition"
                variants={fadeSlide}
              >
                <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-inter">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* HIGHLIGHTS */}
        <section
          id="highlights"
          className="snap-start flex-shrink-0 w-screen h-screen bg-[#111111] text-white px-12 md:px-24 flex flex-col justify-center"
        >
          <motion.h2
            className="text-4xl font-bold border-b-4 border-vyom inline-block mb-10 font-poppins"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8 }}
          >
            Highlights
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row gap-8 max-w-6xl"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                title: "BREAKING THE MOULD",
                text: "We challenge the status quo and bring innovation to every step.",
              },
              {
                title: "NO SHORTCUTS",
                text: "We build everything from scratch for complete control and performance.",
              },
              {
                title: "END TO END MASTERY",
                text: "Precision engineering through full in-house manufacturing.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-[#222222] rounded-lg border-2 border-vyom p-6 hover:border-[#ff9d33] transition"
                variants={fadeSlide}
              >
                <h3 className="text-2xl font-extrabold mb-3">{item.title}</h3>
                <p className="font-inter text-lg font-normal">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="snap-start flex-shrink-0 w-screen h-screen bg-[#1b1b1b] px-12 md:px-24 flex flex-col justify-center text-white"
        >
          <motion.h2
            className="text-4xl font-bold border-b-4 border-vyom inline-block mb-6 font-poppins"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          <motion.form
            className="flex flex-col max-w-lg space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeSlide}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Form stub)");
            }}
          >
            <label className="flex flex-col font-semibold">
              Name
              <input
                type="text"
                required
                className="mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-vyom"
              />
            </label>

            <label className="flex flex-col font-semibold">
              Email
              <input
                type="email"
                required
                className="mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-vyom"
              />
            </label>

            <label className="flex flex-col font-semibold">
              Message
              <textarea
                rows="5"
                required
                className="mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-vyom"
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-max px-8 py-3 bg-vyom rounded-full font-semibold text-[#222222] hover:bg-[#e66b00] transition"
            >
              Send Message
            </button>
          </motion.form>
        </section>
      </main>
    </>
  );
};

export default App;

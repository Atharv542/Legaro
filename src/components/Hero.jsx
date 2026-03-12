import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Sparkles, Quote } from "lucide-react";
import shivamImg from "../assets/Shivam.png";
import ishaanImg from "../assets/Ishan.png";
import bgImage from "../assets/hero-bg1.jpg";

/* ========================= */
/*   Founder Data            */
/* ========================= */

const founders = [
  {
    name: "Shivam",
    role: "Founder & CEO",
    tagline: "Visionary. Builder. Leader.",
    bio: "Shivam built Legaro with a mission to empower young entrepreneurs and turn bold ideas into thriving businesses.",
    quote: "Every great business starts as a bold, uncomfortable idea.",
    image: shivamImg,
    accentColor: "#4aa3ff",
    instagram:
      "https://www.instagram.com/theshivammgarg",
    linkedin:
      "https://www.linkedin.com/in/shivam-garg-aaa51130a",
  },
  {
    name: "Ishan",
    role: "Co-Founder & COO",
    tagline: "Strategist. Creator. Mentor.",
    bio: "Ishaan brings strategic clarity and creativity to every program at Legaro, ensuring every founder leaves with real momentum.",
    quote: "Growth happens at the edge of your comfort zone.",
    image: ishaanImg,
    accentColor: "#f2c46d",
    instagram:
      "https://www.instagram.com/theishaangarg",
    linkedin:
      "https://www.linkedin.com/in/ishan-garg-603a4a317",
  },
];

/* ========================= */
/*   Founder Card            */
/* ========================= */

function FounderCard({ founder }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Image */}

      <div className="flex justify-center w-full overflow-hidden">

        <img
          src={founder.image}
          alt={founder.name}
          className="rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm object-cover shadow-2xl"
        />

      </div>

      {/* Text */}

      <div className="flex flex-col gap-5 text-white text-center md:text-left">

        <span
          className="uppercase tracking-[0.25em] text-xs"
          style={{ color: founder.accentColor }}
        >
          {founder.tagline}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
          {founder.name}
        </h2>

        <p
          className="text-base sm:text-lg font-medium"
          style={{
            background: "linear-gradient(90deg,#4aa3ff,#f2c46d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {founder.role}
        </p>

        <div
          className="border-l-4 pl-4 italic text-sm sm:text-base"
          style={{ borderColor: founder.accentColor }}
        >
          <Quote size={18} className="opacity-40 mb-2" />
          {founder.quote}
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {founder.bio}
        </p>

        {/* SOCIAL ICONS */}

        <div className="flex justify-center md:justify-start gap-4 mt-2">

          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid #1B1F32",
              background: "rgba(20,22,35,0.5)",
              color: "#9CA3AF",
            }}
          >
            <Linkedin size={20} />
          </a>

          <a
            href={founder.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid #1B1F32",
              background: "rgba(20,22,35,0.5)",
              color: "#9CA3AF",
            }}
          >
            <Instagram size={20} />
          </a>

        </div>

      </div>
    </motion.div>
  );
}

/* ========================= */
/*   About Section           */
/* ========================= */

export default function AboutSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      id="home"
      className="min-h-screen text-white py-20 md:py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}

      <div
        ref={heroRef}
        className="text-center pb-16 md:pb-24 px-6"
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-6"
        >
          <span className="flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase rounded-full border border-blue-500/30 text-blue-400">
            <Sparkles size={14} />
            Leadership Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="block">The Visionaries</span>

          <span
            style={{
              background:
                "linear-gradient(135deg,#4aa3ff,#f2c46d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powering Legaro
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-400 text-base sm:text-lg"
        >
          Entrepreneurs, strategists, and mentors dedicated
          to building the next generation of founders and
          innovators.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={heroInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="mx-auto mt-10 h-[2px] w-40 sm:w-48"
          style={{
            background:
              "linear-gradient(90deg, transparent, #4aa3ff, #f2c46d, transparent)",
          }}
        />
      </div>

      {/* FOUNDERS */}

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20 md:gap-32">

        {founders.map((founder) => (
          <FounderCard key={founder.name} founder={founder} />
        ))}

      </div>

    </section>
  );
}
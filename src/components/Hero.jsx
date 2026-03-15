import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Sparkles, Quote } from "lucide-react";
import shivamImg from "../assets/Shivam2.jpeg";
import ishaanImg from "../assets/ishan2.jpg";
import bgImage from "../assets/hero-bg1.jpg";

/* ========================= */
/*   Founder Data            */
/* ========================= */

const founders = [
  {
    name: "Shivam Garg",
    role: "Founder & CEO",
    tagline: "Visionary. Builder. Leader.",
    bio: "I built Legaro because it was needed - no one else in the scene was good enough.",
    quote: "Love what you do, do what you love.",
    image: shivamImg,
    accentColor: "#4aa3ff",
    instagram: "https://www.instagram.com/theshivammgarg",
    linkedin: "https://www.linkedin.com/in/shivam-garg-aaa51130a",
  },
  {
    name: "Ishan",
    role: "Co-Founder & CMO",
    tagline: "Executer. Field-leader. Right hand.",
    bio: "I lead the execution at Legaro and believe in the spirit of Yuimaaru.",
    quote: "Growth happens at the edge of your comfort zone.",
    image: ishaanImg,
    accentColor: "#f2c46d",
    instagram: "https://www.instagram.com/theishaangarg",
    linkedin: "https://www.linkedin.com/in/ishan-garg-603a4a317",
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

      {/* IMAGE WITH HOVER ANIMATION */}

      <motion.div
        whileHover={{ rotateY: 6, rotateX: 4, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center perspective"
      >

        <div className="relative">

          {/* Glow background */}
          <div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{ background: founder.accentColor }}
          />

          <motion.img
            src={founder.image}
            alt={founder.name}
            className="relative rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm object-cover shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

        </div>

      </motion.div>

      {/* TEXT */}

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="flex flex-col gap-5 text-white text-center md:text-left"
      >

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="uppercase tracking-[0.25em] text-xs"
          style={{ color: founder.accentColor }}
        >
          {founder.tagline}
        </motion.span>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-black"
        >
          {founder.name}
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          className="text-base sm:text-lg font-medium"
          style={{
            background: "linear-gradient(90deg,#4aa3ff,#f2c46d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {founder.role}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            show: { opacity: 1, x: 0 },
          }}
          className="border-l-4 pl-4 italic text-sm sm:text-base"
          style={{ borderColor: founder.accentColor }}
        >
          <Quote size={18} className="opacity-40 mb-2" />
          {founder.quote}
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          {founder.bio}
        </motion.p>

        {/* SOCIAL ICONS */}

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          className="flex justify-center md:justify-start gap-4 mt-2"
        >

          {[{ icon: Linkedin, link: founder.linkedin },
            { icon: Instagram, link: founder.instagram }].map(
            ({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid #1B1F32",
                  background: "rgba(20,22,35,0.6)",
                  color: "#9CA3AF",
                }}
              >
                <Icon size={20} />
              </motion.a>
            )
          )}

        </motion.div>

      </motion.div>
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
      className="relative min-h-screen text-white py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* FLOATING PARTICLES */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* HEADER */}

      <div ref={heroRef} className="text-center pb-16 md:pb-24 px-6">

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
          <span className="block">Making Content that performs</span>

          <span
            style={{
              background: "linear-gradient(135deg,#4aa3ff,#f2c46d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Building Brands that last
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-400 text-base sm:text-lg"
        >
          We work on only two things: building long-term relationships and maintaining 100% transparency.
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
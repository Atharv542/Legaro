import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Sparkles, Quote } from "lucide-react";
import shivamImg from "../assets/Shivam2.jpeg";
import bgImage from "../assets/hero-bg1.jpg";

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
    name: "Ishan Garg",
    role: "Co-Founder & CMO",
    tagline: "Executer. Field-leader. Right hand.",
    bio: "I lead the execution at Legaro and believe in the spirit of Yuimaaru.",
    quote: "Growth happens at the edge of your comfort zone.",
    image: "https://res.cloudinary.com/djkmvvviu/image/upload/v1773596138/ishan2_y7ysbu.png",
    accentColor: "#f2c46d",
    instagram: "https://www.instagram.com/theishaangarg",
    linkedin: "https://www.linkedin.com/in/ishan-garg-603a4a317",
  },
];

function FounderCard({ founder }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 2xl:gap-16 items-center"
    >
      {/* IMAGE */}
      <motion.div
        whileHover={{ rotateY: 6, rotateX: 4, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{ background: founder.accentColor }}
          />
          <motion.img
            src={founder.image}
            alt={founder.name}
            className="relative rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm lg:max-w-md 2xl:max-w-lg object-cover shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="flex flex-col gap-5 2xl:gap-7 text-center md:text-left"
        style={{ color: "white" }}
      >
        <motion.span
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="uppercase tracking-[0.25em] text-xs 2xl:text-sm"
          style={{ color: founder.accentColor }}
        >
          {founder.tagline}
        </motion.span>

        <motion.h2
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black"
        >
          {founder.name}
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="text-base sm:text-lg 2xl:text-xl font-medium"
          style={{ color: founder.accentColor }}
        >
          {founder.role}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="border-l-4 pl-4 italic text-sm sm:text-base 2xl:text-lg"
          style={{ borderColor: founder.accentColor }}
        >
          <Quote size={18} className="opacity-40 mb-2" />
          {founder.quote}
        </motion.div>

        <motion.p
          className="text-sm sm:text-base 2xl:text-lg leading-relaxed"
          style={{ color: "#d1d5db" }}
        >
          {founder.bio}
        </motion.p>

        {/* SOCIAL */}
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          {[
            { icon: Linkedin, link: founder.linkedin },
            { icon: Instagram, link: founder.instagram },
          ].map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                border: "1px solid #1B1F32",
                background: "rgba(20,22,35,0.6)",
                color: "#9CA3AF",
              }}
            >
              <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.7)" }}
      />

      <div className="relative z-10 w-full max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-12 py-20 2xl:py-32">
        <div ref={heroRef} className="text-center mb-16 2xl:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="flex justify-center mb-6 2xl:mb-10"
          >
            <span
              className="flex items-center gap-2 px-5 py-2 2xl:px-7 2xl:py-3 text-xs 2xl:text-sm tracking-widest uppercase rounded-full"
              style={{
                border: "1px solid rgba(74,163,255,0.3)",
                color: "#60a5fa",
              }}
            >
              <Sparkles size={14} />
              Leadership Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl font-black leading-tight mb-6 2xl:mb-10"
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
            className="max-w-xl 2xl:max-w-3xl mx-auto text-base sm:text-lg 2xl:text-xl"
            style={{ color: "#9ca3af" }}
          >
            We work on only two things: building long-term relationships and maintaining 100% transparency.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 2xl:gap-32">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
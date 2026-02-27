import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220,20%,6%,0.4) 0%, hsl(220,20%,6%,0.7) 60%, hsl(220,20%,6%) 100%)",
        }}
      />

      {/* Floating Gold Orb */}
      <div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ background: "hsl(38,95%,40%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">

        {/* Tag */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="flex justify-center mb-6"
        >
          <span className="flex items-center gap-2 px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(210,100%,56%)] text-[hsl(210,100%,56%)]">
            <Sparkles size={12} />
            Welcome to Legaro Pvt Ltd
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6">

          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="block"
          >
            Where
          </motion.span>

          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
            className="block text-[hsl(210,96%,64%)]"
          >
            Ideas
          </motion.span>

          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.6}
            className="block"
          >
            Come Alive
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.8}
          className="max-w-xl mx-auto text-base md:text-lg text-[hsl(220,10%,55%)] mb-10 leading-relaxed"
        >
          Empowering the next generation of entrepreneurs through immersive
          workshops, personalised mentorship, and bold creative thinking.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#workshops")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[hsl(210,100%,56%)] text-black hover:brightness-110 transition"
          >
            <Sparkles size={16} />
            Explore Workshops
          </button>

          <button
            onClick={() =>
              document
                .querySelector("#call")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl cursor-pointer font-semibold border border-[hsl(220,16%,16%)] text-[hsl(210,20%,95%)] hover:bg-[hsl(220,18%,9%)] transition"
          >
            Book a 1:1 Call
          </button>
        </motion.div>

      </div>
    </section>
  );
}
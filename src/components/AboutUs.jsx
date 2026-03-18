
import { Target, Zap, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const services = [
  {
    icon: Target,
    title: "Social Media Management",
    tag: "Strategy · Content · Growth",
    accent: "hsl(210,100%,56%)",
    accentBg: "hsl(210,100%,56%,0.1)",
    number: "01",
  },
  {
    icon: Zap,
    title: "Influencer Marketing & Talent Management",
    tag: "Campaigns · Creators · Results",
    accent: "hsl(38,95%,55%)",
    accentBg: "hsl(38,95%,55%,0.1)",
    number: "02",
  },
  {
    icon: Users,
    title: "IP Building",
    tag: "Branding · Monetisation · Legacy",
    accent: "hsl(210,100%,56%)",
    accentBg: "hsl(210,100%,56%,0.1)",
    number: "03",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "hsl(220,20%,6%)", color: "hsl(210,20%,95%)" }}
    >
      {/* Background Glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Our Story + Video */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex px-4 py-1.5 text-xs tracking-[0.2em] uppercase rounded-full mb-4"
              style={{
                border: "1px solid hsl(210,100%,56%)",
                color: "hsl(210,100%,56%)",
              }}
            >
              Our Story
            </motion.span>

           

            {/* Video */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden aspect-5/3"
              style={{
                border: "1px solid hsl(210,100%,56%,0.25)",
    boxShadow: "0 0 60px hsl(210,100%,56%,0.12)",background: "hsl(220,20%,6%)"

              }}
            >
              <video
  src="https://res.cloudinary.com/djkmvvviu/video/upload/v1773494224/WEBSITE_REEL_1_1_kookdt.mp4"
  controls
  playsInline
  className="w-full h-full object-contain"
/>
            </motion.div>
          </motion.div>

          {/* Right — Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5 md:-mb-18 "
          >
           

            {services.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                whileHover={{ x: 8, transition: { duration: 0.25 } }}
                className="relative  rounded-2xl p-6 flex items-center gap-5 cursor-pointer group overflow-hidden"
                style={{
                  background: "hsl(220,18%,9%)",
                  border: "1px solid hsl(220,16%,16%)",
                  "--accent": item.accent
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.accent}50`;
                  e.currentTarget.style.boxShadow = `0 0 40px ${item.accent}15, inset 0 0 40px ${item.accent}05`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(220,16%,16%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl font-black opacity-[0.04] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.08]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.accentBg }}
                >
                  <item.icon size={22} style={{ color: item.accent }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-lg mb-1 transition-colors duration-300"
                    style={{
                      color: "hsl(210,20%,95%)",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {item.title}
                    </span>
                  </h3>

                  <span
                    className="text-xs tracking-wider uppercase"
                    style={{ color: item.accent, opacity: 0.7 }}
                  >
                    {item.tag}
                  </span>
                </div>

              
              </motion.div>
            ))}

            
          </motion.div>

        </div>
      </div>
    </section>
  );
}


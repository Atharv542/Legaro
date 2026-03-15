import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Video
} from "lucide-react";
import { motion } from "framer-motion";
import shivamImg from "../assets/Shivam3.jpeg";
import shivamKumarImg from "../assets/Shivam_Kumar.webp";

const workshops = [
  {
    title: "Content Creation Workshop",
    desc: "All you need to know about content creation",
    duration: "5 April 2026",
    seats: "Limited Seats",
    cta: "Book Your Spot",
    link: "https://exly.live/t4KtTT",
    color: "blue",
    number: "01",
    image: shivamImg,
    name: "Shivam Garg",
    icon: Video,
  },
  {
    title: "Be Independent",
    desc: "Make your own money",
    duration: "1 April 2026",
    seats: "Limited Seats",
    cta: "Book Your Spot",
    link: "https://exly.live/r0bnyu",
    color: "gold",
    number: "02",
    image: shivamImg,
    name: "Shivam Garg",
    icon: Sparkles,
  },
  {
    title: "1:1 Call",
    desc: "For Personalised Content Creation Guide\nEarly Connect",
    duration: null,
    seats: null,
    cta: "Book Now",
    link: "https://shivam-garg.neetocal.com/meeting-with-shivam-garg",
    color: "blue",
    number: "03",
    image: shivamImg,
    name: "Shivam Garg",
  },
  {
    title: "1:1 Edit Call",
    desc: "If you truly want to learn motion graphics, also the tips and tricks to do them fast — he's the one to learn from.",
    duration: null,
    seats: null,
    cta: "Book Now",
    link: "https://shivam-kumar2.neetocal.com/meeting-with-shivam-kumar-2",
    color: "gold",
    number: "04",
    image: shivamKumarImg,
    name: "Shivam Kumar",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const blueAccent = "hsl(210,100%,56%)";
const goldAccent = "hsl(38,95%,55%)";

export default function WorkshopsSection() {
  return (
    <section
      id="workshops"
      className="py-24 relative overflow-hidden"
      style={{ background: "hsl(220,20%,4%)", color: "hsl(210,20%,95%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
        style={{ background: blueAccent }}
      />

      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04]"
        style={{ background: goldAccent }}
      />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.2em] rounded-full mb-6"
          style={{
            border: `1px solid ${blueAccent}`,
            color: blueAccent,
          }}
        >
          <Calendar size={12} />
          Paid Offerings
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black text-4xl md:text-6xl leading-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Level Up{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${blueAccent}, ${goldAccent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            With Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 italic max-w-xl mx-auto text-lg"
          style={{ color: "hsl(220,10%,55%)" }}
        >
          Learn from the ones who actually know it.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
        {workshops.map((workshop, index) => {
          const isBlue = workshop.color === "blue";
          const accent = isBlue ? blueAccent : goldAccent;

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Glow Border */}
              <div
                className="absolute -inset-[1px] rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: isBlue
                    ? `linear-gradient(135deg, ${blueAccent}, transparent 60%)`
                    : `linear-gradient(135deg, ${goldAccent}, transparent 60%)`,
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl p-7 h-full flex flex-col"
                style={{
                  background: "hsl(220,18%,8%)",
                  border: "1px solid hsl(220,16%,14%)",
                }}
              >
                {/* Number */}
                <span
                  className="absolute top-4 left-6 text-[7rem] font-black opacity-[0.03]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: accent,
                  }}
                >
                  {workshop.number}
                </span>

                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {workshop.icon && (
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${accent}20` }}
                      >
                        <workshop.icon size={18} style={{ color: accent }} />
                      </div>
                    )}

                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: accent }}
                    >
                      {workshop.name}
                    </span>
                  </div>

                  <div
                    className="w-16 h-16 rounded-full overflow-hidden"
                    style={{
                      boxShadow: `0 0 0 2px ${accent}, 0 0 20px ${accent}30`,
                    }}
                  >
                    <img
                      src={workshop.image}
                      alt={workshop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3
                  className="font-bold text-xl md:text-2xl mb-2"
                  style={{
                    color: "hsl(210,20%,95%)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {workshop.title}
                </h3>

                <p
                  className="mb-6 flex-1 text-sm whitespace-pre-line"
                  style={{ color: "hsl(220,10%,55%)" }}
                >
                  {workshop.desc}
                </p>

                {/* INFO ROW */}
                {(workshop.duration || workshop.seats) && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {workshop.duration && (
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                        style={{
                          border: `1px solid ${accent}40`,
                          color: accent,
                          background: `${accent}08`,
                        }}
                      >
                        <Clock size={13} />
                        {workshop.duration}
                      </div>
                    )}

                    {workshop.seats && (
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                        style={{
                          border: `1px solid ${accent}40`,
                          color: accent,
                          background: `${accent}08`,
                        }}
                      >
                        <Users size={13} />
                        {workshop.seats}
                      </div>
                    )}
                  </div>
                )}

                <a
                  href={workshop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-fit cursor-pointer px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm"
                    style={{
                      background: accent,
                      color: "hsl(220,20%,4%)",
                    }}
                  >
                    {workshop.cta}
                    <ArrowRight size={15} />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
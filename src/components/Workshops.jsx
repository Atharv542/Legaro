import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const workshops = [
  {
    title: "Entrepreneurship Bootcamp",
    desc: "A high-intensity, hands-on workshop where you go from zero to building your first business model in 2 days. Perfect for beginners with big dreams.",
    duration: "2 Days",
    capacity: "20–30 seats",
    level: "Beginner",
    color: "blue",
    number: "01",
  },
  {
    title: "Personal Branding Masterclass",
    desc: "Learn how to craft a magnetic personal brand on Instagram and LinkedIn that attracts opportunities.",
    duration: "1 Day",
    capacity: "15–25 seats",
    level: "All Levels",
    color: "gold",
    number: "02",
  },
  {
    title: "Social Media Growth Hacking",
    desc: "Unlock the algorithms. Understand reels, content strategy, and engagement tactics.",
    duration: "1 Day",
    capacity: "20 seats",
    level: "Intermediate",
    color: "blue",
    number: "03",
  },
  {
    title: "Mindset & Leadership Workshop",
    desc: "Develop an unshakeable mindset and sharpen leadership skills.",
    duration: "Half Day",
    capacity: "25–40 seats",
    level: "All Levels",
    color: "gold",
    number: "04",
  },
];

const duplicated = [...workshops, ...workshops];

export default function WorkshopsSection() {
  const [expanded, setExpanded] = useState(0);
  const [paused, setPaused] = useState(false);

  const expandedWorkshop = workshops[expanded];
  const isBlue = expandedWorkshop.color === "blue";

  return (
    <section id="workshops" className="py-24 bg-gray-950 text-white overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1 text-xs uppercase tracking-widest rounded-full border border-blue-500 text-blue-400 mb-6">
          <Calendar size={12} />
          Workshops
        </span>

        <h2 className="font-black text-4xl md:text-6xl">
          Level Up with Our <span className="text-blue-500">Workshops</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto text-lg">
          Hands-on immersive sessions designed to spark ideas and build real momentum.
        </p>
      </div>

      {/* MOVING CAROUSEL */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: paused ? 0 : ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {duplicated.map((w, i) => {
            const originalIndex = i % workshops.length;
            const cardBlue = w.color === "blue";

            return (
              <div
                key={i}
                onClick={() => setExpanded(originalIndex)}
                className={`relative w-[340px] flex-shrink-0 p-6 rounded-2xl border cursor-pointer bg-gray-900 transition duration-300 ${
                  cardBlue
                    ? "border-blue-500/30 hover:border-blue-500"
                    : "border-yellow-500/30 hover:border-yellow-500"
                }`}
              >
                <span
                  className={`absolute -top-2 -right-2 text-8xl font-black opacity-5 ${
                    cardBlue ? "text-blue-500" : "text-yellow-500"
                  }`}
                >
                  {w.number}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-md font-bold uppercase ${
                    cardBlue
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {w.level}
                </span>

                <h3 className="mt-4 font-bold text-lg">{w.title}</h3>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {w.desc}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {w.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {w.capacity}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* EXPANDED PANEL */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={expanded}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-3xl p-16 border bg-gradient-to-r from-gray-900 to-gray-950 overflow-hidden ${
              isBlue ? "border-blue-500/40" : "border-yellow-500/40"
            }`}
          >
            <span
              className={`absolute top-10 right-10 text-[10rem] font-black opacity-5 ${
                isBlue ? "text-blue-500" : "text-yellow-500"
              }`}
            >
              {expandedWorkshop.number}
            </span>

            <div className="flex flex-col md:flex-row justify-between gap-16 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase ${
                      isBlue
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {expandedWorkshop.level}
                  </span>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-black text-2xl md:text-4xl mb-6 leading-tight">
                  {expandedWorkshop.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {expandedWorkshop.desc}
                </p>

                <div className="flex gap-4">
                  <div className={`flex items-center gap-2 px-6 py-3 md:px-5 md:py-3 rounded-xl  bg-gray-900 text-sm  ${
                      isBlue
                        ? "border border-blue-400/50"
                        :"border border-yellow-400/50"
                    }`}>
                    <Clock size={16} className={` ${
                      isBlue
                        ? " text-blue-400 "
                        :" text-yellow-400"
                    }`} />
                    {expandedWorkshop.duration}
                  </div>

                  <div className={`flex items-center gap-2 px-6 py-3 md:px-5 md:py-3 rounded-xl   text-sm  ${
                      isBlue
                        ? "border border-blue-400/50 "
                        :"border border-yellow-400/50"
                    }`}>
                    <Users size={16}  className={` ${
                      isBlue
                        ? " text-blue-400 "
                        :" text-yellow-400"
                    }`}  />
                    {expandedWorkshop.capacity}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`self-center px-6 py-3 rounded-2xl font-bold text-lg flex mt-10 md:mt-47 -mr-6 items-center gap-3 ${
                  isBlue
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-yellow-500 hover:bg-yellow-400 text-black"
                }`}
              >
                Book Your Spot
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ===== RESTORED CTA WITH ANIMATION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-12 md:p-16 text-center border border-blue-500/20 mt-20 bg-gradient-to-r from-gray-900 to-gray-950 overflow-hidden"
        >
           <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
              style={{ background: "hsl(210,100%,56%)" }}
            />
          <Sparkles className="mx-auto mb-4 text-yellow-400" size={28} />

          <h3 className="font-black text-3xl md:text-5xl mb-6">
            Want us at your school or college?
          </h3>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            We conduct custom workshops for institutions. Let's co-create an
            experience your students will talk about for years.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3  md:px-8 md:py-4 cursor-pointer rounded-2xl font-bold text-md px-6 py-3 md:text-lg bg-blue-600 hover:bg-blue-500"
          >
            Book a Workshop via Exly
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const workshops = [
  {
    title: "Entrepreneurship Bootcamp",
    desc: "A high-intensity, hands-on workshop where you go from zero to building your first business model in 2 days.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="py-24 bg-gray-950 text-white">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">

        <span className="inline-flex items-center gap-2 px-4 py-1 text-xs uppercase tracking-widest rounded-full border border-blue-500 text-blue-400 mb-6">
          <Calendar size={12} />
          Workshops
        </span>

        <h2 className="font-black text-4xl md:text-6xl">
          Level Up with Our{" "}
          <span className="text-blue-500">Workshops</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto text-lg">
          Hands-on immersive sessions designed to spark ideas and build real momentum.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {workshops.map((workshop, index) => {
          const isBlue = workshop.color === "blue";

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
                className={`absolute -inset-[1px] rounded-3xl opacity-40 group-hover:opacity-70 transition ${
                  isBlue
                    ? "bg-gradient-to-br from-blue-500 via-blue-500/20 to-transparent"
                    : "bg-gradient-to-br from-yellow-500 via-yellow-500/20 to-transparent"
                }`}
              />

              {/* Card */}
              <div className="relative rounded-3xl bg-gray-900 p-8 h-full flex flex-col">

                {/* Background Number */}
                <span
                  className={`absolute top-4 right-6 text-[7rem] font-black opacity-5 ${
                    isBlue ? "text-blue-500" : "text-yellow-500"
                  }`}
                >
                  {workshop.number}
                </span>

                {/* Top Row */}
                <div className="flex items-center gap-4 mb-6">

                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                      isBlue
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {workshop.level}
                  </span>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl mb-4">
                  {workshop.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-1">
                  {workshop.desc}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-3 mb-6">

                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border ${
                      isBlue
                        ? "border-blue-400/40 text-blue-400"
                        : "border-yellow-400/40 text-yellow-400"
                    }`}
                  >
                    <Clock size={14} />
                    {workshop.duration}
                  </div>

                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border ${
                      isBlue
                        ? "border-blue-400/40 text-blue-400"
                        : "border-yellow-400/40 text-yellow-400"
                    }`}
                  >
                    <Users size={14} />
                    {workshop.capacity}
                  </div>

                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-fit px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                    isBlue
                      ? "bg-blue-600 hover:bg-blue-500"
                      : "bg-yellow-500 hover:bg-yellow-400 text-black"
                  }`}
                >
                  Book Your Spot
                  <ArrowRight size={16} />
                </motion.button>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 mt-24 text-center">

        <Sparkles className="mx-auto mb-4 text-yellow-400" size={28} />

        <h3 className="font-black text-3xl md:text-5xl mb-6">
          Want us at your school or college?
        </h3>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          We conduct custom workshops for institutions. Let's co-create an experience your students will talk about for years.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-blue-600 hover:bg-blue-500"
        >
          Book a Workshop via Exly
          <ArrowRight size={18} />
        </motion.button>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import brandsBg from "../assets/brands-bg.jpg";

const brandsRow1 = [
  { name: "Little Joys", color: "#00C853", emoji: "🌿" },
  { name: "Troovy", color: "#4285F4", emoji: "🔷" },
  { name: "Axis Max Life", color: "#ED1C24", emoji: "❤️" },
  { name: "Lenskart", color: "#00AEEF", emoji: "👓" },
  { name: "Noise Junior", color: "#1E73FF", emoji: "🎧" },
  { name: "Coco Colours", color: "#F9A825", emoji: "🎨" },
];

const brandsRow2 = [
  { name: "Lenskart", color: "#00AEEF", emoji: "👓" },
  { name: "Little Joys", color: "#00C853", emoji: "🌿" },
  { name: "Noise Junior", color: "#1E73FF", emoji: "🎧" },
  { name: "Axis Max Life", color: "#ED1C24", emoji: "❤️" },
  { name: "Coco Colours", color: "#F9A825", emoji: "🎨" },
  { name: "Troovy", color: "#4285F4", emoji: "🔷" },
];



export default function BrandsSection() {
  const navigate = useNavigate();

  return (
    <section
      id="brands"
      className="py-28 relative overflow-hidden border-t"
      style={{
        background: "hsl(220,20%,6%)",
        borderColor: "hsl(220,16%,16%)",
        color: "hsl(210,20%,95%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${brandsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* BLUE GLOW */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "hsl(217,70%,50%)", opacity: 0.09 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.09, 0.13, 0.09] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ORANGE GLOW */}
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "hsl(38,95%,55%)", opacity: 0.09 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.09, 0.13, 0.09] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="flex items-center gap-2 px-5 py-1.5 rounded-full text-sm border"
            style={{
              borderColor: "hsla(38,92%,55%,0.35)",
              color: "hsl(38,92%,65%)",
              background: "hsla(38,92%,55%,0.07)",
            }}
          >
            <Sparkles size={13} />
            Trusted Partners
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="block">Powering Growth for</span>

          <span
            className="block mt-2"
            style={{
              background:
                "linear-gradient(100deg, hsl(38,92%,60%), hsl(217,70%,65%), hsl(280,60%,80%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            World-Class Brands
          </span>
        </h2>

        <p className="text-center mt-5 max-w-xl mx-auto text-base text-gray-400">
          Legaro collaborates with visionary brands and creators to build
          meaningful partnerships and campaigns that truly move the needle.
        </p>

        

        {/* Carousel Row 1 */}
        <div className="overflow-hidden mt-14">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
              <BrandPill key={i} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* Carousel Row 2 */}
        <div className="overflow-hidden mt-5">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          >
            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
              <BrandPill key={i} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-5 mt-16 flex-wrap">

          <button
            className="flex cursor-pointer items-center gap-2 px-7 py-3 rounded-xl font-semibold"
            style={{
              background: "hsl(38,92%,55%)",
              color: "black",
            }}
          >
            <Phone size={16} />
            Book 1:1 Call
            <ArrowRight size={16} />
          </button>

          <button
            className="flex items-center gap-2 px-7 py-3 hover:border hover:border-[#F6A926]/50 hover:bg-[#F6A926]/5 rounded-xl border border-[#1B1F32] cursor-pointer font-semibold transition"
            onClick={() => navigate("/kidfluencer-deck")}
          >
            View Kidfluencer Deck
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </section>
  );
}

function BrandPill({ brand }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative min-w-[190px] flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer"
      style={{
        background: hovered ? "hsl(220,18%,12%)" : "hsl(220,18%,9%)",
        border: `1px solid ${
          hovered ? brand.color + "55" : "hsl(220,16%,15%)"
        }`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -2 }}
    >
      {/* Color dot */}
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{
          background: brand.color,
          boxShadow: `0 0 8px ${brand.color}`,
        }}
      />

      {/* Emoji */}
      <span>{brand.emoji}</span>

      {/* Name */}
      <span
        className="font-semibold text-sm"
        style={{ color: hovered ? brand.color : "#d1d5db" }}
      >
        {brand.name}
      </span>
    </motion.div>
  );
}
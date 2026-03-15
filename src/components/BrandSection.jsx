import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import brandsBg from "../assets/brands-bg1.jpg";

import lenskartLogo from "../assets/lenskart.png";
import littlejoysLogo from "../assets/littlejoys.png";
import troovyLogo from "../assets/troovy.png";
import axismaxlifeLogo from "../assets/axismaxlife.png";
import noiseLogo from "../assets/noise.png";
import cococoloursLogo from "../assets/cococolours.png";

const brandsRow1 = [
  { name: "Little Joys", color: "#00C853", logo: littlejoysLogo },
  { name: "Troovy", color: "#4285F4", logo: troovyLogo },
  { name: "Axis Max Life", color: "#ED1C24", logo: axismaxlifeLogo },
  { name: "Lenskart", color: "#00AEEF", logo: lenskartLogo },
  { name: "Noise", color: "#1E73FF", logo: noiseLogo },
  { name: "Coco Colours", color: "#F9A825", logo: cococoloursLogo },
];

const brandsRow2 = [
  { name: "Lenskart", color: "#00AEEF", logo: lenskartLogo },
  { name: "Little Joys", color: "#00C853", logo: littlejoysLogo },
  { name: "Noise", color: "#1E73FF", logo: noiseLogo },
  { name: "Axis Max Life", color: "#ED1C24", logo: axismaxlifeLogo },
  { name: "Coco Colours", color: "#F9A825", logo: cococoloursLogo },
  { name: "Troovy", color: "#4285F4", logo: troovyLogo },
];

export default function BrandsSection() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[#0c0f17] text-gray-200 border-t border-gray-800"
    >
      {/* Background texture (disabled on mobile) */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${brandsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Blue glow (disabled on mobile) */}
      {!isMobile && (
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "#2563eb", opacity: 0.1 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}

      {/* Orange glow (disabled on mobile) */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: "#f59e0b", opacity: 0.1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Row 1 */}
        <div className="overflow-hidden pt-24">
          <motion.div
            className="flex gap-4 md:gap-6 will-change-transform transform-gpu"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: isMobile ? 14 : 25,
              ease: "linear",
            }}
          >
            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
              <BrandCard key={`r1-${i}`} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mt-6">
          <motion.div
            className="flex gap-4 md:gap-6 will-change-transform transform-gpu"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: isMobile ? 16 : 30,
              ease: "linear",
            }}
          >
            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
              <BrandCard key={`r2-${i}`} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-16 pb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/kidfluencer-deck")}
            className="flex cursor-pointer items-center gap-2 px-8 py-3 rounded-xl font-semibold text-yellow-400 border border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition"
          >
            Meet Our Talents
            <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

function BrandCard({ brand }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="min-w-[180px] md:min-w-[260px] h-[110px] md:h-[120px] flex items-center justify-center px-6 md:px-8 rounded-xl cursor-pointer bg-[#121622]/70 border border-white/10 backdrop-blur-lg transition"
      style={{
        borderColor: hovered ? `${brand.color}55` : undefined,
        boxShadow: hovered
          ? `0 0 30px ${brand.color}20, inset 0 0 30px ${brand.color}10`
          : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-[120px] w-[120px] md:min-h-[100px] md:min-w-[100px] object-contain"
        loading="lazy"
        style={{
          filter: hovered
            ? brand.name === "Axis Max Life"
              ? "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(7472%) hue-rotate(356deg) brightness(95%) contrast(118%)"
              : "brightness(1) saturate(1)"
            : "brightness(0) invert(1) opacity(0.7)",
        }}
      />
    </motion.div>
  );
}
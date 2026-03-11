import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const brandsRow1 = [
  "Spotify",
  "Google",
  "Adobe",
  "Netflix",
  "Samsung",
  "Meta",
  "Amazon",
  "Nike",
];

const brandsRow2 = [
  "Nike",
  "Amazon",
  "Meta",
  "Samsung",
  "Netflix",
  "Google",
  "Spotify",
  "Adobe",
];

export default function BrandsSection() {
   const navigate = useNavigate();
  return (
    <section id="brands"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)] border-t border-[hsl(220,16%,16%)]"
    >

     

      {/* BLUE GLOW */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(217,70%,50%)" }}
      />

      {/* PURPLE GLOW */}
      <div
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full blur-[140px] opacity-10"
        style={{ background: "hsl(38,95%,55%)"}}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="px-4 py-1 rounded-full text-sm border"
            style={{
              borderColor: "hsl(38,92%,55%,0.4)",
              color: "hsl(38,92%,55%)",
              background: "hsl(38,92%,55%,0.08)",
            }}
          >
            ✨ Trusted Partners
          </div>
        </div>

        {/* Heading */}
    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

  <span className="block">
    Powering Growth for
  </span>

  <span
    className="block mt-2"
    style={{
      background:
        "linear-gradient(90deg, hsl(38,92%,55%), hsl(217,70%,50%), hsl(280,70%,90%))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    World-Class Brands
  </span>

</h2>

        <p className="text-center text-[hsl(220,10%,55%)] mt-4 max-w-2xl mx-auto">
          Legaro collaborates with visionary brands and creators to build
          meaningful partnerships and campaigns that move the needle.
        </p>

        {/* CAROUSEL ROW 1 */}
        <div className="overflow-hidden mt-16">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
              <BrandPill key={i} name={brand} />
            ))}
          </motion.div>
        </div>

        {/* CAROUSEL ROW 2 */}
        <div className="overflow-hidden mt-6">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
              <BrandPill key={i} name={brand} />
            ))}
          </motion.div>
        </div>

        

        {/* CTA */}
        <div className="flex justify-center gap-6 mt-16 flex-wrap">

          <button
            className="flex items-center cursor-pointer gap-2 px-7 py-3 rounded-xl font-semibold shadow-lg"
            style={{
              background: "hsl(38,92%,55%)",
              color: "black",
              boxShadow: "0 10px 40px hsl(38,92%,55%,0.35)",
            }}
          >
            <Phone size={18} />
            Book 1:1 Call
            <ArrowRight size={18} />
          </button>

          <button
            className="flex items-center gap-2 px-7 py-3 hover:border hover:border-[#F6A926]/50 hover:bg-[#F6A926]/5 rounded-xl border border-[#1B1F32] cursor-pointer font-semibold transition"
            onClick={() => navigate("/kidfluencer-deck")}
          >
            View Kidfluencer Deck
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}

function BrandPill({ name }) {

  const brandColors = {
    Spotify: "#1DB954",
    Google: "#4285F4",
    Adobe: "#FF0000",
    Netflix: "#E50914",
    Samsung: "#1E73FF",
    Meta: "#0A66FF",
    Amazon: "#FF9900",
    Nike: "#F5A623",
  };

  return (
    <div
      className="min-w-[160px] px-6 py-3 rounded-xl text-center font-medium transition hover:scale-105"
      style={{
        border: "1px solid hsl(220,16%,16%)",
        background: "hsl(220,18%,9%)",
        color: brandColors[name] || "hsl(210,20%,95%)",
      }}
    >
      {name}
    </div>
  );
}

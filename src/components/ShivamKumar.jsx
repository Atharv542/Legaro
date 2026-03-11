import { motion } from "framer-motion";
import { ArrowRight, Phone, Linkedin, Instagram } from "lucide-react";
import Shivam_Kumar from '../assets/Shivam_Kumar.webp'
export default function TeamMemberSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-neutral-950">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] bg-amber-400/10 top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[140px] bg-sky-400/10 bottom-[-150px] left-[-50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* PHOTO */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">

              {/* glow border */}
              <div className="absolute -inset-3 rounded-3xl blur-sm bg-gradient-to-br from-amber-400/30 to-sky-400/20" />

              {/* image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900">

                {/* IMAGE */}
                <img
                  src={Shivam_Kumar}
                  alt="Shivam Kumar"
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* gold dot */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            {/* tag */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-5 border border-amber-400/30 bg-amber-400/10 text-amber-400">
              Meet the Team
            </span>

            {/* name */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-2 text-neutral-100">
              Shivam Kumar
            </h2>

            {/* role */}
            <p className="text-lg font-medium mb-5 bg-gradient-to-r from-amber-400 to-sky-400 bg-clip-text text-transparent">
              Motion Graphic Designer
            </p>

            {/* description */}
            <p className="text-neutral-400 text-base leading-relaxed mb-6">
              A 15-year-old, absolute After Effects god with 3 years of experience.
            </p>

            {/* Founder's Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mb-8 rounded-2xl overflow-hidden border border-amber-400/25 bg-gradient-to-br from-amber-400/10 to-sky-400/10"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-gradient-to-b from-amber-400 to-sky-400" />

              <div className="pl-6 pr-5 py-5">

                <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3 text-amber-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Founder's Note
                </p>

                <p className="text-neutral-100 italic text-[15px] leading-relaxed">
                  "Isse tagda banda nahi hai bhaisahab, don't you dare to judge him
                  by his age — there's no animation in the scene that he's not
                  capable of creating."
                </p>

                <p className="text-neutral-300 italic text-sm leading-relaxed mt-3">
                  If you truly want to learn motion graphics, also the tips and
                  tricks to do them fast — he's the one to learn from.
                </p>

                <p className="text-neutral-500 text-xs mt-3 tracking-wide">
                  (Unbiased opinion)
                </p>

              </div>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mb-8">

             

              <a
                href="https://www.instagram.com/onlinebnda?igsh=MWVkZ2E1M251a2p5MA%3D%3D&utm_source=qr" target="_blank"
                className="w-11 h-11 rounded-xl border border-neutral-800 bg-neutral-800/50 flex items-center justify-center text-neutral-400 hover:text-white transition"
              >
                <Instagram size={20} />
              </a>

            </div>

            {/* CTA */}
            <button
              
              className="group px-8 py-4 cursor-pointer rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 bg-amber-400 text-black shadow-lg hover:shadow-amber-400/30"
            >
              <Phone size={18} />
              Book 1:1 Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
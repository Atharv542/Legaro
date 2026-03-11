import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Instagram,
  Youtube,
  Star,
  Users,
  Heart,
  Zap,
  Send,
  ChevronLeft,
  ArrowRight,
  Building2,
  Phone,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import kid1 from "../assets/anant.jpg";
import kid2 from "../assets/anant.jpg";
import kid3 from "../assets/anant.jpg";
import kid4 from "../assets/anant.jpg";
import kid5 from "../assets/anant.jpg";
import kid6 from "../assets/anant.jpg";

/* DATA */

const kids = [
  {
    id: 1,
    name: "Aryan Mehta",
    age: 14,
    image: kid1,
    niche: "Lifestyle",
    followers: "120K",
    engagement: "8.4%",
    platforms: ["instagram", "youtube"],
    skills: ["Storytelling", "Unboxing"],
    badge: "🔥 Trending",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 15,
    image: kid2,
    niche: "Tech",
    followers: "85K",
    engagement: "9.1%",
    platforms: ["instagram", "youtube"],
    skills: ["Product Reviews"],
    badge: "⚡ Rising Star",
  },
  {
    id: 3,
    name: "Kabir Singh",
    age: 16,
    image: kid3,
    niche: "Sports",
    followers: "200K",
    engagement: "7.2%",
    platforms: ["instagram", "youtube"],
    skills: ["Football"],
    badge: "🏆 Top Creator",
  },
  {
    id: 4,
    name: "Nisha Patel",
    age: 13,
    image: kid4,
    niche: "Art",
    followers: "60K",
    engagement: "11.3%",
    platforms: ["instagram"],
    skills: ["Painting"],
    badge: "🎨 Creative Genius",
  },
  {
    id: 5,
    name: "Dev Tiwari",
    age: 15,
    image: kid5,
    niche: "Gaming",
    followers: "300K",
    engagement: "6.8%",
    platforms: ["youtube", "instagram"],
    skills: ["Live Streams"],
    badge: "🎮 Gaming Pro",
  },
  {
    id: 6,
    name: "Zara Khan",
    age: 14,
    image: kid6,
    niche: "Fashion",
    followers: "95K",
    engagement: "10.5%",
    platforms: ["instagram"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
  },
];

const NICHES = ["All", "Lifestyle", "Tech", "Sports", "Art", "Gaming", "Fashion"];

/* PLATFORM ICON */

function PlatformIcon({ platform }) {
  if (platform === "instagram")
    return <Instagram size={13} className="text-pink-400" />;

  if (platform === "youtube")
    return <Youtube size={13} className="text-red-400" />;

  return null;
}

/* CREATOR CARD */

function KidCard({ kid, selected, onSelect }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={() => onSelect(kid)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-900
      ${
        selected
          ? "border-2 border-amber-400 shadow-lg shadow-amber-400/30"
          : "border border-neutral-800"
      }`}
    >
      {selected && (
        <CheckCircle2
          size={24}
          className="absolute top-3 right-3 text-amber-400"
        />
      )}

      <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400">
        {kid.badge}
      </div>

      <img
        src={kid.image}
        alt={kid.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">{kid.name}</h3>
            <p className="text-xs text-neutral-400">
              Age {kid.age} · {kid.niche}
            </p>
          </div>

          <div className="flex gap-1">
            {kid.platforms.map((p) => (
              <PlatformIcon key={p} platform={p} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-3 text-xs">
          <div className="flex items-center gap-1">
            <Users size={12} className="text-amber-400" />
            {kid.followers}
          </div>

          <div className="flex items-center gap-1">
            <Heart size={12} className="text-pink-400" />
            {kid.engagement}
          </div>
        </div>

        <div
          className={`mt-4 text-center text-sm py-2 rounded-xl
          ${
            selected
              ? "bg-amber-400 text-black"
              : "bg-neutral-800 border border-amber-400/40 text-amber-400"
          }`}
        >
          {selected ? "✓ Selected" : "Select Creator"}
        </div>
      </div>
    </motion.div>
  );
}



function InquiryModal({ selectedKids, onClose }) {

  const [form, setForm] = useState({
    creators: selectedKids.map((k) => k.name).join(", "),
    brandName: "",
    brandEmail: "",
    brandPhone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-neutral-950 border border-neutral-800 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg overflow-hidden"
      >

        {/* HEADER */}

        <div className="relative p-6 pb-5 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-500/10">

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white"
          >
            <X size={15} />
          </button>

          <div className="flex items-center gap-2 mb-3">

            <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
              <Star size={15} className="text-amber-400" />
            </div>

            <span className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
              Brand Collaboration
            </span>

          </div>

          <h3 className="text-xl font-bold text-neutral-100">
            Book Your Creators
          </h3>

          <p className="text-sm text-neutral-400 mt-1">
            Fill in your details and we'll get back within 24 hours.
          </p>

        </div>

        <div className="border-t border-neutral-800" />

        {/* CREATOR CHIP */}

        <div className="px-6 py-4">

          <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">
            {selectedKids.length} Creator Selected
          </p>

          {selectedKids.map((k) => (
            <div
              key={k.id}
              className="flex items-center gap-2 bg-neutral-900 border border-amber-400/40 px-3 py-2 rounded-xl w-fit"
            >

              <img
                src={k.image}
                className="w-6 h-6 rounded-full object-cover"
              />

              <span className="text-sm font-medium text-neutral-200">
                {k.name}
              </span>

              <span className="text-xs text-neutral-500">
                {k.niche}
              </span>

            </div>
          ))}

        </div>

        <div className="border-t border-neutral-800" />

        {!submitted ? (

          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

            {/* SELECTED CREATORS */}

            <div>

              <label className="text-xs text-neutral-500 uppercase tracking-wide">
                Selected Creators
              </label>

              <div className="relative mt-1">

                <Star
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400"
                />

                <input
                  value={form.creators}
                  readOnly
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm pl-10 pr-4 py-3 rounded-xl"
                />

              </div>

            </div>


            {/* BRAND + PHONE */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>

                <label className="text-xs text-neutral-500 uppercase tracking-wide">
                  Brand Name
                </label>

                <div className="relative mt-1">

                  <Building2
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                  />

                  <input
                    placeholder="e.g. Nike India"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-amber-400"
                    onChange={(e) =>
                      setForm({ ...form, brandName: e.target.value })
                    }
                  />

                </div>

              </div>


              <div>

                <label className="text-xs text-neutral-500 uppercase tracking-wide">
                  Phone
                </label>

                <div className="relative mt-1">

                  <Phone
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                  />

                  <input
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-amber-400"
                    onChange={(e) =>
                      setForm({ ...form, brandPhone: e.target.value })
                    }
                  />

                </div>

              </div>

            </div>


            {/* EMAIL */}

            <div>

              <label className="text-xs text-neutral-500 uppercase tracking-wide">
                Work Email
              </label>

              <div className="relative mt-1">

                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                />

                <input
                  type="email"
                  placeholder="brand@company.com"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-amber-400"
                  onChange={(e) =>
                    setForm({ ...form, brandEmail: e.target.value })
                  }
                />

              </div>

            </div>


            {/* BUTTON */}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-2 py-4 rounded-2xl bg-amber-400 text-black font-semibold flex items-center justify-center gap-2 shadow-lg shadow-amber-400/30"
            >

              <Send size={16} />

              Send Inquiry

              <ArrowRight size={16} />

            </motion.button>

          </form>

        ) : (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-12 flex flex-col items-center text-center"
          >

            <CheckCircle2 size={36} className="text-amber-400 mb-3" />

            <h4 className="text-lg font-bold">
              Inquiry Sent!
            </h4>

            <p className="text-sm text-neutral-400">
              We'll contact you within 24 hours.
            </p>

          </motion.div>

        )}

      </motion.div>
    </motion.div>
  );
}

/* MAIN PAGE */

export default function KidfluencerDeck() {

  const navigate = useNavigate();
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [selected, setSelected] = useState([]);
  const [activeNiche, setActiveNiche] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filtered =
    activeNiche === "All"
      ? kids
      : kids.filter((k) =>
          k.niche.toLowerCase().includes(activeNiche.toLowerCase())
        );

  const toggleSelect = (kid) => {
    setSelected((prev) =>
      prev.find((k) => k.id === kid.id)
        ? prev.filter((k) => k.id !== kid.id)
        : [...prev, kid]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">

      {/* NAV */}
      <div className="sticky top-0 flex justify-between px-6 py-4 border-b border-neutral-800">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-400"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        

        <div className="w-20"></div>

      </div>

      {/* HERO */}
      <div className="text-center py-16 px-6">

        <div className="inline-flex items-center gap-2 px-4 py-1 border border-amber-400/30 text-amber-400 bg-amber-400/10 rounded-full mb-6">
          <Zap size={14} />
          India's Top Young Creators
        </div>

        <h1 className="text-5xl font-bold">
          Meet the
          <span className="block bg-gradient-to-r from-amber-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kidfluencers
          </span>
        </h1>

      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {NICHES.map((n) => (
          <button
            key={n}
            onClick={() => setActiveNiche(n)}
            className={`px-4 py-1 rounded-full text-sm
            ${
              activeNiche === n
                ? "bg-amber-400 text-black"
                : "bg-neutral-900 border border-neutral-800 text-neutral-400"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.map((kid) => (
            <KidCard
              key={kid.id}
              kid={kid}
              selected={!!selected.find((k) => k.id === kid.id)}
              onSelect={toggleSelect}
            />
          ))}

        </div>

      </div>

      {/* FLOAT BUTTON */}
      {selected.length > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 cursor-pointer rounded-2xl bg-amber-400 text-black font-semibold flex items-center gap-3"
          >
            Book {selected.length} Creator
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <InquiryModal
            selectedKids={selected}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
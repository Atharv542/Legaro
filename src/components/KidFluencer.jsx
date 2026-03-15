import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
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

import kid1 from "../assets/Adwik.jpeg";
import kid2 from "../assets/Yogesh.jpeg";
import kid3 from "../assets/Asher.jpeg";
import kid4 from "../assets/Biji Basheer.jpeg";
import kid5 from "../assets/Sia.jpeg";
import kid6 from "../assets/Sonali.jpeg";
import kid7 from "../assets/Ashri.jpeg";
import kid8 from "../assets/Shravani.jpeg";
import kid9 from "../assets/Avi.jpeg";
import kid10 from "../assets/Isha.jpeg";
import kid11 from "../assets/Sanaya.jpeg";
import kid12 from "../assets/Chiki.jpeg";
import kid13 from "../assets/Samagra.jpeg";
import kid14 from "../assets/Rajat.jpeg";
import kid15 from "../assets/Nivu.jpeg";
import kid16 from "../assets/Laddu.jpeg";
import kid17 from "../assets/Nira.jpeg";
import kid18 from "../assets/Arun.jpeg";
import kid19 from "../assets/Ankit.jpeg";
import kid20 from "../assets/Tanya.jpeg";
import kid21 from "../assets/Anuj.jpeg";
import kid22 from "../assets/Tamanna.jpeg";

/* DATA */

const kids = [
  {
    id: 1,
    name: "Adwik Paul",
    age: 7,
    image:kid1,
    niche: "Kidfluencers",
    location: "Kullu, HP",
    followers: "902K",
    engagement: "8.4%",
    platforms: ["instagram", "youtube"],
    skills: ["Storytelling", "Unboxing"],
    badge: "🔥 Trending",
     links:{
      instagram:"https://www.instagram.com/adwikpaul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@houseofpauls"
    },
  },
  {
    id: 2,
    name: "theyogish",
    age: 7,
    image: kid2,
    niche: "Kidfluencers",
    location: "Delhi",
    followers: "151K",
    engagement: "9.1%",
    platforms: ["instagram", "youtube"],
    skills: ["Product Reviews"],
    badge: "⚡ Rising Star",
     links:{
      instagram:"https://www.instagram.com/theyogish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@theyogish"
    },
  },
  {
    id: 3,
    name: "i.m.asher",
    age: 3,
    image: kid3,
    niche: "Kidfluencers",
    location: "Delhi",
    followers: "630K",
    engagement: "7.2%",
    platforms: ["instagram", "youtube"],
    skills: ["Football"],
    badge: "🏆 Top Creator",
     links:{
      instagram:"https://www.instagram.com/i.m.asher?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@likeasher"
    },
  },
  {
    id: 4,
    name: "bgandtheboys",
    age: 13,
    image: kid4,
    niche: "Kidfluencers",
    location: "Mumbai & Kerala",
    followers: "168K",
    engagement: "11.3%",
    platforms: ["instagram"],
    skills: ["Painting"],
    badge: "🎨 Creative Genius",
     links:{
      instagram:"https://www.instagram.com/bgandtheboys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    id: 5,
    name: "sia_3vedi",
    age: 5,
    image: kid5,
    niche: "Kidfluencers",
    location: "Bengaluru",
    followers: "1.8M",
    engagement: "6.8%",
    platforms: ["instagram", "youtube"],
    skills: ["Live Streams"],
    badge: "🎮 Gaming Pro",
     links:{
      instagram:"https://www.instagram.com/sia_3vedi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@Sia.trivedi"
    },
  },
  {
    id: 6,
    name: "the_motormouth",
    age: 3,
    image: kid6,
    niche: "Kidfluencers",
    location: "Mumbai",
    followers: "2.4M",
    engagement: "10.5%",
    platforms: ["instagram"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/the_motormouth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      
    },
  },
  {
    id: 7,
    name: "fit_arshia",
    age: 10,
    image: kid7,
    niche: "Kidfluencers",
    location: "Chandigarh",
    followers: "1.8M",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/fit_arshia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@fit_arshia"
    },
  },
  {
    id: 8,
    name: "shravanix29",
    age: 7,
    image: kid8,
    niche: "Kidfluencers",
    location: "Faridabad",
    followers: "736K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/shravanix29?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@yourshravani"
    },
  },
  {
    id: 9,
    name: "avi.rashi",
    age: 8,
    image: kid9,
    niche: "Kidfluencers",
    location: "Delhi",
    followers: "576K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/avi.rashi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/c/NegiFamily"
    },
  },
  {
    id: 10,
    name: "ishakapoor244",
    age: 7,
    image: kid10,
    niche: "Kidfluencers",
    location: "Gurgaon",
    followers: "456K",
    engagement: "10.5%",
    platforms: ["instagram"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/ishakapoor244?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  
    },
  },
  {
    id: 11,
    name: "little.era12_official",
    age: 5,
    image: kid11,
    niche: "Kidfluencers",
    location: "Patna",
    followers: "567K",
    engagement: "10.5%",
    platforms: ["instagram"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/little.era12_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      
    },
  },
  {
    id: 12,
    name: "Chiki Mithi & Family",
    age: 12&6,
    image: kid12,
    niche: "Kidfluencers",
    location: "Patna",
    followers: "414K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/chikimithi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@chikimithifamily"
    },
  },
  {
    id: 13,
    name: "Samagra Sankalp Patel",
    age: 2.5,
    image: kid13,
    niche: "Kidfluencers",
    location: "Etawah",
    followers: "623K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/littlesamagra0110?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@Samagraverse"
    },
  },
  {
    id: 14,
    name: "Rajatparmitaofficial",
    age: 36,
    image: kid14,
    niche: "Kidfluencers",
    location: "Delhi",
    followers: "940K",
    engagement: "10.5%",
    platforms: ["instagram"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/justcouplethings_123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",

    },
  },
  {
    id: 15,
    name: "Nivu and Vayu",
    age: 3.5 & 2,
    image: kid15,
    niche: "Kidfluencers",
    location: "Surat",
    followers: "177K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/nivuandvayu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@nivuandvayu"
    },
  },
  {
    id: 16,
    name: "Laddu Panwar",
    age: 4.5,
    image: kid16,
    niche: "Kidfluencers",
    location: "Dehdradun",
    followers: "478K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/laddu_panwar14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@neelamvlogs1906?app=desktop&fbclid=PAY2xjawJLsvJleHRuA2FlbQIxMAABpv6JyE5aMo86S1KkWVn2iPAuMlrUH_qWrEbgZlBxAN1p-bHEEoypJ3amXQ_aem_YVmopQia0uD-DvUmzTEVXw"
    },
  },
  {
    id: 17,
    name: "Nira Choudhary",
    age: 2.5,
    image: kid17,
    niche: "Kidfluencers",
    location: "Chennai",
    followers: "342K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/priyanka_niraa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@priyanka_Nira"
    },
  },
  {
    id: 18,
    name: "Arun Tomar",
    age: 7,
    image: kid18,
    niche: "Kidfluencers",
    location: "Jaipur",
    followers: "50.9K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/thedanikachaudhary?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@thedanikachaudhary"
    },
  },
  {
    id: 19,
    name: "Ankit Ambedkar Banda",
    age: 25,
    image: kid19,
    niche: "Kidfluencers",
    location: "U.P.",
    followers: "121K",
    engagement: "10.5%",
    platforms: ["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/ankitambedkarbanda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@AnkitAmbedkarBanda"
    },
  },
  {
    id: 20,
    name: "Tanya Agarwal",
    age: 3,
    image: kid20,
    niche: "Kidfluencers",
    location: "Mumbai",
    followers: "70.9K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/tanyas_vanity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@TanyasVanity"
    },
  },
    {
    id: 21,
    name: "Anuj Paul",
    age: 38,
    image: kid21,
    niche: "Finance",
    location: "Kullu,HP",
    followers: "70.9K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/anujpaul4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      
    },
  },

   {
    id: 22,
    name: "Tamanna Sharma",
    age: 19,
    image: kid22,
    niche: "Storyteller",
    location: "Delhi/Dehradun",
    followers: "70.9K",
    engagement: "10.5%",
    platforms:["instagram", "youtube"],
    skills: ["OOTD"],
    badge: "👗 Style Icon",
     links:{
      instagram:"https://www.instagram.com/tee_.writes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      youtube:"https://www.youtube.com/@tamannasharma5004"
    },

    
    
  },
];

const NICHES = ["All", "Kidfluencers", "Finance", "Storyteller"];

/* PLATFORM ICON */

function PlatformIcon({ platform, link }) {

  if (!link) return null;

  const icon =
    platform === "instagram"
      ? <Instagram size={18} className="text-pink-400 -mx-5 hover:scale-110 transition cursor-pointer" />
      : <Youtube size={18} className="text-red-400  -mr-5 hover:scale-110 transition cursor-pointer" />;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {icon}
    </a>
  );
}

/* CREATOR CARD */

function KidCard({ kid, selected, onSelect }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
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

      

      {/* PROFILE IMAGE */}
      <div className="flex justify-center pt-6">
        <img
          src={kid.image}
          alt={kid.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-neutral-800 shadow-md p-1 bg-neutral-900"
        />
      </div>

      <div className="p-4 text-center">

        <h3 className="font-bold text-lg mt-2">{kid.name}</h3>

        <p className="text-xs text-neutral-400">
          Age {kid.age} · {kid.location}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-3 mt-3">
          {kid.platforms.map((p) => (
            <PlatformIcon
              key={p}
              platform={p}
              link={kid.links?.[p]}
            />
          ))}
        </div>

        {/* STATS */}
        <div className="flex justify-center gap-6 mt-4 text-xs">
          <div className="flex items-center gap-1">
            <Users size={12} className="text-amber-400" />
            {kid.followers}
          </div>

       
        </div>

        {/* SELECT BUTTON */}
        <div
          onClick={() => onSelect(kid)}
          className={`mt-4 text-center text-sm py-2 rounded-xl cursor-pointer
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

  const templateParams = {
    creators: form.creators,
    brand_name: form.brandName,
    brand_email: form.brandEmail,
    brand_phone: form.brandPhone,
  };

  emailjs
    .send(
      "service_7zqkcd9",     // from EmailJS
      "template_hd0tdrq",    // from EmailJS
      templateParams,
      "9JXku8pXwijojS23P"      // from EmailJS
    )
    .then(
      () => {
        setSubmitted(true);
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Something went wrong!");
      }
    );
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
              Let’s collab
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

       

        <h1 className="text-5xl font-bold">
          Meet the
          <span className="block bg-gradient-to-r from-amber-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Influencers
          </span>
        </h1>

      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {NICHES.map((n) => (
          <button
            key={n}
            onClick={() => setActiveNiche(n)}
            className={`px-4 py-1 cursor-pointer  rounded-full text-sm
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
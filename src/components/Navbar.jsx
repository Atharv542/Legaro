import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Workshops", href: "#workshops" },
  { label: "Reels", href: "#reels" },
  { label: "1:1 Call", href: "#call" },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[hsl(220,20%,6%,0.9)] backdrop-blur-xl border-b border-[hsl(220,16%,16%)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm text-black"
            style={{
              background: "hsl(210,100%,56%)",
              boxShadow: "0 0 18px hsl(210,100%,56%,0.6)",
            }}
          >
            L
          </div>

          <span className="font-bold text-xl text-[hsl(210,96%,64%)]">
            Legaro
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="relative cursor-pointer text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition duration-300 text-sm font-medium"
            >
              {item.label}

              {/* Blue underline on hover */}
              <span className="absolute left-0 bottom-1 w-2 h-2 text-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNav("#call")}
            className="px-5 cursor-pointer py-2 text-xs font-semibold rounded-full bg-[hsl(210,100%,56%)] text-black hover:brightness-110 transition"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-[hsl(220,18%,9%,0.95)] backdrop-blur-xl border border-[hsl(220,16%,16%)] p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-left text-base font-medium text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition-colors py-1"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNav("#call")}
            className="mt-2  px-5 py-3 rounded-xl font-semibold bg-[hsl(210,100%,56%)] text-black hover:brightness-110 transition"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}
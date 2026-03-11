import { Instagram, Linkedin, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import officeImage from "../assets/officeImage.png";

const navLinks = [
  { label: "Home", href: "#home", type: "scroll" },
  { label: "About", href: "#about", type: "scroll" },
  { label: "Team", href: "#team", type: "scroll" },
  { label: "Workshops", href: "#workshops", type: "scroll" },
  { label: "Kid Fluencer Deck", href: "/kidfluencer-deck", type: "route" },
];

export default function Footer() {
  const handleNav = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[hsl(220,20%,6%)] border-t border-[hsl(220,16%,16%)]">

      {/* Blue Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Office Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl border border-[hsl(220,16%,16%)]">

              <img
                src={officeImage}
                alt="Legaro Office"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-widest opacity-70">
                  Headquarters
                </p>
                <p className="font-semibold text-lg">
                  Legaro Pvt Ltd
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-[hsl(220,10%,55%)]">
              Navigation
            </h4>

            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === "scroll" ? (
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-[hsl(220,10%,55%)]">
              Contact
            </h4>

            <ul className="space-y-3 mb-6">

              <li>
                <div className="text-xs text-[hsl(220,10%,55%)]/70 mb-0.5">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/919999999999"
                  className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,100%,56%)] transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>

              <li>
                <div className="text-xs text-[hsl(220,10%,55%)]/70 mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:hello@legaro.in"
                  className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,100%,56%)] transition-colors"
                >
                  hello@legaro.in
                </a>
              </li>

              <li>
                <div className="text-xs text-[hsl(220,10%,55%)]/70 mb-0.5">
                  Instagram
                </div>
                <a
                  href="https://instagram.com"
                  className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,100%,56%)] transition-colors"
                >
                  @legaro
                </a>
              </li>

            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[hsl(220,16%,16%)] bg-[hsl(220,18%,9%)] text-[hsl(220,10%,55%)] transition-all duration-200 hover:scale-110 hover:text-[hsl(210,100%,56%)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(220,16%,16%)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[hsl(220,10%,55%)]">
            © {new Date().getFullYear()} Legaro Pvt Ltd. All rights reserved.
          </p>

          <p className="text-xs text-[hsl(220,10%,55%)] flex items-center gap-1">
            Made with{" "}
            <Heart
              size={11}
              fill="hsl(38,95%,55%)"
              color="hsl(38,95%,55%)"
            />{" "}
            for young entrepreneurs
          </p>

        </div>

      </div>
    </footer>
  );
}
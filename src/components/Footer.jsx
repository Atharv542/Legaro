import { Instagram, Linkedin, Twitter, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Workshops", href: "#workshops" },
  { label: "Reels", href: "#reels" },
  { label: "1:1 Call", href: "#call" },

];

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm text-black"
                style={{
                  background: "hsl(210,100%,56%)",
                  boxShadow: "0 0 16px hsl(210,100%,56%,0.4)",
                }}
              >
                L
              </div>

              <span className="font-bold text-xl text-[hsl(210,100%,56%)]">
                Legaro
              </span>
            </div>

            <p className="text-sm text-[hsl(220,10%,55%)] leading-relaxed mb-5">
              Empowering the next generation of entrepreneurs through immersive
              workshops, bold ideas, and personalised mentorship.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[hsl(220,16%,16%)] bg-[hsl(220,18%,9%)] text-[hsl(220,10%,55%)] transition-all duration-200 hover:scale-110"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "hsl(210,100%,56%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "hsl(220,10%,55%)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
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
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,20%,95%)] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-[hsl(220,10%,55%)]">
              Contact
            </h4>

            <ul className="space-y-3">
              {[
                {
                  label: "WhatsApp",
                  value: "+91 99999 99999",
                  href: "https://wa.me/919999999999",
                },
                {
                  label: "Email",
                  value: "hello@legaro.in",
                  href: "mailto:hello@legaro.in",
                },
                {
                  label: "Instagram",
                  value: "@legaro",
                  href: "https://instagram.com",
                },
              ].map(({ label, value, href }) => (
                <li key={label}>
                  <div className="text-xs text-[hsl(220,10%,55%)]/70 mb-0.5">
                    {label}
                  </div>

                  <a
                    href={href}
                    className="text-sm text-[hsl(220,10%,55%)] hover:text-[hsl(210,100%,56%)] transition-colors duration-200"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
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
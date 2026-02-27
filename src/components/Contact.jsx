import {
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)]"
    >
      {/* Gold Glow */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(38,95%,55%)" }}
      />

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(38,95%,55%)] text-[hsl(38,95%,55%)] mb-4">
            Get In Touch
          </span>

          <h2 className="font-black text-4xl md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-[hsl(38,95%,55%)] to-[hsl(210,100%,56%)] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-[hsl(220,10%,55%)] mt-4 max-w-lg mx-auto">
            Have a question, a collaboration idea, or just want to say hi?
            We're always happy to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">

          {/* WhatsApp CTA */}
          <div
            className="rounded-3xl p-8 mb-8 text-center relative overflow-hidden border"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08))",
              borderColor: "rgba(37,211,102,0.3)",
            }}
          >
            {/* Green Glow */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: "#25D366" }}
            />

            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(37,211,102,0.2)" }}
              >
                <MessageCircle size={28} color="#25D366" />
              </div>

              <h3 className="font-bold text-2xl mb-2">
                Chat on WhatsApp
              </h3>

              <p className="text-[hsl(220,10%,55%)] text-sm mb-6">
                Fastest way to reach us. Drop a message and we'll get back
                to you quickly.
              </p>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "#25D366",
                  color: "white",
                  boxShadow: "0 0 24px rgba(37,211,102,0.4)",
                }}
              >
                <MessageCircle size={18} />
                Message on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Instagram,
                label: "Instagram",
                handle: "@legaro",
                href: "https://instagram.com",
                color: "hsl(38,95%,55%)",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                handle: "Legaro Pvt Ltd",
                href: "https://linkedin.com",
                color: "hsl(210,100%,56%)",
              },
              {
                icon: Twitter,
                label: "Twitter / X",
                handle: "@legaro",
                href: "https://twitter.com",
                color: "hsl(210,100%,56%)",
              },
              {
                icon: Mail,
                label: "Email",
                handle: "hello@legaro.in",
                href: "mailto:hello@legaro.in",
                color: "hsl(38,95%,55%)",
              },
            ].map(({ icon: Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)] rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:scale-105"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "hsl(220,16%,16%)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${color}20`,
                  }}
                >
                  <Icon size={18} color={color} />
                </div>

                <div>
                  <div className="text-xs font-semibold">
                    {label}
                  </div>
                  <div className="text-xs text-[hsl(220,10%,55%)] mt-0.5">
                    {handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
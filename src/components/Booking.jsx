import { Phone, Clock, CheckCircle, ArrowRight, Calendar } from "lucide-react";

const benefits = [
  "Clarity on your business idea or career path",
  "Personalised action plan just for you",
  "Direct feedback from Anant & Shivam",
  "Accountability check-in system",
  "Access to Legaro's resource library",
];

export default function CallSection() {
  return (
    <section
      id="call"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)] border-t border-[hsl(220,16%,16%)]"
    >
      {/* Blue Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(210,100%,56%)] text-[hsl(210,100%,56%)] mb-4">
              <Phone size={12} />
              1:1 Mentorship
            </span>

            <h2 className="font-black text-4xl md:text-5xl leading-tight mb-6">
              Book Your <br />
              <span className="text-[hsl(210,100%,56%)]">
                Personal Call
              </span>
            </h2>

            <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-8">
              Get dedicated time with Anant or Shivam for a focused,
              transformative session tailored entirely to your goals.
              Whether you're just starting out or looking to scale —
              this call will change things.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <CheckCircle
                    size={16}
                    color="hsl(210,100%,56%)"
                    style={{ flexShrink: 0 }}
                  />
                  <span className="text-[hsl(220,10%,55%)]">{b}</span>
                </li>
              ))}
            </ul>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-[hsl(220,10%,55%)] mb-6">
              <Clock size={15} color="hsl(38,95%,55%)" />
              <span>45–60 minute deep-dive session</span>
            </div>
          </div>

          {/* RIGHT SIDE BOOKING CARD */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden border"
            style={{
              background: "hsl(220,18%,9%)",
              borderColor: "hsl(220,16%,16%)",
              boxShadow: "0 0 60px hsl(210,100%,56%,0.08)",
            }}
          >
            {/* Decorative Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
              style={{ background: "hsl(210,100%,56%)" }}
            />

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "hsl(210,100%,56%,0.15)" }}
              >
                <Calendar size={24} color="hsl(210,100%,56%)" />
              </div>

              <h3 className="font-bold text-2xl mb-2">
                Schedule a Session
              </h3>

              <p className="text-[hsl(220,10%,55%)] text-sm mb-8">
                Choose a slot that works for you. Limited spots available every week.
              </p>

              {/* Session Types */}
              <div className="space-y-3 mb-8">
                {[
                  { type: "Discovery Call", duration: "30 min", price: "Free" },
                  { type: "Strategy Session", duration: "60 min", price: "Paid" },
                  { type: "Ongoing Mentorship", duration: "Monthly", price: "Custom" },
                ].map((s) => (
                  <div
                    key={s.type}
                    className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "hsl(220,18%,9%)",
                      border: "1px solid hsl(220,16%,16%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "hsl(210,100%,56%,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "hsl(220,16%,16%)";
                    }}
                  >
                    <div>
                      <div className="text-sm font-semibold">{s.type}</div>
                      <div className="text-xs text-[hsl(220,10%,55%)]">
                        {s.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-md"
                        style={{
                          background:
                            s.price === "Free"
                              ? "hsl(210,100%,56%,0.1)"
                              : "hsl(38,95%,55%,0.1)",
                          color:
                            s.price === "Free"
                              ? "hsl(210,100%,56%)"
                              : "hsl(38,95%,55%)",
                        }}
                      >
                        {s.price}
                      </span>

                      <ArrowRight
                        size={14}
                        color="hsl(220,10%,55%)"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
               
                className="w-full cursor-pointer flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:brightness-110"
                style={{
                  background: "hsl(210,100%,56%)",
                  color: "black",
                }}
              >
                <Phone size={18} />
                Book Your 1:1 Call Now
              </button>

              <p className="text-center text-xs text-[hsl(220,10%,55%)] mt-4">
                You'll receive a confirmation within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
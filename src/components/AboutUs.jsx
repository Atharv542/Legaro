import { Target, Zap, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)] border-t border-[hsl(220,16%,16%)]"
    >
      {/* Background Blue Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Section Tag */}
            <span className="inline-flex px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(210,100%,56%)] text-[hsl(210,100%,56%)] mb-4">
              Our Story
            </span>

            <h2 className="font-black text-4xl md:text-5xl leading-tight mb-6">
              We Are{" "}
              <span className="text-[hsl(210,100%,56%)]">
                Legaro
              </span>
            </h2>

            <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-6">
              Legaro Pvt Ltd is a dynamic company built on the belief that every
              young person has the potential to build something extraordinary.
              We bridge the gap between ambition and action through high-energy
              workshops, mentorship programmes, and one-on-one coaching sessions.
            </p>

            <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-8">
              Born from the passion of two driven individuals — Anant and Shivam —
              Legaro was created to be more than a company. It's a movement. A
              community where curiosity meets execution, and dreams get their runway.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#workshops")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 cursor-pointer rounded-xl font-semibold bg-[hsl(210,100%,56%)] text-black hover:brightness-110 transition"
              >
                View Workshops
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 cursor-pointer rounded-xl font-semibold border border-[hsl(220,16%,16%)] hover:bg-[hsl(220,18%,9%)] transition"
              >
                Meet the Team
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">

            {[
              {
                icon: Target,
                title: "Mission-Driven",
                desc: "We exist to unlock the potential in every young entrepreneur — with structure, energy, and relentless support.",
                type: "blue",
              },
              {
                icon: Zap,
                title: "Action-Oriented",
                desc: "No fluff. Every workshop, call and session is designed for real outcomes — ideas you can execute on Day 1.",
                type: "gold",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "Legaro is a tribe. We grow together, celebrate wins together, and push each other to go further.",
                type: "blue",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)] rounded-2xl p-6 flex items-start gap-4 hover:border-[hsl(210,100%,56%)] transition-all duration-300"
              >
                {/* Icon Box */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      item.type === "blue"
                        ? "hsl(210,100%,56%,0.15)"
                        : "hsl(38,95%,55%,0.15)",
                  }}
                >
                  <item.icon
                    size={18}
                    style={{
                      color:
                        item.type === "blue"
                          ? "hsl(210,100%,56%)"
                          : "hsl(38,95%,55%)",
                    }}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[hsl(220,10%,55%)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
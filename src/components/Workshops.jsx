import { Calendar, Clock, Users, ArrowRight, Star } from "lucide-react";

const workshops = [
  {
    title: "Entrepreneurship Bootcamp",
    desc: "A high-intensity, hands-on workshop where you go from zero to building your first business model in 2 days. Perfect for beginners with big dreams.",
    duration: "2 Days",
    capacity: "20–30 seats",
    level: "Beginner",
    color: "blue",
  },
  {
    title: "Personal Branding Masterclass",
    desc: "Learn how to craft a magnetic personal brand on Instagram and LinkedIn that attracts opportunities. Build your presence like a pro.",
    duration: "1 Day",
    capacity: "15–25 seats",
    level: "All Levels",
    color: "gold",
  },
  {
    title: "Social Media Growth Hacking",
    desc: "Unlock the algorithms. Understand reels, content strategy, and engagement tactics that actually work in 2025.",
    duration: "1 Day",
    capacity: "20 seats",
    level: "Intermediate",
    color: "blue",
  },
  {
    title: "Mindset & Leadership Workshop",
    desc: "Develop an unshakeable mindset, sharpen your decision-making, and step up as a leader in your school, college, or startup.",
    duration: "Half Day",
    capacity: "25–40 seats",
    level: "All Levels",
    color: "gold",
  },
];

export default function WorkshopsSection() {
  return (
    <section
      id="workshops"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)]"
    >
      {/* Blue Glow */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(210,100%,56%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(210,100%,56%)] text-[hsl(210,100%,56%)] mb-4">
            <Calendar size={12} />
            Workshops
          </span>

          <h2 className="font-black text-4xl md:text-5xl">
            Level Up with Our{" "}
            <span className="text-[hsl(210,100%,56%)]">
              Workshops
            </span>
          </h2>

          <p className="text-[hsl(220,10%,55%)] mt-4 max-w-xl mx-auto">
            Hands-on, immersive sessions designed to spark ideas, build skills,
            and create real momentum in your entrepreneurial journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {workshops.map((w, i) => (
            <div
              key={w.title}
              className="bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)] rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  w.color === "blue"
                    ? "hsl(210,100%,56%,0.4)"
                    : "hsl(38,95%,55%,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "hsl(220,16%,16%)";
              }}
            >
              {/* Level + Stars */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-md"
                  style={{
                    background:
                      w.color === "blue"
                        ? "hsl(210,100%,56%,0.1)"
                        : "hsl(38,95%,55%,0.1)",
                    color:
                      w.color === "blue"
                        ? "hsl(210,100%,56%)"
                        : "hsl(38,95%,55%)",
                  }}
                >
                  {w.level}
                </span>

                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      fill="hsl(38,95%,55%)"
                      color="hsl(38,95%,55%)"
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-xl mb-3">
                {w.title}
              </h3>

              <p className="text-sm text-[hsl(220,10%,55%)] leading-relaxed mb-5">
                {w.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-5 mb-5 text-xs text-[hsl(220,10%,55%)]">
                <span className="flex items-center gap-1.5">
                  <Clock
                    size={13}
                    color={
                      w.color === "blue"
                        ? "hsl(210,100%,56%)"
                        : "hsl(38,95%,55%)"
                    }
                  />
                  {w.duration}
                </span>

                <span className="flex items-center gap-1.5">
                  <Users
                    size={13}
                    color={
                      w.color === "blue"
                        ? "hsl(210,100%,56%)"
                        : "hsl(38,95%,55%)"
                    }
                  />
                  {w.capacity}
                </span>
              </div>

              {/* CTA */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{
                  color:
                    w.color === "blue"
                      ? "hsl(210,100%,56%)"
                      : "hsl(38,95%,55%)",
                }}
              >
                Book Your Spot
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center border"
          style={{
            background:
              "linear-gradient(135deg, hsl(210,100%,56%,0.15), hsl(38,95%,55%,0.1))",
            borderColor: "hsl(210,100%,56%,0.25)",
          }}
        >
          <h3 className="font-bold text-2xl md:text-3xl mb-3">
            Want us at your school or college?
          </h3>

          <p className="text-[hsl(220,10%,55%)] mb-6 max-w-lg mx-auto">
            We conduct custom workshops for institutions. Let's co-create an
            experience your students will talk about for years.
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[hsl(210,100%,56%)] text-black hover:brightness-110 transition"
          >
            Book a Workshop via Exly
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
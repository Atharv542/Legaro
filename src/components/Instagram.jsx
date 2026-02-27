import { Instagram, ExternalLink, Play } from "lucide-react";

const reelPlaceholders = [
  { id: 1, caption: "Entrepreneurship Bootcamp Highlights 🔥", views: "12K" },
  { id: 2, caption: "Personal Branding Tips That Actually Work", views: "8.5K" },
  { id: 3, caption: "Behind the Scenes — Legaro Workshop Day", views: "15K" },
  { id: 4, caption: "How to Build Habits Like an Entrepreneur", views: "9.2K" },
  { id: 5, caption: "Q&A with Anant & Shivam — Live Session", views: "11K" },
  { id: 6, caption: "Student Transformations — Real Stories", views: "7.8K" },
];

export default function InstagramSection() {
  return (
    <section
      id="reels"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)]"
    >
      {/* Gold Glow */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(38,95%,55%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(38,95%,55%)] text-[hsl(38,95%,55%)] mb-4">
            <Instagram size={12} />
            Instagram Reels
          </span>

          <h2 className="font-black text-4xl md:text-5xl">
            Watch Us in{" "}
            <span className="text-[hsl(38,95%,55%)]">
              Action
            </span>
          </h2>

          <p className="text-[hsl(220,10%,55%)] mt-4 max-w-lg mx-auto">
            Catch our latest reels, workshop highlights, and entrepreneurship
            tips straight from the Legaro feed.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {reelPlaceholders.map((reel) => (
            <div
              key={reel.id}
              className="relative rounded-2xl overflow-hidden aspect-[9/16] max-h-80 group cursor-pointer bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)]"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <Instagram
                  size={32}
                  color="hsl(220,10%,55%)"
                  className="mb-3"
                />
                <p className="text-xs text-center text-[hsl(220,10%,55%)] font-medium leading-snug">
                  {reel.caption}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[hsl(220,20%,6%,0.85)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center flex-col gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "hsl(38,95%,55%)",
                    boxShadow: "0 0 24px hsl(38,95%,55%,0.5)",
                  }}
                >
                  <Play
                    size={20}
                    fill="black"
                    color="black"
                  />
                </div>

                <span className="text-xs font-semibold text-[hsl(38,95%,55%)]">
                  {reel.views} views
                </span>
              </div>

              {/* Views Badge */}
              <div
                className="absolute bottom-3 left-3 text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "hsl(220,18%,6%,0.8)",
                  color: "hsl(210,20%,95%)",
                }}
              >
                {reel.views} views
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <p className="text-[hsl(220,10%,55%)] mb-5 text-sm">
            Add your Instagram reel links to display live content here.
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[hsl(38,95%,55%)] text-black hover:brightness-110 transition"
          >
            <Instagram size={16} />
            Follow @Legaro on Instagram
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
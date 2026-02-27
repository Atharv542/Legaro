import anantImg from "../assets/anant.jpg";
import shivamImg from "../assets/shivam.jpg";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Anant",
    role: "Co-Founder & Vision Architect",
    img: anantImg,
    color: "blue",
    bio: "Anant is the visionary behind Legaro's content and workshop framework. With a knack for decoding complex concepts into actionable insights, he leads the company's learning experience design — ensuring every session leaves a lasting impact on participants.",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shivam",
    role: "Co-Founder & Growth Lead",
    img: shivamImg,
    color: "gold",
    bio: "Shivam drives Legaro's community-building and growth strategy. A natural connector and hustler, he's the engine behind partnerships, outreach, and the brand's strong presence among young entrepreneurs across India.",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden bg-[hsl(220,20%,6%)] text-[hsl(210,20%,95%)] border-t border-[hsl(220,16%,16%)]"
    >
      {/* Gold Background Glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(38,95%,55%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1 text-xs tracking-widest uppercase rounded-full border border-[hsl(38,95%,55%)] text-[hsl(38,95%,55%)] mb-4">
            The Founders
          </span>

          <h2 className="font-black text-4xl md:text-5xl">
            Meet the{" "}
            <span className="text-[hsl(38,95%,55%)]">
              Minds
            </span>{" "}
            Behind Legaro
          </h2>

          <p className="text-[hsl(220,10%,55%)] mt-4 max-w-xl mx-auto">
            Two passionate individuals on a mission to make entrepreneurship
            accessible, exciting, and transformative for every young person.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  member.color === "blue"
                    ? "0 8px 48px hsl(210,100%,56%,0.25)"
                    : "0 8px 48px hsl(38,95%,55%,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,18%,9%)] to-transparent" />

                {/* Role Badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background:
                        member.color === "blue"
                          ? "hsl(210,100%,56%,0.15)"
                          : "hsl(38,95%,55%,0.15)",
                      color:
                        member.color === "blue"
                          ? "hsl(210,100%,56%)"
                          : "hsl(38,95%,55%)",
                      border:
                        member.color === "blue"
                          ? "1px solid hsl(210,100%,56%,0.3)"
                          : "1px solid hsl(38,95%,55%,0.3)",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">
                  {member.name}
                </h3>

                <p className="text-sm text-[hsl(220,10%,55%)] leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: Instagram, href: member.socials.instagram },
                    { icon: Linkedin, href: member.socials.linkedin },
                    { icon: Twitter, href: member.socials.twitter },
                  ].map(({ icon: Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-[hsl(220,18%,9%)] border border-[hsl(220,16%,16%)] text-[hsl(220,10%,55%)] transition-all duration-200 hover:scale-110"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color =
                          member.color === "blue"
                            ? "hsl(210,100%,56%)"
                            : "hsl(38,95%,55%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "hsl(220,10%,55%)";
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
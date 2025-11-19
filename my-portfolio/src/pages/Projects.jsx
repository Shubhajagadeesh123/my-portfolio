// src/pages/Projects.jsx
import Layout from "../components/Layout.jsx";

const projects = [
  {
    title: "Smart Campus Navigator",
    timeline: "2025",
    desc: "An interactive campus guide system that helps students and visitors navigate buildings, departments, and facilities using location-based data.",
    stack: ["React", "Node.js", "Express", "Leaflet Maps"],
    github: "https://github.com/Shubhajagadeesh123/SmartCampus"
  },
  {
    title: "Honeypot Security System",
    timeline: "2025",
    desc: "A honeypot environment designed to detect unauthorized access, monitor malicious activity, and attract attackers to controlled virtual assets.",
    stack: ["Python", "Networking", "Django","Cybersecurity"],
    github: "https://github.com/Shubhajagadeesh123/HoneyPot"
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <p className="text-sm sm:text-base text-slate-700 mb-6">
          A curated selection of projects that highlight how I structure code, work with APIs,
          and build user interfaces.
        </p>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase text-slate-500">
                    {p.timeline}
                  </div>
                  <h2 className="text-sm font-semibold mt-1">{p.title}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700">
                  {p.desc}
                </p>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-300 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="opacity-70"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.98c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>

                    GitHub
                    </a>
                  )}

                  <p className="mt-2 text-[11px] uppercase tracking-wide text-slate-500">
                    {p.stack.join(" • ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

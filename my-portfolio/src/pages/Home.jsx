// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[86vh] overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50">
        {/* Color blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl" />
          <div className="absolute -bottom-40 -right-16 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />
        </div>

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-[3rem] rounded-3xl bg-grid opacity-60" />

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* LEFT: Name + navigation cards */}
          <div className="lg:flex-[1.4] flex flex-col justify-between gap-8">
            <div>


              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight bg-gradient-to-r from-slate-900 via-indigo-700 to-sky-500 bg-clip-text text-transparent drop-shadow-sm">
                SHUBHA K J
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
                Software Engineer focused on building clean interfaces, reliable
                APIs, and solving problems with simple, well-structured code.
              </p>

              {/* Quick tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-600">
                <span className="px-3 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                  👨‍💻 Web Developer
                </span>
                <span className="px-3 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                  🧠 DSA & Problem Solving
                </span>
                <span className="px-3 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                  🚀 Open to Opportunities
                </span>
              </div>
            </div>

            {/* Big “navigation tiles” */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link
                to="/about"
                className="group rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">
                  01 · About
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">
                    Who I am
                  </p>
                  <span className="text-slate-300 group-hover:text-indigo-400 text-lg">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Background, interests, and how I think as an engineer.
                </p>
              </Link>

              <Link
                to="/projects"
                className="group rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">
                  02 · Projects
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">
                    What I build
                  </p>
                  <span className="text-slate-300 group-hover:text-indigo-400 text-lg">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Real projects that show how I use React, Node and databases.
                </p>
              </Link>

              <Link
                to="/contact"
                className="group rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">
                  03 · Contact
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">
                    Let’s talk
                  </p>
                  <span className="text-slate-300 group-hover:text-indigo-400 text-lg">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Email, resume, and coding profiles all in one place.
                </p>
              </Link>
            </div>
           <div className="flex gap-3">
              <a
                href="/ShubhaKJ_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
              >
                View Resume
              </a>

              <a
                href="/ShubhaKJ_Resume.pdf"
                download="/ShubhaKJ_Resume.pdf"
                className="px-5 py-2.5 rounded-full border border-indigo-600 bg-white text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: profile / stats panel */}
          <aside className="lg:flex-[1] w-full lg:max-w-sm">
            <div className="h-full rounded-3xl bg-white/90 border border-slate-200 shadow-lg shadow-indigo-100 p-5 flex flex-col gap-5">
              {/* “avatar” + quick info */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white text-xl font-semibold">
                  SJ
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    SHUBHA K J
                  </p>
                  <p className="text-xs text-slate-500">
                    Software Engineer · Fresher
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Snapshot
                  </div>
                  <p>
                    Third-year /  who likes building frontends
                    with React and turning DSA practice into real-world skills.
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Tech stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100">
                      React
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100">
                      JavaScript
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100">
                      Node.js
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100">
                       MySQL
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Currently
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Solving problems on LeetCode / coding platforms</li>
                    <li>Building small full-stack projects in React + Node</li>
                    <li>Preparing for software engineering interviews</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                Open to internships & entry-level roles
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

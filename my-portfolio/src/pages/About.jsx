// src/pages/About.jsx
import Layout from "../components/Layout.jsx";

export default function About() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          I’m a software engineer with a focus on building clean, maintainable web applications.
          As a fresher, I’ve spent most of my time learning fundamentals: data structures &
          algorithms, JavaScript, React, and backend basics.
        </p>
        <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          I enjoy understanding how things work under the hood and turning ideas into working products.
          I’m especially interested in frontend engineering, developer tools, and solving real problems
          with simple, thoughtful UI.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
          <div>
            <h2 className="text-xs font-semibold uppercase text-slate-500 mb-1">
              Languages
            </h2>
            <p>JavaScript, Java, C++</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase text-slate-500 mb-1">
              Web Stack
            </h2>
            <p>React, Node.js, REST APIs</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase text-slate-500 mb-1">
              Tools
            </h2>
            <p>Git, GitHub, VS Code, MySQL</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

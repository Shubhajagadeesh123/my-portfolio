// src/components/Layout.jsx
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top bar on all pages */}
    <header className="border-b border-slate-200 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white text-xl font-semibold">
      SJ
    </div>
   <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
  <Link to="/" className="hover:text-primary">
    Home
  </Link>
  <Link to="/about" className="hover:text-primary">
    About
  </Link>
  <Link to="/projects" className="hover:text-primary">
    Projects
  </Link>
  <Link to="/contact" className="hover:text-primary">
    Contact
  </Link>

</nav>

  </div>
</header>


      {/* Page content */}
      <main className="flex-1">{children}</main>

<footer className="border-t border-slate-200 bg-white">
  <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
    <span className="text-slate-500">
      © {new Date().getFullYear()} SHUBHA K J
    </span>

    <div className="flex gap-4">
      <a className="text-primary hover:underline" href="https://leetcode.com/u/shubha_K_J/" target="_blank">LeetCode</a>
      <a className="text-primary hover:underline" href="mailto:shubhajagadeesh155@gmail.com">Email</a>
      <a className="text-primary hover:underline" href="https://github.com/Shubhajagadeesh123" target="_blank">GitHub</a>
      <a className="text-primary hover:underline" href="https://www.linkedin.com/in/shubha-jagadeesh" target="_blank">LinkedIn</a>
    </div>
  </div>
</footer>

    </div>
  );
}

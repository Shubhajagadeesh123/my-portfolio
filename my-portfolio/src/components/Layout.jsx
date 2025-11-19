import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      
      {/* NAVBAR */}
      <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
         <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white text-xl font-semibold">
                  SJ
                </div>
                </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
            <NavLink to="/about" className="hover:text-indigo-600">About</NavLink>
            <NavLink to="/projects" className="hover:text-indigo-600">Projects</NavLink>
            <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="sm:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-4 text-sm">
            <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-indigo-600">
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-indigo-600">
              About
            </NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className="hover:text-indigo-600">
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-indigo-600">
              Contact
            </NavLink>
          </div>
        )}
      </nav>


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
      <a className="text-primary hover:underline" href="https://www.linkedin.com/in/shubha-jagadeesh-b441842a9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">LinkedIn</a>
    </div>
  </div>
</footer>

    </div>
  );
}

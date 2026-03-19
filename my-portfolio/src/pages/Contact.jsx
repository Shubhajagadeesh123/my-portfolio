// src/pages/Contact.jsx
import Layout from "../components/Layout.jsx";
import { useState } from "react";

/**
 * Replace this with your real Web3Forms access key
 * (keep the quotes).
 */
const WEB3FORMS_ACCESS_KEY = "dbf948f3-5f0e-4ff6-a0ac-608a14ac8a34";

/**
 * Resume URL served from public/
 * (you uploaded ShubhaKJ_Resume.pdf to public/)
 * This is the path the live site will serve the file from.
 */
const resumeUrl = "/ShubhaKJ.Resume.pdf";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    sending: false,
    success: null, // null | true | false
    message: "",
  });

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ sending: false, success: false, message: "Please complete all fields." });
      return;
    }

    setStatus({ sending: true, success: null, message: "" });

    try {
      // Web3Forms expects form-encoded data; use FormData
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      // include resume link in message so you get everything in the email
      fd.append("message", `${formData.message}\n\nResume: ${window.location.origin}${resumeUrl}`);
      fd.append("subject", "New Web Dev Inquiry from Portfolio");
      fd.append("from_name", "Portfolio Contact Form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus({ sending: false, success: true, message: "Message sent — thank you! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // handle known failure from API
        const errMsg = json?.message || "Submission failed. Try again later.";
        setStatus({ sending: false, success: false, message: errMsg });
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus({ sending: false, success: false, message: "Network error — please try again." });
    }
  };

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-indigo-600 mb-4">Let’s Work Together</h1>

        <p className="text-sm sm:text-base text-slate-700 mb-6">
          Looking for a web developer? I take on freelance projects, internships and collaborations.
          Fill the form below and I’ll get back to you — or use the direct links.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm p-6 rounded-xl space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Your Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Your Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Tell me about your project</label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the project, timeline, and budget (optional)."
              rows={6}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm resize-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status.sending}
              className={`px-6 py-2.5 rounded-lg border border-indigo-500 bg-white/70 backdrop-blur-sm text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition ${status.sending ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status.sending ? "Sending…" : "Send Message"}
            </button>

            {/* optional quick view / download resume link */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 border border-slate-200 bg-white hover:bg-slate-50"
            >
              View Resume
            </a>
          </div>

          {/* status feedback */}
          <div>
            {status.success === true && (
              <p className="text-sm text-green-600">{status.message}</p>
            )}
            {status.success === false && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
          </div>
        </form>

        <div className="mt-8 text-sm text-slate-600">
          Or reach me directly:
          <div className="mt-2 flex flex-wrap gap-4">
            <a href="mailto:shubhajagadeesh155@gmail.com" className="text-indigo-600 hover:underline">shubhajagadeesh155@gmail.com</a>
            <a href="https://www.linkedin.com/in/shubha-jagadeesh-b441842a9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/Shubhajagadeesh123" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

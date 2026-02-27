"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const anchors = [
  { href: "#solutions", label: "Решения" },
  { href: "#store", label: "Магазин" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between section-padding">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg racing-gradient text-sm font-black text-white">
            SR
          </div>
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-white">SIMRACE</span>
            <span className="text-red-600">.RU</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="px-4 py-2 text-[13px] font-semibold tracking-wide text-neutral-400 transition-colors hover:text-white"
            >
              {a.label}
            </a>
          ))}
          <a
            href="tel:+79777220066"
            className="ml-4 inline-flex items-center gap-2 rounded-lg racing-gradient px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-red-600/20 transition-transform hover:scale-[1.03] active:scale-95 animate-glow"
          >
            <Phone size={13} strokeWidth={2.5} />
            +7 977 722-00-66
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.06] bg-neutral-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 pb-5 pt-3">
              {anchors.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-4 py-3 text-[15px] font-semibold text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {a.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="tel:+79777220066"
                  className="flex items-center justify-center gap-2 rounded-lg racing-gradient px-5 py-3.5 text-[15px] font-bold text-white"
                >
                  <Phone size={16} />
                  +7 977 722-00-66
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

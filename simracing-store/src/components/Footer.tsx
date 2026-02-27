import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950">
      <div className="glow-line" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 section-padding py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg racing-gradient text-xs font-black text-white">
            SR
          </div>
          <span className="text-sm font-extrabold tracking-tight">
            <span className="text-white">SIMRACE</span>
            <span className="text-red-600">.RU</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={11} className="text-red-600" />
            ТЦ «Lille», 1-е Успенское ш., пос. Новое Лапино, Московская обл.
          </span>
          <a href="tel:+79777220066" className="flex items-center gap-1.5 transition-colors hover:text-red-500">
            <Phone size={11} className="text-red-600" />
            +7 977 722-00-66
          </a>
        </div>

        <p className="text-[11px] text-neutral-700">
          &copy; {new Date().getFullYear()} SIMRACE.RU
        </p>
      </div>
    </footer>
  );
}

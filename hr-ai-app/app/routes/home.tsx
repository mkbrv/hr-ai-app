import { Link } from "react-router"
import { useTranslation } from "react-i18next"

import { BrandLogo } from "~/components/brand-logo"

export default function Home() {
  const { t } = useTranslation()
  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-white px-4 py-10">
      {/* Scattered decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[8%] left-[6%] size-6 rounded-full border-2 border-slate-200" />
        <div className="absolute top-[23%] left-[11%] size-4 rounded-full border-2 border-slate-200" />
        <div className="absolute top-[12%] right-[20%] size-7 rounded-full border-2 border-slate-200" />
        <div className="absolute top-[52%] right-[4%] size-5 rounded-full border-2 border-slate-200" />
        <div className="absolute bottom-[32%] left-[4%] size-6 rounded-full border-2 border-slate-200" />
        <div className="absolute bottom-[14%] right-[8%] size-4 rounded-full border-2 border-slate-200" />
        <div className="absolute top-[18%] left-[24%] h-3 w-4 rotate-12 bg-slate-200" />
        <div className="absolute top-[7%] right-[9%] h-3 w-4 -rotate-6 bg-slate-200" />
        <div className="absolute top-[44%] right-[7%] size-3 rotate-45 bg-slate-200" />
        <div className="absolute bottom-[46%] left-[7%] h-3 w-4 rotate-12 bg-slate-200" />
        <div className="absolute top-[36%] left-[2%] h-2 w-3 -rotate-12 bg-slate-200" />
      </div>

      {/* Logo */}
      <BrandLogo className="relative z-10" />

      {/* Hero content */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tight text-[#1a237e] sm:text-6xl">
          {t("home.title")}
        </h1>
        <p className="text-base text-slate-400">{t("home.subtitle")}</p>
        <Link
          to="/app"
          className="mt-1 inline-flex min-w-[200px] items-center justify-center rounded bg-[#1a237e] px-10 py-3.5 text-sm font-bold tracking-[0.18em] text-white uppercase transition-opacity hover:opacity-90"
        >
          {t("home.cta")}
        </Link>
      </div>

      {/* Interview illustration */}
      <div className="relative z-10 mt-6 w-full max-w-md">
        <InterviewIllustration />
      </div>
    </main>
  )
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 85" className={className} aria-hidden="true">
      {/* Trend chart line */}
      <polyline
        points="5,72 22,52 38,62 58,35 76,48 95,18"
        fill="none"
        stroke="#dc2626"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head */}
      <polyline
        points="83,12 95,18 89,29"
        fill="none"
        stroke="#dc2626"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Running person — head */}
      <circle cx="71" cy="20" r="8" fill="#1a237e" />
      {/* Body */}
      <line x1="71" y1="28" x2="69" y2="48" stroke="#1a237e" strokeWidth="5" strokeLinecap="round" />
      {/* Arm forward (briefcase side) */}
      <line x1="70" y1="36" x2="84" y2="30" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Arm back */}
      <line x1="70" y1="36" x2="59" y2="43" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Leg forward */}
      <line x1="69" y1="48" x2="79" y2="62" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Leg back */}
      <line x1="69" y1="48" x2="61" y2="61" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Briefcase */}
      <rect x="83" y="26" width="11" height="8" rx="1.5" fill="#1a237e" />
      <path
        d="M86,26 L86,24 Q86,22.5 88.5,22.5 Q91,22.5 91,24 L91,26"
        fill="none"
        stroke="#1a237e"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function InterviewIllustration() {
  return (
    <svg viewBox="0 0 400 300" aria-label="Job interview illustration" className="w-full">
      {/* ── Background document (top-left) ── */}
      <rect x="12" y="55" width="68" height="92" rx="3" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="20" y="55" width="32" height="20" rx="2" fill="#818cf8" />
      <rect x="20" y="80" width="52" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="87" width="42" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="94" width="50" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="101" width="36" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="108" width="48" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="115" width="52" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="122" width="38" height="3" rx="1" fill="#e2e8f0" />
      <rect x="20" y="129" width="46" height="3" rx="1" fill="#e2e8f0" />

      {/* ── Left chair ── */}
      <rect x="18" y="158" width="108" height="52" rx="6" fill="#6366f1" />
      <rect x="18" y="204" width="108" height="16" rx="4" fill="#4f46e5" />
      {/* X-legs */}
      <line x1="28" y1="220" x2="116" y2="278" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <line x1="116" y1="220" x2="28" y2="278" stroke="#111827" strokeWidth="5" strokeLinecap="round" />

      {/* ── Left person (interviewer) ── */}
      {/* Head */}
      <circle cx="72" cy="128" r="21" fill="#fbbf24" />
      {/* Curly gray hair */}
      <path d="M51,122 Q51,102 72,100 Q93,102 93,122" fill="#94a3b8" />
      {/* Glasses */}
      <circle cx="65" cy="127" r="6" fill="none" stroke="#374151" strokeWidth="2" />
      <circle cx="79" cy="127" r="6" fill="none" stroke="#374151" strokeWidth="2" />
      <line x1="71" y1="127" x2="73" y2="127" stroke="#374151" strokeWidth="2" />
      <line x1="51" y1="126" x2="59" y2="126" stroke="#374151" strokeWidth="2" />
      <line x1="85" y1="126" x2="93" y2="126" stroke="#374151" strokeWidth="2" />
      {/* Dark suit body */}
      <path d="M44,168 Q44,148 72,146 Q100,148 100,168" fill="#1e293b" />
      <ellipse cx="72" cy="196" rx="28" ry="10" fill="#1e293b" />
      {/* Red tie */}
      <path d="M69,148 L72,163 L75,148 L72,144 Z" fill="#dc2626" />
      {/* Legs (crossed) */}
      <path
        d="M50,220 Q62,238 82,233 Q100,228 114,245"
        fill="none"
        stroke="#1e293b"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <line x1="86" y1="232" x2="92" y2="264" stroke="#1e293b" strokeWidth="13" strokeLinecap="round" />

      {/* ── Center resume / document ── */}
      <rect x="164" y="88" width="82" height="112" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Profile photo */}
      <rect x="172" y="97" width="28" height="28" rx="2" fill="#818cf8" opacity="0.55" />
      <circle cx="186" cy="107" r="9" fill="#6366f1" opacity="0.8" />
      {/* Name area */}
      <rect x="205" y="99" width="32" height="4" rx="1" fill="#cbd5e1" />
      <rect x="205" y="107" width="25" height="3" rx="1" fill="#e2e8f0" />
      <rect x="205" y="114" width="29" height="3" rx="1" fill="#e2e8f0" />
      {/* Content lines */}
      <rect x="172" y="131" width="66" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="138" width="56" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="145" width="66" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="152" width="48" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="159" width="62" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="166" width="52" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="173" width="66" height="3" rx="1" fill="#e2e8f0" />
      <rect x="172" y="180" width="44" height="3" rx="1" fill="#e2e8f0" />

      {/* ── Center table ── */}
      <rect x="168" y="224" width="64" height="9" rx="3" fill="#1e293b" />
      <line x1="176" y1="233" x2="200" y2="272" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
      <line x1="224" y1="233" x2="200" y2="272" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
      {/* Mugs */}
      <rect x="176" y="212" width="17" height="13" rx="2" fill="#818cf8" />
      <path d="M193,215 Q199,215 199,218 Q199,222 193,222" fill="none" stroke="#818cf8" strokeWidth="2" />
      <rect x="207" y="212" width="17" height="13" rx="2" fill="#818cf8" />
      <path d="M224,215 Q230,215 230,218 Q230,222 224,222" fill="none" stroke="#818cf8" strokeWidth="2" />

      {/* ── Right chair ── */}
      <rect x="274" y="158" width="108" height="52" rx="6" fill="#6366f1" />
      <rect x="274" y="204" width="108" height="16" rx="4" fill="#4f46e5" />
      <line x1="284" y1="220" x2="372" y2="278" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <line x1="372" y1="220" x2="284" y2="278" stroke="#111827" strokeWidth="5" strokeLinecap="round" />

      {/* ── Right person (candidate) ── */}
      {/* Head */}
      <circle cx="328" cy="128" r="21" fill="#fbbf24" />
      {/* Short dark hair */}
      <path d="M307,122 Q307,102 328,100 Q349,102 349,122" fill="#1e293b" />
      {/* Eyes */}
      <circle cx="321" cy="128" r="2.5" fill="#1e293b" />
      <circle cx="335" cy="128" r="2.5" fill="#1e293b" />
      {/* Blue top / body */}
      <path d="M300,168 Q300,148 328,146 Q356,148 356,168" fill="#6366f1" />
      <ellipse cx="328" cy="196" rx="28" ry="10" fill="#6366f1" />
      {/* Arm extended holding resume */}
      <path
        d="M303,162 Q258,148 250,138"
        fill="none"
        stroke="#6366f1"
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Legs */}
      <line x1="312" y1="220" x2="310" y2="268" stroke="#1e293b" strokeWidth="14" strokeLinecap="round" />
      <line x1="346" y1="220" x2="350" y2="268" stroke="#1e293b" strokeWidth="14" strokeLinecap="round" />
    </svg>
  )
}

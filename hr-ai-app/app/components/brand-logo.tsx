import { Link } from "react-router"
import { useTranslation } from "react-i18next"

import { cn } from "~/lib/utils"

interface BrandLogoProps {
  /** Show the slogan line beneath the wordmark */
  showSlogan?: boolean
  /** Extra classes on the wrapping element */
  className?: string
  /** When true, wraps the logo in a Link to "/" */
  asLink?: boolean
  /** Icon size class (e.g. "h-10 w-10"). Defaults to "h-20 w-20" */
  iconSize?: string
  /** Wordmark text size class. Defaults to "text-xl" */
  wordmarkSize?: string
}

export function BrandLogo({
  showSlogan = true,
  className,
  asLink = false,
  iconSize = "h-20 w-20",
  wordmarkSize = "text-xl",
}: BrandLogoProps) {
  const { t } = useTranslation()
  const content = (
    <span className={cn("flex flex-col items-center gap-0.5", className)}>
      <LogoIcon className={iconSize} />
      <span
        className={cn(
          "font-black tracking-[0.18em] text-[#1a237e] uppercase",
          wordmarkSize,
        )}
      >
        {t("brand.name")}
      </span>
      {showSlogan && (
        <span className="text-[9px] font-bold tracking-[0.28em] text-red-500 uppercase">
          {t("brand.slogan")}
        </span>
      )}
    </span>
  )

  if (asLink) {
    return (
      <Link to="/" aria-label={t("brand.homeLink")}>
        {content}
      </Link>
    )
  }

  return content
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
      {/* Head */}
      <circle cx="71" cy="20" r="8" fill="#1a237e" />
      {/* Body */}
      <line x1="71" y1="28" x2="69" y2="48" stroke="#1a237e" strokeWidth="5" strokeLinecap="round" />
      {/* Arm forward */}
      <line x1="70" y1="36" x2="84" y2="30" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Arm back */}
      <line x1="70" y1="36" x2="59" y2="43" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Leg forward */}
      <line x1="69" y1="48" x2="79" y2="62" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Leg back */}
      <line x1="69" y1="48" x2="61" y2="61" stroke="#1a237e" strokeWidth="4" strokeLinecap="round" />
      {/* Briefcase body */}
      <rect x="83" y="26" width="11" height="8" rx="1.5" fill="#1a237e" />
      {/* Briefcase handle */}
      <path
        d="M86,26 L86,24 Q86,22.5 88.5,22.5 Q91,22.5 91,24 L91,26"
        fill="none"
        stroke="#1a237e"
        strokeWidth="1.5"
      />
    </svg>
  )
}

import { useEffect, useRef, useState } from "react"

import { cn } from "~/lib/utils"
import { selectLanguage, useLanguageStore, type LanguageCode } from "~/store/language"

interface Language {
  code: LanguageCode
  label: string
  /** ISO 3166-1 alpha-2 country code for flag-icons (lowercase) */
  countryCode: string
}

const LANGUAGES: Language[] = [
  { code: "en", label: "English",   countryCode: "us" },
  { code: "es", label: "Español",   countryCode: "es" },
  { code: "fr", label: "Français",  countryCode: "fr" },
  { code: "de", label: "Deutsch",   countryCode: "de" },
  { code: "pt", label: "Português", countryCode: "br" },
]

interface LanguageSelectorProps {
  className?: string
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const language = useLanguageStore(selectLanguage)
  const setLanguage = useLanguageStore((s) => s.setLanguage)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  const handleSelect = (lang: Language) => {
    setLanguage(lang.code)
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      {/* Trigger button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 pr-2.5 shadow-sm backdrop-blur-sm transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a237e]/30"
      >
        <span className={`fi fi-${current.countryCode} rounded-sm text-base`} aria-hidden="true" />
        <span className="text-sm font-medium text-[#1a237e]">{current.label}</span>
        <svg
          className={cn("size-4 text-slate-400 transition-transform", open && "rotate-180")}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 z-50 mt-1.5 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === language}
              onClick={() => handleSelect(lang)}
              className={cn(
                "flex cursor-pointer items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-slate-50",
                lang.code === language && "bg-slate-50 font-semibold text-[#1a237e]",
              )}
            >
              <span className={`fi fi-${lang.countryCode} rounded-sm text-base shrink-0`} aria-hidden="true" />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

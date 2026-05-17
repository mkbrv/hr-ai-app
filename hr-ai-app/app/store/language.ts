import { create } from "zustand"
import { persist } from "zustand/middleware"

import i18n from "~/i18n"

export type LanguageCode = "en" | "es" | "fr" | "de" | "pt"

interface LanguageState {
  language: LanguageCode
}

interface LanguageActions {
  setLanguage: (language: LanguageCode) => void
}

const initialState: LanguageState = {
  language: "en",
}

export const useLanguageStore = create<LanguageState & LanguageActions>()(
  persist(
    (set) => ({
      ...initialState,

      setLanguage: (language) => {
        i18n.changeLanguage(language)
        set({ language })
      },
    }),
    {
      name: "language",
      onRehydrateStorage: () => (state) => {
        if (state?.language) {
          i18n.changeLanguage(state.language)
        }
      },
    },
  ),
)

// Selectors
export const selectLanguage = (state: LanguageState): LanguageCode => state.language

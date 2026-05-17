import type { ExperienceLevel } from "./enums"
import type { Location } from "./location"
import type { Skill } from "./skill"

export interface Candidate {
  id: string
  name: string
  email: string
  photo?: string
  bio?: string
  resumeUrl?: string
  location: Location
  skills: Skill[]
  experienceLevel: ExperienceLevel
  hasDriverLicense: boolean
  createdAt: Date
}

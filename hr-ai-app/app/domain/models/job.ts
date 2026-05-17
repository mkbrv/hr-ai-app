import type { Company } from "./company"
import type { EmploymentType, ExperienceLevel, JobStatus, WorkArrangement } from "./enums"
import type { Location } from "./location"
import type { Skill } from "./skill"

export type CompensationPeriod = "hourly" | "daily" | "weekly" | "monthly" | "yearly"

export interface Compensation {
  min: number
  max?: number
  currency: string
  period: CompensationPeriod
}

export interface JobTranslation {
  title: string
  description: string
  skills: Record<string, string>
}

export interface Job {
  id: string
  title: string
  description: string
  photo?: string
  location: Location
  compensation: Compensation
  skills: Skill[]
  requiresDriverLicense: boolean
  employmentType: EmploymentType
  workArrangement: WorkArrangement
  experienceLevel: ExperienceLevel
  status: JobStatus
  company: Company
  createdAt: Date
  translations?: Record<string, JobTranslation>
}

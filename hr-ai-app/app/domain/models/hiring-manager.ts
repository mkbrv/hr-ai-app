import type { Company } from "./company"

export interface HiringManager {
  id: string
  name: string
  email: string
  photo?: string
  company: Company
  createdAt: Date
}

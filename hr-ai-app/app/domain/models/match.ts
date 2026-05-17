import type { MatchStatus } from "./enums"

export interface Match {
  id: string
  candidateId: string
  jobId: string
  companyId: string
  status: MatchStatus
  createdAt: Date
}

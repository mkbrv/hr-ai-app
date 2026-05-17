import type { SwipeDirection } from "./enums"

export interface Swipe {
  id: string
  candidateId: string
  jobId: string
  direction: SwipeDirection
  createdAt: Date
}

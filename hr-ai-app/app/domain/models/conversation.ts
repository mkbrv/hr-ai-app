export interface Conversation {
  id: string
  matchId: string
  candidateId: string
  hiringManagerId: string
  lastMessageAt?: Date
  createdAt: Date
}

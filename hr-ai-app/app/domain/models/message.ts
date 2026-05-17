import type { MessageSenderRole } from "./enums"

export interface Message {
  id: string
  conversationId: string
  senderId: string
  senderRole: MessageSenderRole
  body: string
  readAt?: Date
  createdAt: Date
}

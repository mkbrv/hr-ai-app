import type { NotificationType } from "./enums"

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  body?: string
  readAt?: Date
  createdAt: Date
}

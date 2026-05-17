import type { CompanySize } from "./enums"
import type { Location } from "./location"

export interface Company {
  id: string
  name: string
  description?: string
  logo?: string
  industry?: string
  size?: CompanySize
  website?: string
  location: Location
}

import { Banknote, Car, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"

import { assetUrl, cn } from "~/lib/utils"
import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import type { Job } from "~/domain/models"

function formatCompensation(job: Job): string {
  const { min, max, currency, period } = job.compensation
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(n)
  return max ? `${fmt(min)} – ${fmt(max)} / ${period}` : `${fmt(min)} / ${period}`
}

function formatLocation(job: Job): string {
  const { city, state, country } = job.location
  return [city, state, country].filter(Boolean).join(", ")
}

export function JobCard({ job, className }: { job: Job; className?: string }) {
  const { t } = useTranslation()
  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      {job.photo ? (
        <img
          src={assetUrl(job.photo)}
          alt={t("jobCard.photoAlt", { title: job.title })}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-muted" />
      )}

      <CardHeader>
        <CardTitle className="text-lg">{job.title}</CardTitle>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" />
            {formatLocation(job)}
          </span>
          <span className="flex items-center gap-1.5">
            <Banknote className="size-3.5 shrink-0" />
            {formatCompensation(job)}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {job.description}
        </p>

        {(job.skills.length > 0 || job.requiresDriverLicense) && (
          <div className="flex flex-wrap gap-1.5">
            {job.skills.map((skill) => (
              <Badge key={skill.id} variant="outline">
                {skill.name}
              </Badge>
            ))}
            {job.requiresDriverLicense && (
              <Badge variant="secondary">
                <Car className="size-3" />
                {t("jobCard.driverLicense")}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

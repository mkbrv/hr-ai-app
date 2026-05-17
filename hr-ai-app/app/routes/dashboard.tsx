import { useRef } from "react"
import { Heart, X } from "lucide-react"

import { BrandLogo } from "~/components/brand-logo"
import { JobCard } from "~/components/job-card"
import { SwipeableCard, type SwipeableCardRef } from "~/components/swipeable-card"
import { Button } from "~/components/ui/button"
import { selectCurrentJob, selectHasMoreJobs, useJobsStore } from "~/store/jobs"

export default function Dashboard() {
  const currentJob = useJobsStore(selectCurrentJob)
  const hasMore = useJobsStore(selectHasMoreJobs)
  const advance = useJobsStore((s) => s.advance)
  const cardRef = useRef<SwipeableCardRef>(null)

  return (
    <main className="flex min-h-svh flex-col bg-background">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center border-b px-4">
        <BrandLogo
          asLink
          showSlogan={false}
          iconSize="h-8 w-8"
          wordmarkSize="text-sm"
          className="flex-row gap-2"
        />
      </header>

      {/* Centered column — card + actions */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-4 sm:p-8">
        <section
          className="w-full max-w-sm"
          aria-label="Job feed"
        >
          {hasMore && currentJob ? (
            <SwipeableCard
              key={currentJob.id}
              ref={cardRef}
              onSwipeLeft={advance}
              onSwipeRight={advance}
            >
              <JobCard job={currentJob} className="shadow-lg" />
            </SwipeableCard>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <span className="text-5xl" aria-hidden="true">
                🎉
              </span>
              <p className="text-lg font-semibold text-foreground">You're all caught up!</p>
              <p className="text-sm text-muted-foreground">
                No more jobs right now — check back later.
              </p>
            </div>
          )}
        </section>

        {/* Action buttons */}
        <div
          className="flex items-center justify-center gap-10"
          aria-label="Swipe actions"
        >
          <Button
            variant="outline"
            size="icon"
            disabled={!hasMore}
            aria-label="Pass"
            className="size-16 rounded-full border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground disabled:opacity-30"
            onClick={() => cardRef.current?.swipe("left")}
          >
            <X className="size-7" />
          </Button>
          <Button
            size="icon"
            disabled={!hasMore}
            aria-label="Apply"
            className="size-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30"
            onClick={() => cardRef.current?.swipe("right")}
          >
            <Heart className="size-7" />
          </Button>
        </div>
      </div>
    </main>
  )
}

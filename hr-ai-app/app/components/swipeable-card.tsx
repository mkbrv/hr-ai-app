import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"

const SWIPE_THRESHOLD = 80

export interface SwipeableCardRef {
  swipe: (direction: "left" | "right") => void
}

interface SwipeableCardProps {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  children: React.ReactNode
}

export const SwipeableCard = forwardRef<SwipeableCardRef, SwipeableCardProps>(
  function SwipeableCard({ onSwipeLeft, onSwipeRight, children }, ref) {
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const startRef = useRef({ x: 0, y: 0 })
    const cardRef = useRef<HTMLDivElement>(null)

    const dismiss = useCallback(
      (direction: "left" | "right") => {
        const flyX =
          direction === "right" ? window.innerWidth * 1.5 : -window.innerWidth * 1.5
        setOffset({ x: flyX, y: 0 })
        setTimeout(direction === "right" ? onSwipeRight : onSwipeLeft, 350)
      },
      [onSwipeLeft, onSwipeRight],
    )

    useImperativeHandle(ref, () => ({ swipe: dismiss }), [dismiss])

    const handlePointerDown = (e: React.PointerEvent) => {
      setIsDragging(true)
      startRef.current = { x: e.clientX, y: e.clientY }
      cardRef.current?.setPointerCapture(e.pointerId)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging) return
      setOffset({
        x: e.clientX - startRef.current.x,
        y: e.clientY - startRef.current.y,
      })
    }

    const handlePointerUp = () => {
      if (!isDragging) return
      setIsDragging(false)
      if (offset.x > SWIPE_THRESHOLD) {
        dismiss("right")
      } else if (offset.x < -SWIPE_THRESHOLD) {
        dismiss("left")
      } else {
        setOffset({ x: 0, y: 0 })
      }
    }

    const rotation = offset.x * 0.08
    const applyOpacity = Math.min(Math.max(offset.x / SWIPE_THRESHOLD, 0), 1)
    const passOpacity = Math.min(Math.max(-offset.x / SWIPE_THRESHOLD, 0), 1)

    return (
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full touch-none select-none cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(${offset.x}px) translateY(${offset.y * 0.3}px) rotate(${rotation}deg)`,
          transition: isDragging
            ? "none"
            : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Apply overlay */}
        <div
          className="absolute inset-0 z-10 flex items-start justify-start p-5 pointer-events-none"
          style={{ opacity: applyOpacity }}
        >
          <span className="border-[3px] border-green-500 text-green-500 font-black text-2xl uppercase px-3 py-1 rounded-lg -rotate-12 bg-background/30 backdrop-blur-sm">
            Apply
          </span>
        </div>

        {/* Pass overlay */}
        <div
          className="absolute inset-0 z-10 flex items-start justify-end p-5 pointer-events-none"
          style={{ opacity: passOpacity }}
        >
          <span className="border-[3px] border-destructive text-destructive font-black text-2xl uppercase px-3 py-1 rounded-lg rotate-12 bg-background/30 backdrop-blur-sm">
            Pass
          </span>
        </div>

        {children}
      </div>
    )
  },
)

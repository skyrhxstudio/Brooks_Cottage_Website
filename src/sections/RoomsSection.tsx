// src/sections/RoomsSection.tsx
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import './RoomsSection.css'

interface Room {
  title: string
  description: string
  image: string
  detailsPath: string
}

const ROOMS: Room[] = [
  {
    title: 'The Contemporary Room',
    description:
      'Clean lines, soft neutral tones and a calm, modern feel, with a private entrance and full en-suite bathroom.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
    detailsPath: '/rooms/the-contemporary-room',
  },
  {
    title: 'The Indonesian Room',
    description:
      'Warm timbers and handcrafted island-inspired details create a relaxed, exotic retreat in the heart of Pretoria.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
    detailsPath: '/rooms/the-indonesian-room',
  },
  {
    title: 'The Modern Victorian Room',
    description:
      'Classic Victorian elegance meets modern comfort, beneath the original pressed ceilings of this lovely old home.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80',
    detailsPath: '/rooms/the-modern-victorian-room',
  },
  {
    title: 'The Mahogany Room',
    description:
      'Rich mahogany furnishings and deep, inviting tones for a timeless stay with shower and bath en-suite.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    detailsPath: '/rooms/the-mahogany-room',
  },
  {
    title: 'The Eclectic Room',
    description:
      'A playful, curated mix of colour, texture and character, north-facing and filled with natural light.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    detailsPath: '/rooms/the-eclectic',
  },
]

function FlowerIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g fill="#D7942E">
        <ellipse cx="32" cy="16" rx="8" ry="14" />
        <ellipse cx="32" cy="48" rx="8" ry="14" />
        <ellipse cx="16" cy="32" rx="14" ry="8" />
        <ellipse cx="48" cy="32" rx="14" ry="8" />
        <ellipse cx="20.7" cy="20.7" rx="8" ry="14" transform="rotate(-45 20.7 20.7)" opacity="0.6" />
        <ellipse cx="43.3" cy="43.3" rx="8" ry="14" transform="rotate(-45 43.3 43.3)" opacity="0.6" />
        <ellipse cx="43.3" cy="20.7" rx="8" ry="14" transform="rotate(45 43.3 20.7)" opacity="0.6" />
        <ellipse cx="20.7" cy="43.3" rx="8" ry="14" transform="rotate(45 20.7 43.3)" opacity="0.6" />
      </g>
      <circle cx="32" cy="32" r="7" fill="#151515" />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function RoomsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Distance of one "step" = card width + gap between cards
  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const firstCard = track.querySelector<HTMLElement>('.rooms__card')
    if (!firstCard) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return firstCard.offsetWidth + gap
  }, [])

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current
      if (!track) return
      const clamped = Math.max(0, Math.min(ROOMS.length - 1, index))
      track.scrollTo({ left: clamped * getStep(), behavior: 'smooth' })
    },
    [getStep],
  )

  // Keep the active index in sync with scrolling (arrows, swipe, trackpad)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const step = getStep()
      if (!step) return
      setActiveIndex(Math.round(track.scrollLeft / step))
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [getStep])

  const isFirst = activeIndex <= 0
  const isLast = activeIndex >= ROOMS.length - 1

  return (
    <section id="rooms" className="rooms">
      {/* Header: col 2 to col 4 */}
      <div className="rooms__header">
        <div className="rooms__flower">
          <FlowerIcon />
        </div>
        <p className="rooms__title">
          ROOMS &amp;
          <br />
          RATES
        </p>
      </div>

      {/* Intro paragraph: col 5, spans 6 columns */}
      <div className="rooms__intro">
        <p>
          Choose from five tastefully decorated, north-facing rooms, each with
          its own private entrance and full en-suite bathroom with shower and
          bath. Every room has its own character, so there is one to suit
          every guest.
        </p>
      </div>

      {/* Controls: CTA left, arrows right */}
      <div className="rooms__controls">

        <div className="rooms__arrows">
          <button
            type="button"
            className="rooms__arrow"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={isFirst}
            aria-label="Previous room"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className="rooms__arrow"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={isLast}
            aria-label="Next room"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
        <Link to="/rooms-rates" className="rooms__cta">
          <p>VIEW ALL ROOMS &amp; RATES</p>
        </Link>
      </div>

      {/* Carousel: starts at col 2, runs off the right edge of the page */}
      <div className="rooms__carousel">
        <div className="rooms__track" ref={trackRef}>
          {ROOMS.map((room, index) => (
            <article
              key={room.title}
              className="rooms__card"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%), url(${room.image})`,
              }}
              aria-label={`${index + 1} of ${ROOMS.length}: ${room.title}`}
            >
              <div className="rooms__card-content">
                <div className="rooms__card-info">
                  <p className="rooms__card-title">{room.title}</p>
                  <p className="rooms__card-text">{room.description}</p>
                </div>

                <div className="rooms__card-actions">
                  <Link to={room.detailsPath} className="rooms__card-link">
                    VIEW MORE DETAILS
                  </Link>
                  <Link to="/contact" className="rooms__card-book">
                    <p>BOOK THIS ROOM</p>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Spacer so the last room can also line up at column 2 */}
          <div className="rooms__spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
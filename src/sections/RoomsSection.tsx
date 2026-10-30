// src/sections/RoomsSection.tsx
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import contemporaryRoomImage from '../assets/images/rooms/The Contemporary Room.webp'
import indonesianRoomImage from '../assets/images/rooms/The Indonesian Room.webp'
import modernVictorianRoomImage from '../assets/images/rooms/The Modern Victorian Room.webp'
import mahoganyRoomImage from '../assets/images/rooms/The Mahogany Room.webp'
import eclecticRoomImage from '../assets/images/rooms/The Eclectic Room.webp'
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
      'Modern room features bay window, with large bathroom and dressingroom combined. This en-suite bathroom has a his and hers shower with modern bath. Double Bed.',
    image: contemporaryRoomImage,
    detailsPath: '/rooms/the-contemporary-room',
  },
  {
    title: 'The Indonesian Room',
    description:
      'Indonesian styled amoire and furnishings make this room stylish and comfortable. The private patio area is ideal for your early morning coffee. Queen sized bed.',
    image: indonesianRoomImage,
    detailsPath: '/rooms/the-indonesian-room',
  },
  {
    title: 'The Modern Victorian Room',
    description:
      'Spacious, modern victorian has a king bed and a single bed, with full victorian bathroom including ball and claw bath. This room is ideal for 3 sharing. Extra length King bed & 3/4 Bed.',
    image: modernVictorianRoomImage,
    detailsPath: '/rooms/the-modern-victorian-room',
  },
  {
    title: 'The Mahogany Room',
    description:
      'Very spacious mahogany styled room, with queen bed and full en-suite bathroom. A view of the swimming pool and the tranquil garden creates the relaxing atmosphere that you deserve. Queen sized bed & 3/4 bed.',
    image: mahoganyRoomImage,
    detailsPath: '/rooms/the-mahogany-room',
  },
  {
    title: 'The Eclectic Room',
    description:
      'North-facing, with direct access from the swimming pool, this room has every advantage. It\'s eclectic decor is easy on the eye, and it features a queen bed with a full en-suite bathroom.',
    image: eclecticRoomImage,
    detailsPath: '/rooms/the-eclectic-room',
  },
]

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return <i className={`fa-solid fa-arrow-${direction}`} aria-hidden="true" />
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
      <span className="rooms__watermark" aria-hidden="true">Rooms</span>
      {/* Header: col 2 to col 4 */}
      <div className="rooms__header">
        <div className="rooms__flower">
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
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
          Discover five spacious, north-facing rooms, each tastefully decorated to offer a unique blend of comfort and elegance. Enjoy abundant natural light, a private entrance, and a full en-suite bathroom with a shower and bath. Additional comforts include solar-powered electricity, free fibre Wi-Fi, DSTV, secure parking, a swimming pool, and laundry services at an additional charge.
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
                backgroundImage: `linear-gradient(to top, rgba(22,22,22,0.99) 0%, rgba(22,22,22,0.70) 55%, rgba(22,22,22,0.10) 100%), url(${room.image})`,
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
                  <a
                    href="https://book.nightsbridge.com/31512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rooms__card-book"
                  >
                    <p>BOOK THIS ROOM</p>
                  </a>
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
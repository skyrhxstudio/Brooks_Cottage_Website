import { Link } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import './RoomDetailLayout.css'

interface RoomDetailLayoutProps {
  title: string
  description: string
  singleRate: string
  sharingRate: string
  additionalRate?: string
  breakfastNote?: string
  features?: string[]
  images: string[]
  pageId: string
}

const allRoomLinks = [
  ['The Contemporary Room', '/rooms/the-contemporary-room'],
  ['The Indonesian Room', '/rooms/the-indonesian-room'],
  ['The Modern Victorian Room', '/rooms/the-modern-victorian-room'],
  ['The Mahogany Room', '/rooms/the-mahogany-room'],
  ['The Eclectic Room', '/rooms/the-eclectic-room'],
] as const

function RoomDetailLayout({
  title,
  description,
  singleRate,
  sharingRate,
  additionalRate,
  breakfastNote = 'Breakfast costs R160 per person.',
  features = [],
  images,
  pageId,
}: RoomDetailLayoutProps) {
  const similarRooms = allRoomLinks.filter((room) => room[0] !== title)
  const [activeImage, setActiveImage] = useState(0)

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length)
  }

  return (
    <main id={pageId} className="room-detail-page">
      <span className="room-detail-page__watermark" aria-hidden="true">Rooms</span>

      <header className="room-detail-page__header">
        <img src="/heading_decor.svg" alt="" aria-hidden="true" />
        <h1>{title}</h1>
      </header>

      <div className="room-detail-page__carousel">
        <img src={images[activeImage]} alt={`${title} interior view ${activeImage + 1}`} />
        <button
          type="button"
          className="room-detail-page__carousel-control room-detail-page__carousel-control--previous"
          onClick={showPreviousImage}
          aria-label="Previous room image"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="room-detail-page__carousel-control room-detail-page__carousel-control--next"
          onClick={showNextImage}
          aria-label="Next room image"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <section className="room-detail-page__description">
        <header>
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
          <h2>ROOM DESCRIPTION</h2>
        </header>
        <p>{description}</p>
        {features.length > 0 && (
          <ul>
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
      </section>

      <aside className="room-detail-page__rates">
        <p className="room-detail-page__label">Rates (SADC)</p>
        <div>
          <span>Single</span>
          <strong>{singleRate}</strong>
        </div>
        <div>
          <span>Double sharing</span>
          <strong>{sharingRate}</strong>
        </div>
        {additionalRate && <p>{additionalRate}</p>}
        <small>{breakfastNote}</small>
      </aside>

      <section className="room-detail-page__similar">
        <header>
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
          <h2>YOU MIGHT ALSO LIKE</h2>
        </header>
        <div>
          {similarRooms.map(([roomTitle, path]) => (
            <Link key={roomTitle} to={path}>{roomTitle}</Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RoomDetailLayout

import { useState } from 'react'
import PageMetadata from '../components/PageMetadata'
import aboutImage from '../assets/images/about_section_img.webp'
import galleryImage from '../assets/images/gallery_section_img.webp'
import servicesPoolImage from '../assets/images/services_section_img_1.webp'
import guestLoungeImage from '../assets/images/services_section_img_2.jpeg'
import modernVictorianImage from '../assets/images/rooms/The Modern Victorian Room.png'
import mahoganyImage from '../assets/images/rooms/The Mahogany Room.png'
import './GalleryPage.css'

const GALLERY_IMAGES = [
  { src: galleryImage, alt: 'Brooks Cottage gallery', caption: 'Brooks Cottage' },
  { src: modernVictorianImage, alt: 'The Modern Victorian Room', caption: 'Modern Victorian Room' },
  { src: mahoganyImage, alt: 'The Mahogany Room', caption: 'Mahogany Room' },
  { src: servicesPoolImage, alt: 'Pool facilities at Brooks Cottage', caption: 'Pool & Garden' },
  { src: guestLoungeImage, alt: 'Guest lounge at Brooks Cottage', caption: 'Guest Lounge' },
  { src: aboutImage, alt: 'Brooks Cottage accommodation', caption: 'The Cottage' },
]

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <PageMetadata title="Gallery" path="/gallery" />
      <main id="gallery-page" className="gallery-page">
        <header className="gallery__header">
          <div className="gallery__flower"><img src="/heading_decor.svg" alt="" aria-hidden="true" /></div>
          <h1 className="gallery__title">GALLERY</h1>
        </header>

        <div className="gallery__intro">
          <p>Discover the character of Brooks Cottage, from individually decorated rooms to peaceful garden spaces.</p>
        </div>

        <div className="gallery__grid">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              className={`gallery__item gallery__item--${index + 1}`}
              type="button"
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View ${image.caption}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.caption}</span>
            </button>
          ))}
        </div>

        {selectedIndex !== null && (
          <div
            className="gallery__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY_IMAGES[selectedIndex].caption}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="gallery__lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close gallery image">×</button>
            <img src={GALLERY_IMAGES[selectedIndex].src} alt={GALLERY_IMAGES[selectedIndex].alt} onClick={(event) => event.stopPropagation()} />
          </div>
        )}
      </main>
    </>
  )
}

export default GalleryPage
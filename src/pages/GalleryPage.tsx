
import './GalleryPage.css'

function GalleryPage() {
  return (
    <>
      {/* <PageMetadata title="Gallery" path="/gallery" />
      <main id="gallery-page" className="gallery-page">
        <header className="gallery__header">
          <div className="gallery__flower"><img src="/heading_decor.svg" alt="" aria-hidden="true" /></div>
          <h1 className="gallery__title">GALLERY</h1>
        </header>

        <div className="gallery__intro">
          <p>Discover the character of Brooks Cottage, from individually decorated rooms to peaceful poolside spaces.</p>
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
          <div className="gallery__lightbox" role="dialog" aria-modal="true" aria-label={GALLERY_IMAGES[selectedIndex].caption} onClick={() => setSelectedIndex(null)}>
            <button className="gallery__lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close gallery image">×</button>
            <img src={GALLERY_IMAGES[selectedIndex].src} alt={GALLERY_IMAGES[selectedIndex].alt} onClick={(event) => event.stopPropagation()} />
          </div>
        )}
      </main> */}
    </>
  )
}

export default GalleryPage
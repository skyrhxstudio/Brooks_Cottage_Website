import PageMetadata from '../components/PageMetadata'
import './GalleryPage.css'

function GalleryPage() {
  return (
    <>
      <PageMetadata title="Gallery" path="/gallery" />
      <main id="gallery-page" className="gallery-page">
        <header className="page-header" />
      </main>
    </>
  )
}

export default GalleryPage

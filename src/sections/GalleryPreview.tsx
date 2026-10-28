import gallerySectionImage from "../assets/images/gallery_section_img.webp";
import "./GalleryPreview.css";

const GalleryPreview = () => {
  return (
    <section
      className="gallery-preview"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 20%,
          rgba(255, 255, 255, 0) 100%
        ), url(${gallerySectionImage})`,
      }}
    >
      <div className="gallery-preview__button">
        <p className="gallery-preview__text">VIEW OUR GALLERY</p>
      </div>
    </section>
  );
};

export default GalleryPreview;
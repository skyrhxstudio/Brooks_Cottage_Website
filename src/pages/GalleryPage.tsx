import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import heroImage from "../assets/images/hero_bg.webp";
import aboutImage from "../assets/images/about_section_img.webp";
import serviceImage1 from "../assets/images/services_section_img_1.webp";
import serviceImage2 from "../assets/images/services_section_img_2.webp";
import galleryImage from "../assets/images/gallery_section_img.webp";
import footerImage from "../assets/images/footer_img.webp";
import contemporaryRoom from "../assets/images/rooms/The Contemporary Room.webp";
import eclecticRoom from "../assets/images/rooms/The Eclectic Room.webp";
import indonesianRoom from "../assets/images/rooms/The Indonesian Room.webp";
import mahoganyRoom from "../assets/images/rooms/The Mahogany Room.webp";
import modernVictorianRoom from "../assets/images/rooms/The Modern Victorian Room.webp";
import "./GalleryPage.css";

const galleryImages = [
  { id: 1, src: heroImage, alt: "Brooks Cottage exterior and garden" },
  { id: 2, src: aboutImage, alt: "Brooks Cottage guest accommodation" },
  { id: 3, src: serviceImage1, alt: "Guest house facilities" },
  { id: 4, src: serviceImage2, alt: "Brooks Cottage service area" },
  { id: 5, src: galleryImage, alt: "Brooks Cottage gallery view" },
  { id: 6, src: footerImage, alt: "Brooks Cottage property" },
  { id: 7, src: contemporaryRoom, alt: "The Contemporary Room" },
  { id: 8, src: eclecticRoom, alt: "The Eclectic Room" },
  { id: 9, src: indonesianRoom, alt: "The Indonesian Room" },
  { id: 10, src: mahoganyRoom, alt: "The Mahogany Room" },
  { id: 11, src: modernVictorianRoom, alt: "The Modern Victorian Room" },
  // Add future imports near the existing imports, then add an entry here:
  // { id: 12, src: newRoomImage, alt: "New room description" },
  // { id: 13, src: newPropertyImage, alt: "New property image description" },
  // { id: 14, src: newGardenImage, alt: "New garden image description" },
];

const GalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const renderImage = (image: (typeof galleryImages)[number], index: number) => (
    <button
      key={image.id}
      type="button"
      className="gallery-page__image-button"
      onClick={() => setActiveIndex(index)}
    >
      <img
        className="gallery-page__image"
        src={image.src}
        alt={image.alt}
        loading="lazy"
      />
    </button>
  );

  return (
    <main className="gallery-page">
      <div className="gallery-page__grid">
        {galleryImages.map((image, index) => renderImage(image, index))}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-page__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-page__control gallery-page__control--close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gallery-page__control gallery-page__control--previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <img
            className="gallery-page__lightbox-image"
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="gallery-page__control gallery-page__control--next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
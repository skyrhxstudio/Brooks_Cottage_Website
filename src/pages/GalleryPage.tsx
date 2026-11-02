import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageMetadata from "../components/PageMetadata";
import heroImage from "../assets/images/hero_bg.webp";
import serviceImage1 from "../assets/images/services_section_img_1.webp";
import serviceImage2 from "../assets/images/services_section_img_2.webp";
import cookieImage from "../assets/images/cookie-img.webp";
import fountainImage from "../assets/images/fountain.webp";
import outsideImage1 from "../assets/images/outside (1).webp";
import outsideImage2 from "../assets/images/outside (2).webp";
import outsideImage3 from "../assets/images/outside (3).webp";
import outsideImage4 from "../assets/images/outside (4).webp";
import outsideImage5 from "../assets/images/outside (5).webp";
import sugarImage from "../assets/images/sugar-img.webp";
import contemporaryRoom from "../assets/images/rooms/The Contemporary Room.webp";
import contemporaryRoomDetail from "../assets/images/rooms/contemporary-room-img.webp";
import contemporaryRoomBathroom from "../assets/images/rooms/contemporary-room-img (1).webp";
import contemporaryRoomWindow from "../assets/images/rooms/contemporary-room-img (2).webp";
import eclecticRoom from "../assets/images/rooms/The Eclectic Room.webp";
import indonesianRoom from "../assets/images/rooms/The Indonesian Room.webp";
import mahoganyRoom from "../assets/images/rooms/The Mahogany Room.webp";
import modernVictorianRoom from "../assets/images/rooms/The Modern Victorian Room.webp";
import "./GalleryPage.css";

const galleryImages = [
  { id: 1, src: heroImage, alt: "Brooks Cottage exterior and garden" },
  { id: 3, src: serviceImage1, alt: "Guest house facilities" },
  { id: 4, src: serviceImage2, alt: "Brooks Cottage service area" },
  { id: 5, src: cookieImage, alt: "Cookie welcome treat" },
  { id: 7, src: fountainImage, alt: "Fountain at Brooks Cottage" },
  { id: 8, src: outsideImage1, alt: "Brooks Cottage exterior view" },
  { id: 9, src: outsideImage2, alt: "Brooks Cottage garden view" },
  { id: 10, src: outsideImage3, alt: "Brooks Cottage property view" },
  { id: 11, src: outsideImage4, alt: "Brooks Cottage outdoor area" },
  { id: 12, src: outsideImage5, alt: "Brooks Cottage outside view" },
  { id: 13, src: sugarImage, alt: "Sugar at Brooks Cottage" },
  { id: 14, src: contemporaryRoom, alt: "The Contemporary Room" },
  { id: 15, src: contemporaryRoomDetail, alt: "The Contemporary Room detail" },
  { id: 16, src: contemporaryRoomBathroom, alt: "The Contemporary Room bathroom" },
  { id: 17, src: contemporaryRoomWindow, alt: "The Contemporary Room window" },
  { id: 18, src: eclecticRoom, alt: "The Eclectic Room" },
  { id: 19, src: indonesianRoom, alt: "The Indonesian Room" },
  { id: 20, src: mahoganyRoom, alt: "The Mahogany Room" },
  { id: 21, src: modernVictorianRoom, alt: "The Modern Victorian Room" },
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
    <>
      <PageMetadata
        title="Gallery"
        path="/gallery"
        description="Explore the rooms, gardens, facilities, and interior spaces at Brooks Cottage."
      />
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
    </>
  );
};

export default GalleryPage;
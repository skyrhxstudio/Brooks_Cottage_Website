import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./GalleryPage.css";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    alt: "Cozy guesthouse living area",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright modern bedroom",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant interior space",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    alt: "Comfortable bedroom detail",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    alt: "Stylish lounge area",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm guesthouse interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal bedroom design",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    alt: "Relaxing accommodation space",
  },
];

const leftColumnImages = galleryImages.filter((_, index) => index % 2 === 0);
const rightColumnImages = galleryImages.filter((_, index) => index % 2 === 1);

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
        <div className="gallery-page__column">
          {leftColumnImages.map((image, index) =>
            renderImage(image, index * 2)
          )}
        </div>

        <div className="gallery-page__column">
          {rightColumnImages.map((image, index) =>
            renderImage(image, index * 2 + 1)
          )}
        </div>
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
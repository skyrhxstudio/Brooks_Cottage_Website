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
import loungeImage1 from "../assets/images/lounge_1.jpeg";
import loungeImage2 from "../assets/images/lounge_2.jpeg";
import contemporaryRoom from "../assets/images/rooms/The Contemporary Room.webp";
import contemporaryRoomDetail from "../assets/images/rooms/contemporary-room-img.webp";
import contemporaryRoomBathroom from "../assets/images/rooms/contemp_bathroom_1.jpeg";
import contemporaryRoomBathroomTwo from "../assets/images/rooms/contemp_bathroom_2.jpeg";
import contemporaryRoomCoffeeTable from "../assets/images/rooms/contemp_coffee.jpeg";
import contemporaryRoomWindow from "../assets/images/rooms/contemporary-room-img (2).webp";
import contemRoomOne from "../assets/images/rooms/contem_room_1.jpg";
import contemRoomTwo from "../assets/images/rooms/contem_room_2.jpg";
import eclecticRoom from "../assets/images/rooms/The Eclectic Room.webp";
import indonesianRoomBathroom from "../assets/images/rooms/indonesian_bathroom.jpeg";
import indonesianRoomImageFive from "../assets/images/rooms/indonesian-room-img-5.webp";
import outsideBath from "../assets/images/rooms/outside_bath.webp";
import mahoganyRoom from "../assets/images/rooms/The Mahogany Room.webp";
import modernVictorianRoom from "../assets/images/rooms/The Modern Victorian Room.webp";
import eclecticRoomImage from "../assets/images/rooms/electric_room.jpg";
import eclecticRoomImageTwo from "../assets/images/rooms/electric_room_2.jpg";
import eclecticRoomImageThree from "../assets/images/rooms/electric_room_3.jpg";
import mahoganyRoomImage from "../assets/images/rooms/mahogany_room.jpg";
import mahoganyRoomImageTwo from "../assets/images/rooms/mahogany_room_2.jpg";
import mahoganyRoomImageThree from "../assets/images/rooms/mahogany_room_3.jpg";
import mahoganyRoomImageFour from "../assets/images/rooms/mahogany_room_4.jpg";
import mahoganyRoomImageFive from "../assets/images/rooms/mahogany_room_5.jpg";
import mahoganyRoomImageSix from "../assets/images/rooms/mahogany_room_6.jpg";
import mahoganyRoomImageSeven from "../assets/images/rooms/mahogany_room_7.jpg";
import mahoganyRoomImageEight from "../assets/images/rooms/mahogany_room_8.jpg";
import modernVictorianRoomImageSix from "../assets/images/rooms/modern-victorian-room-img-6.jpg";
import modernVictorianRoomImageSeven from "../assets/images/rooms/modern-victorian-room-img-7.jpg";
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
  { id: 25, src: loungeImage1, alt: "Brooks Cottage lounge" },
  { id: 26, src: loungeImage2, alt: "Brooks Cottage lounge view" },
  { id: 14, src: contemporaryRoom, alt: "The Contemporary Room" },
  { id: 39, src: contemRoomOne, alt: "The Contemporary Room interior view" },
  { id: 40, src: contemRoomTwo, alt: "The Contemporary Room bathroom view" },
  { id: 15, src: contemporaryRoomDetail, alt: "The Contemporary Room detail" },
  { id: 16, src: contemporaryRoomBathroom, alt: "The Contemporary Room bathroom" },
  { id: 17, src: contemporaryRoomBathroomTwo, alt: "The Contemporary Room bathroom view" },
  { id: 18, src: contemporaryRoomCoffeeTable, alt: "The Contemporary Room coffee table" },
  { id: 19, src: contemporaryRoomWindow, alt: "The Contemporary Room window" },
  { id: 20, src: eclecticRoom, alt: "The Eclectic Room" },
  { id: 29, src: eclecticRoomImage, alt: "The Eclectic Room outdoor area" },
  { id: 30, src: eclecticRoomImageTwo, alt: "The Eclectic Room bathroom" },
  { id: 31, src: eclecticRoomImageThree, alt: "The Eclectic Room patio" },
  { id: 22, src: indonesianRoomBathroom, alt: "The Indonesian Room bathroom" },
  { id: 27, src: indonesianRoomImageFive, alt: "The Indonesian Room view" },
  { id: 28, src: outsideBath, alt: "The Indonesian Room outdoor bath and shower" },
  { id: 23, src: mahoganyRoom, alt: "The Mahogany Room" },
  { id: 32, src: mahoganyRoomImage, alt: "The Mahogany Room seating area" },
  { id: 33, src: mahoganyRoomImageTwo, alt: "The Mahogany Room bed and seating" },
  { id: 34, src: mahoganyRoomImageThree, alt: "The Mahogany Room bathroom" },
  { id: 35, src: mahoganyRoomImageFour, alt: "The Mahogany Room bathroom vanity" },
  { id: 36, src: mahoganyRoomImageFive, alt: "The Mahogany Room outdoor view" },
  { id: 41, src: mahoganyRoomImageSix, alt: "The Mahogany Room bathroom mirror" },
  { id: 42, src: mahoganyRoomImageSeven, alt: "The Mahogany Room dressing area" },
  { id: 43, src: mahoganyRoomImageEight, alt: "The Mahogany Room bathroom detail" },
  { id: 24, src: modernVictorianRoom, alt: "The Modern Victorian Room" },
  { id: 37, src: modernVictorianRoomImageSix, alt: "The Modern Victorian Room interior" },
  { id: 38, src: modernVictorianRoomImageSeven, alt: "The Modern Victorian Room exterior" },
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
import { Link } from "react-router";
import "./LocationSection.css";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Brooks+Cottage+Guesthouse+Pretoria&output=embed";

const LocationSection = () => {
  return (
    <section className="location-section">
      <span className="location-section__watermark" aria-hidden="true">Location</span>
      <div className="location-section__intro">
        <div className="location-section__heading">
          <div className="location-section__flower">
            <img src="/heading_decor.svg" alt="" aria-hidden="true" />
          </div>

          <p className="location-section__title">
            WELL LOCATED,
            <br />
            PERFECTLY PLACED!
          </p>
        </div>

        <p className="location-section__description">
          Ideally situated in the heart of Brooklyn, Pretoria, Brooks Cottage
          places you within easy reach of the city&apos;s finest restaurants,
          shopping destinations, historic landmarks, and cultural attractions.
        </p>
      </div>

      <div className="location-section__map-wrapper">
        <Link to="/location-attractions" className="location-section__map-button">
          <p className="location-section__map-button-text">
            EXPLORE LOCAL ATTRACTIONS
          </p>
        </Link>

        <iframe
          className="location-section__map"
          src={MAP_EMBED_URL}
          title="Brooks Cottage Guesthouse location map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="location-section__bottom">
        <a
          className="location-section__attractions-button"
          href="https://www.google.com/maps/dir/?api=1&destination=Brooks+Cottage%2C+283+Brooks+Street%2C+Brooklyn%2C+Pretoria%2C+South+Africa"
          rel="noopener noreferrer"
          aria-label="Get directions to Brooks Cottage"
        >
          <p className="location-section__attractions-button-text">
            GET DIRECTIONS
          </p>
        </a>

        <p className="location-section__attractions-description">
          From exploring the Pretoria National Botanical Garden to catching a
          game at Loftus Versfeld Stadium, there&apos;s something for every
          traveller to enjoy.
          <br />
          <br />
          Whether you&apos;re here for business or leisure, everything you need
          is just a short journey away.
        </p>
      </div>
    </section>
  );
};


export default LocationSection;
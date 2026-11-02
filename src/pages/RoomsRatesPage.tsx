import PageMetadata from '../components/PageMetadata'
import { Link } from 'react-router'
import contemporaryRoom from '../assets/images/rooms/The Contemporary Room.webp'
import indonesianRoom from '../assets/images/rooms/The Indonesian Room.webp'
import modernVictorianRoom from '../assets/images/rooms/The Modern Victorian Room.webp'
import mahoganyRoom from '../assets/images/rooms/The Mahogany Room.webp'
import eclecticRoom from '../assets/images/rooms/The Eclectic Room.webp'
import './RoomsRatesPage.css'

const rooms = [
  {
    name: 'THE CONTEMPORARY ROOM',
    wideImage: contemporaryRoom,
    description: 'Modern room features bay window, with large bathroom and dressing room combined. This en-suite bathroom has a his and hers shower with modern bath.',
    path: '/rooms/the-contemporary-room',
  },
  {
    name: 'THE INDONESIAN ROOM',
    wideImage: indonesianRoom,
    description: 'Indonesian styled armoire and furnishings make this room stylish and comfortable. The private patio area is ideal for your early morning coffee.',
    path: '/rooms/the-indonesian-room',
  },
  {
    name: 'THE MODERN VICTORIAN ROOM',
    wideImage: modernVictorianRoom,
    description: 'Spacious Modern Victorian room has an extra-length king bed and 3/4 bed, with a full Victorian bathroom including a ball-and-claw bath. This room is ideal for three sharing.',
    path: '/rooms/the-modern-victorian-room',
  },
  {
    name: 'THE MAHOGANY ROOM',
    wideImage: mahoganyRoom,
    description: 'Very spacious mahogany styled room, with a queen bed and 3/4 bed, and a full en-suite bathroom. A view of the swimming pool and the tranquil garden creates the relaxing atmosphere that you deserve.',
    path: '/rooms/the-mahogany-room',
  },
  {
    name: 'THE ECLECTIC ROOM',
    wideImage: eclecticRoom,
    description: 'Direct access from the swimming pool gives this room every advantage. It\'s eclectic decor is easy on the eye. It has a queen bed and full en-suite bathroom.',
    path: '/rooms/the-eclectic-room',
  },
]

function RoomsRatesPage() {
  return (
    <>
      <PageMetadata
        title="Rooms & Rates"
        path="/rooms-rates"
        description="View Brooks Cottage room rates and compare five tastefully decorated en-suite rooms in Pretoria."
      />
      <main id="rooms-rates-page" className="rooms-rates-page">
        <span className="rooms-rates-page__watermark" aria-hidden="true">Rooms</span>

        <header className="rooms-rates-page__header">
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
          <h1>
            ROOMS &amp;<br />RATES
          </h1>
        </header>

        <p className="rooms-rates-page__intro">
          Five tastefully decorated spacious bedrooms in various styles. Each room has a private entrance and a full en-suite bathroom (shower and bath). Creature comforts include uninterrupted electricity (solar), free fibre Wi-Fi, DSTV satellite television, secure parking, private entrances, swimming pool, tea and coffee stations, air conditioner, hair dryer, microwave, fridge, and basic crockery and cutlery.
        </p>

        <div className="rooms-rates-page__list">
          {rooms.map((room) => (
            <article className="rooms-rates-page__room" key={room.name}>
              <img
                className="rooms-rates-page__wide-image"
                src={room.wideImage}
                alt={`${room.name} interior`}
              />
              <div className="rooms-rates-page__room-info">
                <div>
                  <h2>{room.name}</h2>
                </div>
                <p>{room.description}</p>
                <div className="rooms-rates-page__actions">
                  <Link to={room.path}>MORE INFORMATION</Link>
                  <a href="https://book.nightsbridge.com/31512" target="_blank" rel="noopener noreferrer">
                    BOOK NOW
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>
    </>
  )
}

export default RoomsRatesPage

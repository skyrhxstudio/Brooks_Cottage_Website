import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Contemporary Room.webp'
import windowImage from '../../assets/images/rooms/contemporary-room-img (2).webp'
import bathroomImage from '../../assets/images/rooms/contemp_bathroom_1.jpeg'
import bathroomImageTwo from '../../assets/images/rooms/contemp_bathroom_2.jpeg'
import coffeeTableImage from '../../assets/images/rooms/contemp_coffee.jpeg'
import detailImage from '../../assets/images/rooms/contemporary-room-img.webp'

function ContemporaryRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Contemporary Room"
        path="/rooms/the-contemporary-room"
        description="Book the Contemporary Room at Brooks Cottage, with a bay window, dressing room, his-and-hers shower, and modern bath."
      />
      <RoomDetailLayout
        pageId="the-contemporary-room-page"
        title="The Contemporary Room"
        description="Modern room features bay window, with large bathroom and dressing room combined. This en-suite bathroom has a his and hers shower with modern bath."
        features={['Bay window', 'Large bathroom and dressing room', 'His and hers shower', 'Modern bath', 'Ceiling fan']}
        images={[
          roomImage,
          windowImage,
          coffeeTableImage,
          bathroomImage,
          bathroomImageTwo,
          detailImage,
        ]}
      />
    </>
  )
}

export default ContemporaryRoomPage

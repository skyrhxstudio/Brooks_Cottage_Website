import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Eclectic Room.webp'
import electricRoomImage from '../../assets/images/rooms/electric_room.jpg'
import electricRoomImageTwo from '../../assets/images/rooms/electric_room_2.jpg'
import electricRoomImageThree from '../../assets/images/rooms/electric_room_3.jpg'

function EclecticRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Eclectic Room"
        path="/rooms/the-eclectic-room"
        description="Book the Eclectic Room at Brooks Cottage, featuring pool-side access, a queen bed, and a full en-suite bathroom."
      />
      <RoomDetailLayout
        pageId="the-eclectic-room-page"
        title="The Eclectic Room"
        description="Direct access from the swimming pool gives this room every advantage. It's eclectic decor is easy on the eye. It has a queen bed and full en-suite bathroom."
        features={['Pool-side entrance', 'Queen size bed', 'Full en-suite bathroom', 'Tea and coffee station', 'Ceiling fan', 'Air conditioner']}
        images={[
          roomImage,
          electricRoomImage,
          electricRoomImageTwo,
          electricRoomImageThree,
        ]}
      />
    </>
  )
}

export default EclecticRoomPage

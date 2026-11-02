import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Eclectic Room.webp'

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
        description="Direct access from the swimming pool gives this room every advantage. Its eclectic decor is easy on the eye. It has a queen bed and full en-suite bathroom."
        features={['Pool-side entrance', 'Queen size bed', 'Full en-suite bathroom', 'Tea and coffee station']}
        images={[
          roomImage,
          roomImage,
          roomImage,
        ]}
      />
    </>
  )
}

export default EclecticRoomPage

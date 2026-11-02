import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Mahogany Room.webp'

function MahoganyRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Mahogany Room"
        path="/rooms/the-mahogany-room"
        description="Book the spacious Mahogany Room at Brooks Cottage, with a queen bed, 3/4 bed, garden and pool views, and full en-suite bathroom."
      />
      <RoomDetailLayout
        pageId="the-mahogany-room-page"
        title="The Mahogany Room"
        description="Very spacious mahogany styled room, with a queen bed and 3/4 bed, and a full en-suite bathroom. A view of the swimming pool and the tranquil garden creates the relaxing atmosphere that you deserve."
        features={['Queen bed', '3/4 bed', 'Private entrance', 'Dining/work station area', 'Coffee station and microwave', 'Comfortable couch']}
        images={[
          roomImage,
          roomImage,
          roomImage,
        ]}
      />
    </>
  )
}

export default MahoganyRoomPage

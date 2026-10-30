import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Mahogany Room.webp'

function MahoganyRoomPage() {
  return (
    <>
      <PageMetadata title="The Mahogany Room" path="/rooms/the-mahogany-room" />
      <RoomDetailLayout
        pageId="the-mahogany-room-page"
        title="The Mahogany Room"
        description="Very spacious mahogany styled room, with queen bed and full en-suite bathroom. A view of the swimming pool and the tranquil garden creates the relaxing atmosphere that you deserve."
        singleRate="R1,050"
        sharingRate="R625 pp"
        additionalRate="Two people sharing: R1,250 total. Additional person: R200, or R1,450 total for three sharing."
        breakfastNote="Breakfast is excluded; breakfast costs R160 per person."
        features={['Private entrance', 'Dining/work station area', 'Coffee station and microwave', 'Comfortable couch']}
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

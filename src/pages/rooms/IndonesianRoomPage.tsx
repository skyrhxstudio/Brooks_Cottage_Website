import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Indonesian Room.webp'
import bathroomImage from '../../assets/images/rooms/indonesian_bathroom.jpeg'

function IndonesianRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Indonesian Room"
        path="/rooms/the-indonesian-room"
        description="Stay in the Indonesian Room at Brooks Cottage, with distinctive furnishings, a private patio, and full en-suite bathroom."
      />
      <RoomDetailLayout
        pageId="the-indonesian-room-page"
        title="The Indonesian Room"
        description="Indonesian styled armoire and furnishings make this room stylish and comfortable. The private patio area is ideal for your early morning coffee. The bathroom includes an indoor shower, while the outdoor tub and shower are also available for a unique open-air experience. Queen bed."
        features={[
          'Indonesian styled furnishings and armoire',
          'Private patio area',
          'Full en-suite bathroom',
          'Indoor shower',
          'Outdoor tub and shower',
          'Ceiling fan',
          'Queen bed',
          'Children aged 0–3 stay for free if they share a bed with their parents',
        ]}
        images={[
          roomImage,
          bathroomImage,
        ]}
      />
    </>
  )
}

export default IndonesianRoomPage

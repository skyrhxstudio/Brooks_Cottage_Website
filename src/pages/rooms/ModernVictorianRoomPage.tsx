import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Modern Victorian Room.webp'

function ModernVictorianRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Modern Victorian Room"
        path="/rooms/the-modern-victorian-room"
        description="Stay in the spacious Modern Victorian Room at Brooks Cottage, with an extra-length king bed, 3/4 bed, and Victorian-style bathroom."
      />
      <RoomDetailLayout
        pageId="the-modern-victorian-room-page"
        title="The Modern Victorian Room"
        description="Spacious Modern Victorian room with an extra-length king bed and 3/4 bed, with a full Victorian bathroom including a ball-and-claw bath. This room is ideal for three sharing. Children aged 0–3 stay for free if they share a bed with their parents."
        features={['Garden view', 'Coffee station with microwave, crockery and cutlery', 'XL king bed and 3/4 bed', 'En-suite bathroom with bath and separate shower', 'Work station with high speed Wi-Fi', 'Ceiling fan']}
        images={[
          roomImage,
          roomImage,
          roomImage,
        ]}
      />
    </>
  )
}

export default ModernVictorianRoomPage

import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Modern Victorian Room.webp'

function ModernVictorianRoomPage() {
  return (
    <>
      <PageMetadata
        title="The Modern Victorian Room"
        path="/rooms/the-modern-victorian-room"
      />
      <RoomDetailLayout
        pageId="the-modern-victorian-room-page"
        title="The Modern Victorian Room"
        description="Spacious, Modern Victorian has a king bed and a single bed, with full Victorian bathroom including ball and claw bath. This room is ideal for 3 sharing."
        singleRate="R1,050"
        sharingRate="R625 pp"
        additionalRate="Two people sharing: R1,250 total. Additional person: R200, or R1,450 total for three sharing."
        breakfastNote="Breakfast is excluded; breakfast costs R160 per person."
        features={['Garden view', 'Coffee station with microwave, crockery and cutlery', 'XL king bed and 3/4 bed', 'En-suite bathroom with bath and separate shower', 'Antique bath', 'Work station with high speed Wi-Fi']}
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

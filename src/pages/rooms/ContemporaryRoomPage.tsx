import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Contemporary Room.png'
import windowImage from '../../assets/images/rooms/contemporary-room-img (2).webp'
import bathroomImage from '../../assets/images/rooms/contemporary-room-img (1).webp'
import detailImage from '../../assets/images/rooms/contemporary-room-img.webp'

function ContemporaryRoomPage() {
  return (
    <>
      <PageMetadata title="The Contemporary Room" path="/rooms/the-contemporary-room" />
      <RoomDetailLayout
        pageId="the-contemporary-room-page"
        title="The Contemporary Room"
        description="Modern room features bay window, with large bathroom and dressing room combined. This en-suite bathroom has a his and hers shower with modern bath."
        singleRate="R950"
        sharingRate="R575 pp"
        additionalRate="Two people sharing: R1,150 total."
        breakfastNote="Breakfast is charged at R160 per person."
        features={['Bay window', 'Large bathroom and dressing room', 'His and hers shower', 'Modern bath']}
        images={[
          roomImage,
          windowImage,
          bathroomImage,
          detailImage,
        ]}
      />
    </>
  )
}

export default ContemporaryRoomPage

import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Indonesian Room.png'

function IndonesianRoomPage() {
  return (
    <>
      <PageMetadata title="The Indonesian Room" path="/rooms/the-indonesian-room" />
      <RoomDetailLayout
        pageId="the-indonesian-room-page"
        title="The Indonesian Room"
        description="Indonesian styled armoire and furnishings make this room stylish and comfortable. The private patio area is ideal for your early morning coffee."
        singleRate="R950"
        sharingRate="R550 pp"
        additionalRate="Two people sharing: R1,100 total."
        breakfastNote="Breakfast is excluded; breakfast costs R160 per person."
        features={['Indonesian styled furnishings and armoire', 'Private patio area', 'Full en-suite bathroom']}
        images={[
          roomImage,
          roomImage,
          roomImage,
        ]}
      />
    </>
  )
}

export default IndonesianRoomPage

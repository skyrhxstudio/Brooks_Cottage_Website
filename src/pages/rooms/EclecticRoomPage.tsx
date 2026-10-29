import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Eclectic Room.png'

function EclecticRoomPage() {
  return (
    <>
      <PageMetadata title="The Eclectic Room" path="/rooms/the-eclectic-room" />
      <RoomDetailLayout
        pageId="the-eclectic-room-page"
        title="The Eclectic Room"
        description="North facing and entry from the swimming pool gives this room all the advantages. Its eclectic decor is easy on the eye. It has a queen bed and full en-suite."
        singleRate="R950"
        sharingRate="R575 pp"
        additionalRate="Two people sharing: R1,150 total."
        breakfastNote="Breakfast is excluded; breakfast costs R160 per person."
        features={['Pool-side entrance', 'Queen size bed', 'Full en-suite bathroom', 'North-facing windows', 'Tea and coffee station']}
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

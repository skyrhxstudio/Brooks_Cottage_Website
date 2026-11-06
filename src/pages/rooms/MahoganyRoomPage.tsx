import PageMetadata from '../../components/PageMetadata'
import RoomDetailLayout from './RoomDetailLayout'
import roomImage from '../../assets/images/rooms/The Mahogany Room.webp'
import mahoganyRoomImage from '../../assets/images/rooms/mahogany_room.jpg'
import mahoganyRoomImageTwo from '../../assets/images/rooms/mahogany_room_2.jpg'
import mahoganyRoomImageThree from '../../assets/images/rooms/mahogany_room_3.jpg'
import mahoganyRoomImageFour from '../../assets/images/rooms/mahogany_room_4.jpg'
import mahoganyRoomImageFive from '../../assets/images/rooms/mahogany_room_5.jpg'
import mahoganyRoomImageSix from '../../assets/images/rooms/mahogany_room_6.jpg'
import mahoganyRoomImageSeven from '../../assets/images/rooms/mahogany_room_7.jpg'
import mahoganyRoomImageEight from '../../assets/images/rooms/mahogany_room_8.jpg'

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
        features={['Queen bed', '3/4 bed', 'Private entrance', 'Dining/work station area', 'Coffee station and microwave', 'Comfortable couch', 'Ceiling fan']}
        images={[
          roomImage,
          mahoganyRoomImage,
          mahoganyRoomImageTwo,
          mahoganyRoomImageThree,
          mahoganyRoomImageFour,
          mahoganyRoomImageFive,
          mahoganyRoomImageSix,
          mahoganyRoomImageSeven,
          mahoganyRoomImageEight,
        ]}
      />
    </>
  )
}

export default MahoganyRoomPage

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import { getRoomsWithHotelId } from '../../../services/hotelApi';
import RoomButton from './roomButton';

export default function Rooms({ hotelId }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    hotelId = 276;
    async function getsRooms() {
      try {
        const { Rooms } = await getRoomsWithHotelId(hotelId, token);
        setRooms(Rooms);
      } catch (error) {
        console.log(error.response.data);
      };
    }
    getsRooms();
  }, []);

  const [selectedRoom, setSelectedRoom] = useState(null);

  function handleRoomClick(evt, room) {
    evt.preventDefault();
    setSelectedRoom(room);
  }

  return (
    <RoomsSection>
      {rooms.map((room, index) => {
        return (
          <RoomButton
            key={room.id}
            room={room}
            number={index + 101}
            isActive={selectedRoom && selectedRoom.id === room.id}
            onClick={(evt) => handleRoomClick(evt, room)}
          />
        );
      })}
    </RoomsSection>
  );
}

const RoomsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

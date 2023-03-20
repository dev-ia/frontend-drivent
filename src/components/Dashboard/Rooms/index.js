import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import { getRoomsWithHotelId } from '../../../services/hotelApi';
import RoomButton from './roomButton';

export default function Rooms({ hotelId, setRoomId }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    async function getsRooms() {
      try {
        const { Rooms } = await getRoomsWithHotelId(token, hotelId);
        setRooms(Rooms);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getsRooms();
  }, [hotelId]);

  function handleRoomSelection(evt, room) {
    evt.preventDefault();
    setSelectedRoom(room);
    setRoomId(room.id);
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
            onClick={(evt) => handleRoomSelection(evt, room)}
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

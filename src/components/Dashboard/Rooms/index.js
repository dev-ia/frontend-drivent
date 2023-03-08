import { useState } from 'react';
import styled from 'styled-components';
import RoomButton from './roomButton';

export default function Rooms() {
  const [isSelected, setIsSelected] = useState(false);

  const rooms = [
    {
      id: 0,
      capacity: 3
    },
    {
      id: 1,
      capacity: 2
    },
    {
      id: 2,
      capacity: 3
    },
    {
      id: 3,
      capacity: 1
    },
    {
      id: 4,
      capacity: 2
    },
    {
      id: 5,
      capacity: 2
    },
    {
      id: 6,
      capacity: 1
    },
    {
      id: 7,
      capacity: 3
    },
    {
      id: 8,
      capacity: 1
    },
    {
      id: 9,
      capacity: 2
    },
    {
      id: 10,
      capacity: 2
    },
  ];
  const [selectedRoom, setSelectedRoom] = useState(null);

  function handleRoomClick(evt, room) {
    evt.preventDefault();
    setSelectedRoom(room);
  }

  return (
    <RoomsSection>
      {rooms.map((room) => {
        return (
          <RoomButton
            key={room.id}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            room={room}
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

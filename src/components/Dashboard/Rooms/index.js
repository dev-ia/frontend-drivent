import { useState } from 'react';
import styled from 'styled-components';
import RoomCard from './roomCard';

export default function Rooms() {
  const [isSelected, setIsSelected] = useState(false);
  const [clickedRoom, setClickedRoom] = useState(-1);

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

  return (
    <RoomsSection>
      {rooms.map((room) => {
        return (
          <StyledRoomCard
            key={room.id}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            clickedRoom={clickedRoom}
            setClickedRoom={setClickedRoom}
            room={room}
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

const StyledRoomCard = styled(RoomCard)`
  background-color: lightblue;
`;

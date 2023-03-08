import styled from 'styled-components';
import RoomCard from './roomCard';

export default function Rooms() {
  return (
    <RoomsSection>
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </RoomsSection>
  );
}

const RoomsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

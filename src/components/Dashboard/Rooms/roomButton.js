import styled from 'styled-components';
import Icon from './icons';

export default function RoomButton({ room, isActive, onClick }) {
  const { id, capacity } = room;
  const capactityArray = [...Array(capacity)];

  return (
    <RoomContainer
      isActive={isActive}
      onClick={onClick}
    >
      <p>{id}</p>
      <IconsContainer>
        {capactityArray.map((_, i) => {
          return (
            <Icon key={i} isActive={isActive} />
          );
        })}
      </IconsContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.button`
  width: 190px;
  height: 45px;
  padding: 10px;
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px lightgray;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? '#FFEED2' : 'white'};
`;

const IconsContainer = styled.div`
  display: flex;
`;

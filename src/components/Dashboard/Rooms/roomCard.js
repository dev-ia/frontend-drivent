import styled from 'styled-components';
import IconsList from './iconsList';
import { useState } from 'react';

export default function RoomCard({ isSelected, setIsSelected, room }) {
  const { id, capacity } = room;
  const [isFull, setIsFull] = useState(false);
  const [clickedRoom, setClickedRoom] = useState(-1);

  const handleSelection = (evt) => {
    evt.preventDefault();
    setIsSelected(!isSelected);
    setClickedRoom(id);
    console.log(room);
  };

  return (
    <RoomContainer
      className={clickedRoom === id ? 'clicked' : 'not-clicked'}
      isFull={isFull}
      disabled={isFull}
      isSelected={isSelected}
      onClick={handleSelection}
    >
      <p>{id}</p>
      <IconsContainer>
        <IconsList setIsFull={setIsFull} isSelected={isSelected} capacity={capacity} />
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
  >.clicked{
    background-color: #FFEED2;
  }
  >.not-clicked{
    background-color: white;
  }
`;

const IconsContainer = styled.div`
  display: flex;
`;

import { Person, PersonOutline } from 'react-ionicons';
import styled from 'styled-components';

export default function RoomButton({ room, number, isActive, onClick }) {
  const { _count, capacity } = room;
  const bookingCount = _count.Booking;
  const iconsArray = [];

  function fillsIcons() {
    let isClicked = false;

    for (let i = 0; i < capacity; i++) {
      if (i < bookingCount) {
        iconsArray.push(<Person key={i} />);
      } else {
        if (isActive) {
          if (isClicked === false) {
            iconsArray.push(<Person key={i} color={'#FF4791'} />);
            isClicked = true;
          } else {
            iconsArray.push(<PersonOutline key={i} />);
          }
        } else {
          iconsArray.push(<PersonOutline key={i} />);
        }
      }
    }
    return iconsArray.reverse();
  }

  if (capacity === bookingCount) {
    return (
      <DisabledRoomContainer>
        <p>{number}</p>
        <IconsContainer>
          {iconsArray === [] ? '' : fillsIcons()}
        </IconsContainer>
      </DisabledRoomContainer>
    );
  }

  return (
    <RoomContainer isActive={isActive} onClick={onClick}>
      <p>{number}</p>
      <IconsContainer>
        {iconsArray === [] ? '' : fillsIcons()}
      </IconsContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.button`
  width: 190px;
  height: 45px;
  margin: 10px 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px lightgray;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? '#FFEED2' : 'white'};
`;

const DisabledRoomContainer = styled.button`
width: 190px;
height: 45px;
margin: 10px 5px;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
border: solid 1px lightgray;
border-radius: 10px;
background-color: #E9E9E9;
`;

const IconsContainer = styled.div`
  display: flex;
`;


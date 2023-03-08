import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';
import Icon from './icons';
import { useState } from 'react';

export default function RoomCard() {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <RoomContainer isFilled={isFilled} disabled={isFilled} >
      101
      <IconsContainer>
        <Icon setIsFilled={setIsFilled} />
      </IconsContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.button`
  background-color: ${({ disabled }) => disabled ? '#CECECE' : 'white'};
  width: 190px;
  height: 45px;
  padding: 10px;
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px lightgray;
  border-radius: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
`;

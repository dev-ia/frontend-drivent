import styled from 'styled-components';
import useEvent from '../../../hooks/api/useEvent';
import { useState } from 'react';

export default function DaysButton({ day }) {
  const event = useEvent(); 
  const [selectedButton, setSelectedButton] = useState(null);

  function handleChoosenDay(evt, eventId) {
    evt.preventDefault();
    setSelectedButton(eventId);
  }
 
  return (
    <>
      <ButtonSection>
        <Button isActive={selectedButton === event.id} onClick={(evt) => handleChoosenDay(evt, event.id)}>
          <ButtonFont>{day}</ButtonFont>
        </Button>
      </ButtonSection>
    </>
  );
}

const Button = styled.button`
    all:unset;
    justify-content:center;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 131px;
    height: 37px;
    background-color: ${({ isActive }) => isActive ? '#FFD37D' : '#E0E0E0'};
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;

const ButtonFont =  styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
`;

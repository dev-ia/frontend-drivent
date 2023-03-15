import styled from 'styled-components';
import useEvent from '../../../hooks/api/useEvent';
import { useState } from 'react';

export default function DaysButton() {
  const events = useEvent(); 
  const [selectedButton, setSelectedButton] = useState(null);

  function handleChoosenDay(evt, eventId) {
    evt.preventDefault();
    setSelectedButton(eventId);
  }
  if(events) {
    return (
      <>
        {events.map((event) => {
          return (
            <Button>
              <ButtonFont onClick={(evt) => handleChoosenDay(evt, event.id)}>{}</ButtonFont>
            </Button>
          );
        })
        }
      </>
    );
  }
}

const Button = styled.button`
    position: absolute;
    width: 131px;
    height: 37px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
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

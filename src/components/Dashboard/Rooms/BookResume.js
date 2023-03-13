import useToken from '../../../hooks/useToken';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import useLocalStorage from '../../../hooks/useLocalStorage';
import axios from 'axios';
import { useEffect } from 'react';

export default function BookResume({ roomInfo }) {
//   const [userData, setUserData] = useLocalStorage('userData', {});
  const typeRoom = ['Single', 'Double', 'Triple', 'Quadruple'];

  return (
    <StyledBody>
      <h4>Você já escolheu o seu quarto</h4>
      <StyledBox>
        <img src={roomInfo.Hotel.image} alt="Hotel ao crepúsculo e com iluminação amarela" />
        <h5>{roomInfo.Hotel.name}</h5>
        <h6>
          Quarto reservado
          <p>
            {roomInfo.number} ({typeRoom[roomInfo.capacity - 1]})
          </p>
        </h6>
        <h6>
          Pessoas no seu quarto
          <p>{roomInfo.capacity === 1 ? 'apenas você' : `você e mais ${roomInfo.capacity - 1}`}</p>
        </h6>
      </StyledBox>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  h4 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #8e8e8e;
    padding: 14px 0px;
  }
`;

const StyledBox = styled.div`
  background-color: #ffeed2;
  border-radius: 10px;
  padding: 14px;
  width: 22.5%;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  h5 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
  h6 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
`;

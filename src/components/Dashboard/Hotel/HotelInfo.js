import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRooms from '../../../hooks/api/useRooms';
import useHotel from '../../../hooks/api/useHotel';

export default function HotelInfo(props) {
  const { id, token } = props;
  console.log(token);
  let [capacity, setCapacity] = useState(0);
  const room =  useRooms(token, id).rooms;
  let count=0;
  
  if(room) {
    room.Rooms.forEach(room => {
      count = count + room.capacity;
    });
  }
  useEffect(() => {
    setCapacity(count);
  }, [room]);
  
  if(room) {
    return (
      <>
        <HotelFont> Hotel </HotelFont>
        <SubtitleFont>Tipos de Acomodação:<br/></SubtitleFont>
        <InfoFont> Single, Double e Triple <br/></InfoFont>
        <SubtitleFont>Vagas Disponíveis:<br/></SubtitleFont>
        <InfoFont> {capacity} </InfoFont>
      </>
    );
  }
  return(
    <SubtitleFont>Carregando </SubtitleFont>
  );
}

export const SubtitleFont = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 2px!important;
  color: #3C3C3C;
  `;
  
export const HotelFont = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: left;
  letter-spacing: 0em;
  margin-bottom: 10px!important;
  color: #343434;
  `;
  
export const InfoFont = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #3C3C3C;
  margin-top:14px!important;
  `;

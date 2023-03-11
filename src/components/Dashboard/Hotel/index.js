import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getHotels } from '../../../services/hotelApi';
import { Container, Subtitle } from '../Reservation';
import { HotelCard } from './HotelCard';
import useToken from '../../../hooks/useToken';

export default function HotelLayout() {
  const [clickedButtonFirstSection, setClickedButtonFirstSection] = useState(-1);
  const [hotelsArray, setHotelsArray] = useState([]);
  const token = useToken();

  useEffect(() => {
    async function fetchData() {
      try {
        let arrayOfHotelsRequest = await getHotels(token);

        setHotelsArray(arrayOfHotelsRequest);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    fetchData();
  }, []);

  function arrayOfHotels() {
    let arrayHotels = [];

    for (let i = 0; i < hotelsArray.length; i++) {
      arrayHotels.push(
        <HotelCard
          key={i}
          type="submit"

          className={clickedButtonFirstSection === i ? 'clicked' : 'notClicked'}
        >
          <HotelFont>{hotelsArray[i].name}</HotelFont>
          <SubtitleFont>Tipos de acomodação:</SubtitleFont>
          <InfoFont> Single e Double </InfoFont>
          <SubtitleFont>Vagas disponíveis:</SubtitleFont>
          <InfoFont> 25 </InfoFont>
          
        </HotelCard>
      );
    }

    return arrayHotels;
  }

  return (
    <>
      <Container>
        <HotelRow>
          <Subtitle> Primeiro, escolha seu hotel</Subtitle>
          <HotelWrapper>{arrayOfHotels()} </HotelWrapper>
        </HotelRow>
      </Container>
    </>
  );
}

export const HotelRow = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const HotelWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 18px;

  @media (max-width: 700px) {
    width: 100%;
  }
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

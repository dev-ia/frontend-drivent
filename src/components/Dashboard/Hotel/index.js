import styled from 'styled-components';
import { Subtitle } from '../Reservation';
import useToken from '../../../hooks/useToken';
import useHotel from '../../../hooks/api/useHotel';
import HotelInfo from './HotelInfo';
import { useState } from 'react';

export default function HotelLayout({ setHotelId }) {
  const token = useToken();
  const hotels = useHotel(token).hotel;
  const [selectedHotel, setSelectedHotel] = useState(null);

  function handleChooseHotel(evt, hotelId) {
    evt.preventDefault();
    setHotelId(hotelId);
    setSelectedHotel(hotelId);
  }
  
  if (hotels) {
    return (
      <>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <HotelContainer>
          {hotels.map((hotel) => {
            return (
              <BiggerContainer isActive={selectedHotel === hotel.id} onClick={(evt) => handleChooseHotel(evt, hotel.id)}>
                <HotelCard>
                  <figure >
                    <img className="hotelPhoto" src={hotel.image} alt={hotel.name} ></img>
                  </figure>
                </HotelCard>
                <HotelInfo id={hotel.id} token={token} ></HotelInfo>
              </BiggerContainer>

            );
          })
          }
        </HotelContainer>
      </>
    );
  }

  return (
    <>
      <Subtitle>Carregando hotéis </Subtitle>
    </>);
};

const HotelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top:18px;
`;

const BiggerContainer = styled.div`
  width: 196px;
  height: 264px;
  background-color: ${({ isActive }) => isActive ? '#FFEED2' : '#EBEBEB'};
  border-radius: 8px;
  margin-right: 20px;
  padding-left: 15px;
  padding-top: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;

const HotelCard = styled.div`
  width: 168px;
  height: 109px;
  margin-right: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  img {
    width: 166px;
    height: 107px;
    overflow: hidden;
    border-radius: 5px;
  }
  span {
    flex-wrap:wrap;
  }
`;

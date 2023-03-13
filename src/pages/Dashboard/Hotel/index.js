import { StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import styled from 'styled-components';
import DoesNotIncludeHotel from '../../../components/Dashboard/Hotel/DoesNotIncludeHotel';
import HotelLayout from '../../../components/Dashboard/Hotel';
import Rooms from '../../../components/Dashboard/Rooms';
import { useContext, useEffect, useState } from 'react';
import BookRoom from '../../../components/Dashboard/Rooms/BookRoom';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';
import { getBooking } from '../../../services/bookingApi';
import useToken from '../../../hooks/useToken';
import BookResume from '../../../components/Dashboard/Rooms/BookResume';
import axios from 'axios';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [ticketType, setTicketType] = useState({});
  const [isPayed, setIsPayed] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [hotelId, setHotelId] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [bookInfo, setBookInfo] = useState();
  console.log(bookInfo);
  console.log(showResume);

  function bookInfoFunc() {
    const { token } = userData;
    const url = `${process.env.REACT_APP_API_BASE_URL}booking`;
    const promise = axios.get(url, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    promise.then(response => {
      const { data } = response;
      setBookInfo(data);
      data.userId === userData.userId ? setShowResume(true) : setShowResume(false);
    });
  }

  useEffect(() => {
    const { token } = userData;
    async function getsTicketType() {
      const ticket = await getTickets(token);
      console.log(ticket);
      setTicketType(ticket.TicketType);
      if (ticket.status === 'PAID') {
        setIsPayed(true);
      }
    }
    getsTicketType();
    bookInfoFunc();
  }, []);
  console.log(userData);

  if (!isPayed) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <LayoutWrapper>
          <NotPaid />
        </LayoutWrapper>
      </>
    );
  }

  if (ticketType) {
    return !showResume ? (
      <>
        <StyledTypography variant="h4"> Escolha de hotel e quarto </StyledTypography>
        <LayoutWrapper>
          {ticketType.isRemote == true ? <DoesNotIncludeHotel /> : <HotelLayout setHotelId={setHotelId} />}
        </LayoutWrapper>
        {hotelId === null ? '' : <Rooms setRoomId={setRoomId} hotelId={hotelId} />}
        {roomId === null ? '' : <BookRoom setShowResume={setShowResume} roomId={roomId} bookingId={bookingId} setBookingId={setBookingId} />}
      </>
    ) : (
      <BookResume roomInfo={bookInfo.Room}/>
    );
  }
}

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

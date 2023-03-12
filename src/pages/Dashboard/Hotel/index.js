import { StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import styled from 'styled-components';
import DoesNotIncludeHotel from '../../../components/Dashboard/Hotel/DoesNotIncludeHotel';
import HotelLayout from '../../../components/Dashboard/Hotel';
import usePayment from '../../../hooks/api/usePayment';
import useTicketType from '../../../hooks/api/useTicketType';
import Rooms from '../../../components/Dashboard/Rooms';
import { useContext, useEffect, useState } from 'react';
import BookRoom from '../../../components/Dashboard/Rooms/BookRoom';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [ticketType, setTicketType] = useState({});
  const [isPayed, setIsPayed] = useState(false);
  const [roomId, setRoomId] = useState(null);

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
  }, []);

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
    return (
      <>
        <StyledTypography variant="h4"> Escolha de hotel e quarto </StyledTypography>
        <LayoutWrapper>
          <HotelLayout>
            {ticketType.isRemote == true ? <DoesNotIncludeHotel /> : <>OUTRO</>}
          </HotelLayout>
        </LayoutWrapper>
        <Rooms setRoomId={setRoomId} />
        {roomId === null ? '' : <BookRoom roomId={roomId} />}
      </>
    );
  };
}

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap:4px;
  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

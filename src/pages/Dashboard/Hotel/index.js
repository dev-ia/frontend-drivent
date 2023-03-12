import { Container, StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import DoesNotIncludeHotel from '../../../components/Dashboard/Hotel/DoesNotIncludeHotel';
import usePayment from '../../../hooks/api/usePayment';
import Rooms from '../../../components/Dashboard/Rooms';
import { useContext, useEffect, useState } from 'react';
import BookRoom from '../../../components/Dashboard/Rooms/BookRoom';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [ticketType, setTicketType] = useState({});
  const { payment } = usePayment();
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    const { token } = userData;
    async function getsTicketType() {
      const ticket = await getTickets(token);
      console.log(ticket);
      setTicketType(ticket.TicketType);
    }
    getsTicketType();
  }, []);

  if (payment) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <NotPaid />
      </>
    );
  }

  if (ticketType) {
    return (
      <>
        <StyledTypography variant="h4"> Escolha de hotel e quarto </StyledTypography>
        <Container>

          {ticketType.isRemote == true ? <DoesNotIncludeHotel/> : <>OUTRO</>}
        </Container>
        <Rooms setRoomId={setRoomId} />
        {roomId === null ? '' : <BookRoom roomId={roomId} />}
      </>
    );
  }
}

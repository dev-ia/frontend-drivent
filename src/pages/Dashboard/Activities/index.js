import { StyledTypography } from '../Payment';
import { LayoutWrapper } from '../Hotel/index';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketApi';
import NoPayment from '../../../components/Dashboard/Activities/NoPayment';
import OnlineTicket from '../../../components/Dashboard/Activities/OnlineTicket';
import ActivitiesLayout from '../../../components/Dashboard/Activities';

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [ticketType, setTicketType] = useState({});
  const [isPayed, setIsPayed] = useState(false);

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
  console.log(userData);

  if (!isPayed) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <LayoutWrapper>
          <NoPayment/>
        </LayoutWrapper>
      </>
    );
  }

  if (ticketType) {
    return (
      <>
        <StyledTypography variant="h4"> Escolha de atividades </StyledTypography>
        <LayoutWrapper>
          {<ActivitiesLayout/>}
          {/* {ticketType.isRemote == true ? <OnlineTicket/> : <ActivitiesLayout/>} */}
        </LayoutWrapper>
      </>
    );
  }
}

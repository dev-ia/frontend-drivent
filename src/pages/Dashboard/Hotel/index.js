import { Container, StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import usePayment from '../../../hooks/api/usePayment';
import useTicketType from '../../../hooks/api/useTicketType';
import Rooms from '../../../components/Dashboard/Rooms';

export default function Hotel() {
  const { payment } = usePayment();
  const { ticketType } = useTicketType();

  if (payment) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <NotPaid />
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4"> Escolha de hotel e quarto </StyledTypography>
      <Container>
        
        {/* {ticketType.isRemote === true ? <DoesNotIncludeHotel /> : < HotelLayout/>} */}
      </Container>
      <Rooms />
    </>
  );
}

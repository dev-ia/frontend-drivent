import { Container, StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import DoesNotIncludeHotel from '../../../components/Dashboard/Hotel/DoesNotIncludeHotel';
import HotelLayout from '../../../components/Dashboard/Hotel';
import usePayment from '../../../hooks/api/usePayment';
import useTicketType from '../../../hooks/api/useTicketType';

export default function Hotel() {
  const { payment } = usePayment();
  const { ticketType } = useTicketType();

  if (!payment) {
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
    </>
  );
}

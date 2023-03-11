import { StyledTypography } from '../Payment';
import NotPaid from '../../../components/Dashboard/Hotel/NotPaid';
import styled from 'styled-components';
import DoesNotIncludeHotel from '../../../components/Dashboard/Hotel/DoesNotIncludeHotel';
import HotelLayout from '../../../components/Dashboard/Hotel';
import usePayment from '../../../hooks/api/usePayment';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const { payment } = usePayment();
  const { ticket } = useTicket();

  if (!payment) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <LayoutWrapper>
          <NotPaid />
        </LayoutWrapper>
        
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4"> Escolha de hotel e quarto </StyledTypography>
      <LayoutWrapper> 
        <HotelLayout/>
        {/* {(!ticket.TicketType.includesHotel) ? <DoesNotIncludeHotel /> : < HotelLayout/>} */}
      </LayoutWrapper>
    </>
  );
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

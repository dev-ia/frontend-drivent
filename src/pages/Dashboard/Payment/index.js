import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import ErrorMsg from '../../../components/Dashboard/Payment/notEnrolled';
import useEnrollment from '../../../hooks/api/useEnrollment';
import PaymentCard from '../../../components/Dashboard/Payment';
import Reservation from '../../../components/Dashboard/Reservation';
import { TicketProvider } from '../../../contexts/ticketContext';

export default function Payment() {
  const [isReserved, setIsReserved] = useState(false);
  const { enrollment } = useEnrollment();

  if (!enrollment) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <ErrorMsg />
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Container>
        <TicketProvider>{isReserved === false ? <Reservation setIsReserved={setIsReserved} /> : <PaymentCard />}</TicketProvider>
      </Container>
    </>
  );
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  flex-direction: column;
  gap:4px;
  > div {
    width: calc(50% - 20px);
    margin: 0 10px 0 0;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 34px;
  margin-bottom: 37px !important;
`;

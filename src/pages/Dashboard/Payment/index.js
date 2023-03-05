import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import Reservation from '../../../components/Dashboard/Reservation';
import ErrorMsg from '../../../components/Dashboard/Payment/notEnrolled';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [isReserved, setIsReserved] = useState(false);
  const { enrollment } = useEnrollment();

  if(!enrollment) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <Container>
          <ErrorMsg/> 
        </Container>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Container>
        {isReserved === false ? <Reservation setIsReserved={setIsReserved} /> : <> </>}
      </Container>
    </>
  );
}

export const Container = styled.div`
  width: 100%;
  /* height: 100%;
  min-height: 100vh; */
  flex-wrap: wrap;
  flex-direction: column;
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

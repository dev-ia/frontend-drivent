import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Confirmation() {
  return (
    <ConfirmationWrapper>
      <CheckMark/>
      <Row>
        <Blackfont>Pagamento confirmado!</Blackfont>
        <SmallerFont>Prossiga para escolha de hospedagem e atividades</SmallerFont>
      </Row>
    </ConfirmationWrapper>
  );
}

const CheckMark = styled(AiFillCheckCircle)`
  font-size: 50px;
  margin: 0 10px;
  color: green;
`;

const ConfirmationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blackfont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 3px!important;
`;

const SmallerFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color:#454545;
  margin-bottom: 3px!important;
`;

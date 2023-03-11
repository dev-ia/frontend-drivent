import styled from 'styled-components';
import { ValidationFont } from '../Payment/notEnrolled';

export default function NotPaid() {
  return (
    <>
      <Container>
        <ValidationFont>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</ValidationFont>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  flex-wrap: wrap;
  word-wrap:normal;
  gap:4px;
  justify-content:center;
  text-align: center;
  align-items: center;
  min-height: 243px;
  display: grid;
  place-items: center;
  max-width:60%;
  @media (max-width: 600px) {
    > span {
      padding: 20px !important;
      text-align:center;
    }
  }
`;

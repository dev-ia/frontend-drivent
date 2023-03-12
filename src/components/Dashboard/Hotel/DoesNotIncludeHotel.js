import styled from 'styled-components';
import { ValidationFont } from '../Payment/notEnrolled';

export default function DoesNotIncludeHotel() {
  return (
    <>
      <Container>
        <ValidationFont>Sua modalidade de ingresso não inclui hospedagem <br/>Prossiga para a escolha de atividades </ValidationFont>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content:center;
  text-align:center;
  gap:4px;
  min-height: 243px;
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    > span {
      padding: 20px !important;
    }
  }
`;


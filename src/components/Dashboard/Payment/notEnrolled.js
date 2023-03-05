import styled from 'styled-components';

export default function ErrorMsg() {
  return (
    <>
      <Row>
        <ValidationContainer>
          <ValidationFont>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ValidationFont>
        </ValidationContainer>
      </Row>
    </>
  );
}

export const ValidationFont = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8E8E8E;

`;
export const Row = styled.div`
  justify-content: center;
  width: 100%;
`;

export const ValidationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  word-wrap:normal;
  justify-content:center;
  flex-direction: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

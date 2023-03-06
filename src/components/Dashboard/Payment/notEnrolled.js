import styled from 'styled-components';

export default function ErrorMsg() {
  return (
    <>
      <ValidationContainer>
        <ValidationFont>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ValidationFont>
      </ValidationContainer>
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

export const ValidationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-wrap:normal;
  gap:4px;
  @media (max-width: 600px) {
    > span {
      padding: 20px !important;
    }
  }
`;

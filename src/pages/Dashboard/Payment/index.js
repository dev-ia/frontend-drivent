import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

export default function Payment() {
  const [clicked, setClicked]= useState(false);

  const changeButton = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Container>
        <Row>
          <Subtitle> Primeiro, escolha sua modalidade de ingresso </Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit"
              onClick={() => changeButton()}
              style={{ color: clicked ? '#FFFFFF' : '#FFEED2' }}>
              <GreyFont>Presencial</GreyFont>
              <PriceFont>R$ 250</PriceFont>
            </SelectionButton>
            <SelectionButton
              type="submit"
              onClick={() => changeButton()}
              style={{ color: clicked ? '#FFFFFF' : '#FFEED2' }}>
              <GreyFont>Online</GreyFont>
              <PriceFont>R$ 100</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>
        <Row>
          <Subtitle> Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit">
              <GreyFont>Sem Hotel</GreyFont>
              <PriceFont>+ R$ 0</PriceFont>
            </SelectionButton>
            <SelectionButton
              type="submit">
              <GreyFont>Com Hotel</GreyFont>
              <PriceFont>+ R$ 350</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>
        <Row>
          <Subtitle>Fechado! O total ficou em R$ 600. Agora é só confirmar:</Subtitle>
          <PaymentWrapper>
            <ReserveButton
              type="submit">
              <ButtonFont>RESERVAR INGRESSO</ButtonFont>
            </ReserveButton>
          </PaymentWrapper>
        </Row>
      </Container>
    </>
  );
}

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
min-height:100vh;
flex-wrap: wrap;
flex-direction:column;
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
  font-size:34px;
  margin-bottom: 37px!important;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top:17px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Subtitle = styled(Typography)`
  font-family:'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
`;

export const SelectionButton = styled.button`
  position: relative;
  all: unset;
  width: 145px;
  height: 145px;
  background-color:#FFFFFF;
  border: 1px solid #CECECE;
  border-radius: 20px;
  align-items:center;
  text-align:center;
  cursor:pointer;
  margin-bottom:43px;
`;

export const ReserveButton = styled.button`
  position: relative;
  all: unset;
  width: 162px;
  height: 37px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border-radius: 4px;
  align-items:center;
  text-align:center;
  cursor:pointer;
  margin-bottom:97px;
`;
export const GreyFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color:#454545;
  margin-bottom: 3px!important;
`;

export const PriceFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color:#898989;
  letter-spacing: 0em;
  text-align: center;
`;
export const ButtonFont = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color:#000000;
  letter-spacing: 0em;
  text-align: center;
  word-break:break-all;
`;

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
//import { FaBlackTie } from 'react-icons/fa';

export default function Payment() {
  const [clickedButtonFirstSection, setClickedButtonFirstSection] = useState(0);
  const [clickedButtonSecondSection, setClickedButtonSecondSection] = useState(0);
  const [isEnableDisplaySecondSection, setIsEnableDisplaySecondSection] = useState(false);
  const [isEnableDisplayThirdSection, setIsEnableDisplayThirdSection] = useState(false);
  //let buttonClickedFirstSection = -1;

  const changeButtonFirstSection = (buttonClickedFirstSection) => {
    setClickedButtonFirstSection(buttonClickedFirstSection);
    if (buttonClickedFirstSection === 1) {
      setIsEnableDisplaySecondSection(true);
      setIsEnableDisplayThirdSection(false);
    } else if (buttonClickedFirstSection === 2) {
      setIsEnableDisplaySecondSection(false);
      setIsEnableDisplayThirdSection(true);
    }
  };

  const changeButtonSecondSection = (buttonClickedSecondSection) => {
    setClickedButtonSecondSection(buttonClickedSecondSection);
    setIsEnableDisplayThirdSection(true);
  };

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Container>
        <Row isDisplay={true}>
          <Subtitle> Primeiro, escolha sua modalidade de ingresso </Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonFirstSection(1)}
              className={clickedButtonFirstSection === 1 ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Presencial</GreyFont>
              <PriceFont>R$ 250</PriceFont>
            </SelectionButton>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonFirstSection(2)}
              className={clickedButtonFirstSection === 2 ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Online</GreyFont>
              <PriceFont>R$ 100</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>
        <Row isDisplay={isEnableDisplaySecondSection}>
          <Subtitle> Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonSecondSection(1)}
              className={clickedButtonSecondSection === 1 ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Sem Hotel</GreyFont>
              <PriceFont>+ R$ 0</PriceFont>
            </SelectionButton>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonSecondSection(2)}
              className={clickedButtonSecondSection === 2 ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Com Hotel</GreyFont>
              <PriceFont>+ R$ 350</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>
        <Row isDisplay={isEnableDisplayThirdSection}>
          <Subtitle>Fechado! O total ficou em R$ 600. Agora é só confirmar:</Subtitle>
          <PaymentWrapper>
            <ReserveButton type="submit">
              <ButtonFont>RESERVAR INGRESSO</ButtonFont>
            </ReserveButton>
          </PaymentWrapper>
        </Row>
      </Container>
    </>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
export const Row = styled.div`
  display: ${(props) => (props.isDisplay ? 'flex' : 'none')};
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
  margin-top: 17px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Subtitle = styled(Typography)`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e8e8e;
`;

export const SelectionButton = styled.button`
  position: relative;
  all: unset;
  width: 145px;
  height: 145px;
  //background-color: ${(props) => (props.color ? 'yellow' : 'black')};
  border: 1px solid #cecece;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin-bottom: 43px;
  &.clicked {
    background-color: #ffeed2;
    color: white;
  }
  &.notClicked {
    background-color: #ffffff;
    color: black;
  }
`;

export const ReserveButton = styled.button`
  position: relative;
  all: unset;
  width: 162px;
  height: 37px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin-bottom: 97px;
`;
export const GreyFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #454545;
  margin-bottom: 3px !important;
`;

export const PriceFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #898989;
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
  color: #000000;
  letter-spacing: 0em;
  text-align: center;
  word-break: break-all;
`;

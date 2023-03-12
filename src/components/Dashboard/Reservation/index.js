import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import { getTicketTypes } from '../../../services/ticketTypeApi';
import useToken from '../../../hooks/useToken';
import { createTicket } from '../../../services/ticketApi';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import TicketContext from '../../../contexts/ticketContext';
import { hotel, entry, dbPosition } from './definedObjects';

export default function Reservation({ setIsReserved }) {
  const [clickedButtonFirstSection, setClickedButtonFirstSection] = useState(-1);
  const [clickedButtonSecondSection, setClickedButtonSecondSection] = useState(-1);
  const [ticketTypesArray, setTicketTypesArray] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const token = useToken();
  const { setTicketTypeIdContext } = useContext(TicketContext);

  useEffect(() => {
    async function fetchData() {
      try {
        let arrayTicketTypesRequest = await getTicketTypes(token);

        setTicketTypesArray(arrayTicketTypesRequest);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    fetchData();
  }, []);

  function updatingTotalPrice(clickedButtonFirstSection, buttonClickedSecondSection) {
    if (clickedButtonFirstSection === entry.ONLINE) {
      setClickedButtonSecondSection(entry.RESET);
      setTotalValue(ticketTypesArray[dbPosition.ONLINE].price);
    } else {
      const ticketPriceWithHotel = ticketTypesArray[entry.PRESENCIAL]?.price;
      const ticketPriceWithoutHotel = ticketTypesArray[2]?.price;

      buttonClickedSecondSection === hotel.WITH
        ? setTotalValue(ticketPriceWithoutHotel)
        : setTotalValue(ticketPriceWithHotel);
    }
  }

  const changeButtonFirstSection = (buttonClickedFirstSection) => {
    setClickedButtonFirstSection(buttonClickedFirstSection);
    updatingTotalPrice(buttonClickedFirstSection, clickedButtonSecondSection);
  };

  const changeButtonSecondSection = (buttonClickedSecondSection) => {
    setClickedButtonSecondSection(buttonClickedSecondSection);
    updatingTotalPrice(clickedButtonFirstSection, buttonClickedSecondSection);
  };

  function getTicketTypeId(isRemote, isHotelInclude) {
    if (isRemote && !isHotelInclude) {
      return ticketTypesArray[dbPosition.ONLINE].id;
    } else if (!isRemote && !isHotelInclude) {
      return ticketTypesArray[dbPosition.PRESENCIAL_WITHOUT_HOTEL].id;
    } else {
      return ticketTypesArray[dbPosition.PRESENCIAL_WITH_HOTEL].id;
    }
  }

  const reserveTicket = async() => {
    const isRemote = clickedButtonFirstSection === entry.ONLINE ? true : false;
    const isHotelInclude = clickedButtonSecondSection === hotel.WITH ? true : false;
    const RESERVED = 0;

    const bodyTicket = {
      ticketTypeId: getTicketTypeId(isRemote, isHotelInclude),
      status: RESERVED,
    };

    async function createTicketInDB() {
      try {
        const ticketCreated = await createTicket(bodyTicket, token);

        setTicketTypeIdContext(ticketCreated.id);
        setIsReserved(true);
        return toast('ingresso reservado!');
      } catch (err) {
        console.log(err.data);
      }
    }

    await createTicketInDB();
  };

  return (
    <>
      <Container>
        <Row isDisplay={true}>
          <Subtitle> Primeiro, escolha sua modalidade de ingresso </Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonFirstSection(entry.ONLINE)}
              className={clickedButtonFirstSection === entry.ONLINE ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Online</GreyFont>
              <PriceFont>{ticketTypesArray[0]?.price}</PriceFont>
            </SelectionButton>

            <SelectionButton
              type="submit"
              onClick={() => changeButtonFirstSection(entry.PRESENCIAL)}
              className={clickedButtonFirstSection === entry.PRESENCIAL ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Presencial</GreyFont>
              <PriceFont>{ticketTypesArray[entry.PRESENCIAL]?.price}</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>

        <Row isDisplay={clickedButtonFirstSection === entry.PRESENCIAL}>
          <Subtitle> Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
          <PaymentWrapper>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonSecondSection(hotel.WITHOUT)}
              className={clickedButtonSecondSection === hotel.WITHOUT ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Sem Hotel</GreyFont>
              <PriceFont>+ R$ 0</PriceFont>
            </SelectionButton>
            <SelectionButton
              type="submit"
              onClick={() => changeButtonSecondSection(hotel.WITH)}
              className={clickedButtonSecondSection === hotel.WITH ? 'clicked' : 'notClicked'}
            >
              <GreyFont>Com Hotel</GreyFont>
              <PriceFont>+ R$ 350</PriceFont>
            </SelectionButton>
          </PaymentWrapper>
        </Row>
        <Row isDisplay={clickedButtonSecondSection !== -1 || clickedButtonFirstSection === entry.ONLINE}>
          <Subtitle>Fechado! O total ficou em R$ {totalValue}. Agora é só confirmar:</Subtitle>
          <PaymentWrapper>
            <ReserveButton>
              <ButtonFont onClick={() => reserveTicket()}>RESERVAR INGRESSO</ButtonFont>
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
    width: 100%;
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

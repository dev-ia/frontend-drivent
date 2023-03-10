import { Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Confirmation from './Confirmation';
import { GreyFont, PriceFont } from '../Reservation/index';
import UserContext from '../../../contexts/UserContext';
import { useEffect } from 'react';
import { getTicketsById } from '../../../services/ticketApi';
import TicketContext from '../../../contexts/ticketContext';

export default function PaymentCard() {
  const [isPayed, setIsPayed] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({});
  const { ticketTypeIdContext } = useContext(TicketContext);

  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    async function fetchData() {
      try {
        let { TicketType } = await getTicketsById(token, ticketTypeIdContext);
        setTicketInfo(TicketType);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {ticketInfo === undefined ? (
        <></>
      ) : (
        <>
          <Subtitle>Ingresso Escolhido</Subtitle>
          <SelectedTicket>
            <GreyFont>{ticketInfo.name}</GreyFont>
            <PriceFont>R$ {ticketInfo.price}</PriceFont>
          </SelectedTicket>
          <Subtitle>Pagamento</Subtitle>
          {isPayed === false ? <Card setIsPayed={setIsPayed} userData={userData} /> : <Confirmation />}
        </>
      )}
    </>
  );
}

const Subtitle = styled(Typography)`
  padding: 20px 0;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e8e8e;
`;

const SelectedTicket = styled.div`
  position: relative;
  all: unset;
  width: 200px;
  height: 145px;
  background-color: #ffeed2;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  margin-bottom: 43px;
`;

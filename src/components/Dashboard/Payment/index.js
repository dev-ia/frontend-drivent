import { Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Confirmation from './Confirmation';
import { GreyFont, PriceFont } from '../Reservation';
import UserContext from '../../../contexts/UserContext';

export default function PaymentCard() {
  const [isPayed, setIsPayed] = useState(false);
  const { userData } = useContext(UserContext);
  
  return (
    <>
      <Subtitle>Ingresso Escolhido</Subtitle>
      <SelectedTicket>
        <GreyFont>Presencial + Com Hotel</GreyFont>
        <PriceFont>R$ 600</PriceFont>
      </SelectedTicket>
      <Subtitle>Pagamento</Subtitle>
      {isPayed === false ?
        <Card setIsPayed={setIsPayed} userData={userData} />
        :
        <Confirmation />}
    </>
  );
}

const Subtitle = styled(Typography)`
  padding: 20px 0;
  font-family:'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
`;

const SelectedTicket = styled.div`
  position: relative;
  all: unset;
  width: 200px;
  height: 145px;
  background-color:#FFEED2;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  cursor: default;
  margin-bottom:43px;
`;

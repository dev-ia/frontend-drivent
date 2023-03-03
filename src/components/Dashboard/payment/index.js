import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Confirmation from './Confirmation';
import Reservation from './Reservation';

export default function PaymentCard() {
  const [isPayed, setIsPayed] = useState(false);
  
  return (
    <>
      <Subtitle>Ingresso Escolhido</Subtitle>
      <Reservation/>
      <Subtitle>Pagamento</Subtitle>
      {isPayed === false ? 
        <Card setIsPayed={setIsPayed}/> 
        :
        <Confirmation/>}
    </>
  );
}

const Subtitle = styled(Typography)`
  padding-bottom: 20px;
  font-family:'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
`;

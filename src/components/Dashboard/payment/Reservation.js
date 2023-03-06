import styled from 'styled-components';
import { GreyFont, PriceFont } from '../Reservation';

export default function Reservation() {
  return (
    <SelectedTicket>
      <GreyFont>Presencial + Com Hotel</GreyFont>
      <PriceFont>R$ 600</PriceFont>
    </SelectedTicket>
  );
}

const SelectedTicket = styled.div`
  position: relative;
  all: unset;
  width: 100px;
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

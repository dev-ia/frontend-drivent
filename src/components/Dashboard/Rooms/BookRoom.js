import { ButtonFont, PaymentWrapper, ReserveButton } from '../Reservation';

export default function BookRoom({ roomId }) {
  function reserveRoom(evt, roomId) {
    evt.preventDefault();
    console.log(roomId);
  }

  return (
    <PaymentWrapper>
      <ReserveButton>
        <ButtonFont onClick={(evt) => reserveRoom(evt, roomId)}>RESERVAR QUARTO</ButtonFont>
      </ReserveButton>
    </PaymentWrapper>
  );
}

import useToken from '../../../hooks/useToken';
import { postBooking, upsertBooking } from '../../../services/bookingApi';
import { ButtonFont, PaymentWrapper, ReserveButton } from '../Reservation';

export default function BookRoom({ roomId, bookingId, setBookingId }) {
  const token = useToken();

  async function reserveRoom(evt, bookingId, roomId) {
    evt.preventDefault();

    try {
      let newBookingId;

      if (bookingId !== null) {
        newBookingId = await upsertBooking(bookingId, roomId, token);
      } else {
        newBookingId = await postBooking(roomId, token);
      }

      setBookingId(newBookingId.bookingId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PaymentWrapper>
      <ReserveButton>
        <ButtonFont onClick={(evt) => reserveRoom(evt, bookingId, roomId)}>RESERVAR QUARTO</ButtonFont>
      </ReserveButton>
    </PaymentWrapper>
  );
}

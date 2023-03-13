import { useState } from 'react';
import useToken from '../../../hooks/useToken';
import { postBooking, upsertBooking } from '../../../services/bookingApi';
import { ButtonFont, PaymentWrapper, ReserveButton } from '../Reservation';
import BookResume from './BookResume';

export default function BookRoom({ roomId, bookingId, setBookingId, setShowResume }) {
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
        <ButtonFont
          onClick={(evt) => {
            reserveRoom(evt, bookingId, roomId);
            setShowResume(true);
          }}
        >
          RESERVAR QUARTO
        </ButtonFont>
      </ReserveButton>
    </PaymentWrapper>
  );
}

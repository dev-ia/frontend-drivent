import api from './api';

export async function creatingBooking(token, roomId) {
  //const { roomId } = req.body;
  const body = {
    roomId: roomId,
  };

  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // //resposta {
  //       bookingId: booking.id,
  //     }

  return response.data;
}

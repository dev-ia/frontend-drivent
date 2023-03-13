import api from './api';

export async function postBooking(roomId, token) {
  const body = {
    roomId: roomId
  };

  const response = await api.post('/booking/', body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export async function upsertBooking(bookingId, roomId, token) {
  const body = {
    roomId: roomId
  };

  const response = await api.put(`/booking/${bookingId}`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

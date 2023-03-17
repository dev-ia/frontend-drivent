import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels/hoteis', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getRoomsWithHotelId(token, hotelId) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}


import api from './api';

export async function getRoomsWithHotelId(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

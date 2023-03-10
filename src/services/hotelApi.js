import api from './api';

export async function getHotels(body, token) {
  const response = await api.get('/hotels', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}


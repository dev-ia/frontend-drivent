import api from './api';

export async function getEventInfo(token) {
  const response = await api.get('/event', {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

import api from './api';

export async function payWithCard(ticketId, cardData, token) {
  const response = await api.post('/payments/process', { ticketId, cardData },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
}

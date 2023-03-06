import api from './api';

export async function getTicketTypes(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //console.log(response.data);

  return response.data;
}

export async function createTicketType(body, token) {
  const response = await api.post('/tickets/types', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

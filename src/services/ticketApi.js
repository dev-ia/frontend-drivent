import api from './api';

export async function createTicket(body, token) {
  const response = await api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTickets(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTicketsById(token, ticketId) {
  console.log('dentro da services > ticketApi > getTicketsById, o ticketId parametro é');
  console.log(ticketId);
  const response = await api.get(`/tickets/${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('response.data');
  console.log(response.data);
  return response.data;
}

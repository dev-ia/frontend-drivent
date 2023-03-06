import * as ticketApi from '../../services/ticketApi';
import useAsync from '../useAsync';

export default async function useTicket() {
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTickets
  } = useAsync(ticketApi.getTickets, false);

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTickets
  };
}

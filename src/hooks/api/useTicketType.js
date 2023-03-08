import useAsync from '../useAsync';

import * as ticketTypeApi from '../../services/ticketTypeApi';

export default function useTicketType() {
  const {
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: ticketType
  } = useAsync(ticketTypeApi.getTickets, false);

  return {
    ticketTypeLoading,
    ticketTypeError,
    ticketType
  };
}

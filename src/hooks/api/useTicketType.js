import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketTypeApi from '../../services/ticketTypeApi';

export default function useTicketType() {
  const token = useToken();

  const {
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: ticketType
  } = useAsync((data) => ticketTypeApi.save(data, token), false);

  return {
    ticketTypeLoading,
    ticketTypeError,
    ticketType
  };
}

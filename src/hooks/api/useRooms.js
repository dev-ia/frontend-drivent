
import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useRooms(token, hotelId) {
  const {
    data: rooms,
    loading: RoomsLoading,
    error: RoomsError,
    act: getRooms,
  } = useAsync(() => hotelApi.getRoomsWithHotelId(token, hotelId));

  return {
    rooms,
    RoomsLoading,
    RoomsError,
    getRooms,
  };
}

import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import useToken from '../hooks/useToken';
import TicketContext from './ticketContext';

const ReservationContext = createContext();
export default ReservationContext;

export function ReservationProvider({ children }) {
  const [clickedButtonFirstSection, setClickedButtonFirstSection] = useState(-1);
  const [clickedButtonSecondSection, setClickedButtonSecondSection] = useState(-1);
  const [ticketTypesArray, setTicketTypesArray] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const token = useToken();

  return (
    <ReservationProvider.Provider
      value={{
        //setTicketTypeIdContext,
        clickedButtonFirstSection,
        setClickedButtonFirstSection,
        clickedButtonSecondSection,
        setClickedButtonSecondSection,
        ticketTypesArray,
        setTicketTypesArray,
        totalValue,
        setTotalValue,
        token,
      }}
    >
      {children}
    </ReservationProvider.Provider>
  );
}

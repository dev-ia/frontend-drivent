import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketTypeIdContext, setTicketTypeIdContext] = useState(-1);

  return (
    <TicketContext.Provider value={{ ticketTypeIdContext, setTicketTypeIdContext }}>{children}</TicketContext.Provider>
  );
}

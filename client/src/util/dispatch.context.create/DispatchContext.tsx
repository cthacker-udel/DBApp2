import React from 'react';
import { TicketAction } from '../../interfaces/TicketAction';

export const DispatchContext = React.createContext<{dispatch: React.Dispatch<TicketAction>} | undefined>(undefined);
import { DispatchContext } from "../dispatch.context.create/DispatchContext";
import React from 'react';
import { TicketAction } from "../../interfaces/TicketAction";

export const UseDispatchContext = (): { dispatch: React.Dispatch<TicketAction> } => {

    const dispatch = React.useContext(DispatchContext);
    if (dispatch === undefined) {
        throw new Error('Unable to access Dispatch context');
    }
    return dispatch;

};
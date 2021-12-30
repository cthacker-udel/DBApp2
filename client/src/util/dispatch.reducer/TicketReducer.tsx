import { State } from "../../interfaces/State";
import { TicketAction } from "../../interfaces/TicketAction";



export const TicketReducer = (state: State, action: TicketAction): State => {

    switch (action.type) {
        default:
            return { ...state };
    }

};
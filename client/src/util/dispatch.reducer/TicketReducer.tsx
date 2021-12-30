import { State } from "../../interfaces/State";
import { TicketAction } from "../../interfaces/TicketAction";



export const TicketReducer = (action: TicketAction, state: State): State => {

    switch (action.type) {
        default:
            return { ...state };
    }

};
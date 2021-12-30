import { StateContext } from "../state.context.create/StateContext";
import React from 'react';
import { State } from "../../interfaces/State";

export const UseStateContext = (): { state: State } => {

    const state = React.useContext(StateContext);
    if (state === undefined) {
        throw new Error('Unable to access state context');
    }
    return state;
    
};
import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Navigate, Link, Route } from 'react-router-dom';
import { DispatchContext } from '../util/dispatch.context.create/DispatchContext';
import { StateContext } from '../util/state.context.create/StateContext';
import { TicketReducer } from '../util/dispatch.reducer/TicketReducer';
import { InitialState } from '../util/initial.state/initialState';
import { LandingPage } from './landingpage/LandingPage';

export const MainPage = () => {

    const [state, dispatch] = useReducer(TicketReducer, InitialState);

    const stateValue = { state };
    const dispatchValue = { dispatch };

    return(
        <>
            <BrowserRouter>
                <DispatchContext.Provider value={dispatchValue}>
                    <StateContext.Provider value={stateValue}>
                        <Routes>
                            <Route path="/" element={
                                <Navigate to="/landing" />
                            } />
                            <Route path="/landing" element={
                                <LandingPage />
                            } />
                        </Routes>
                    </StateContext.Provider>
                </DispatchContext.Provider>
            </BrowserRouter>
        </>
    );

};
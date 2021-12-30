import React from 'react';
import { BrowserRouter, Routes, Navigate, Link, Route } from 'react-router-dom';

export const MainPage = () => {

    return(
        <>

            <BrowserRouter>
            
                <Routes>

                    <Route path="/" element={
                        <Navigate to="/ticket_page" />
                    } />

                </Routes>
            
            </BrowserRouter>

        </>
    );

};
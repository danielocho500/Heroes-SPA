import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Components/login/LoginScreen'
import { Navbar } from '../ui/navbar'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

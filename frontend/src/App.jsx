import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

import Login from './pages/Login'

import RootLayout from './layout/RootLayout'
import Requests from './pages/Requests' 
import Students from './pages/Students'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import QRCodes from './pages/QRCodes'
import ParentsGuardians from './pages/ParentsGuardians'
import Notifications from './pages/Notifications'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Login */}
                    <Route path='/' element={<Login />} />
                        {/* Dashboard */}
                        {/* <Route element={<RootLayout />} >
                            <Route path='/dashboard' element={<Layout />} /> */}
                            {/* <Route path='/students' element={<Students />} /> */}
                        {/* </Route> */}
                    {/* </Route> */}
                    {/* Redirect invalid URL's */}
                    {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
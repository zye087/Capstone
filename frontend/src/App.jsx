import {BrowserRouter, Routes, Route, Navigate} from 'react-router'

import Layout from './components/Layout'
import Login from './pages/Login'

import Requests from './pages/Requests' 
import Students from './pages/Students'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import QRCodes from './pages/QRCodes'
import ParentsGuardians from './pages/ParentsGuardians'
import Notifications from './pages/Notifications'


export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    {/* Login */}
                    <Route index element={<Login />} />

                        {/* Dashboard */}
                        <Route element={<Layout />} >
                            <Route path='/dashboard' element={<Layout />} />
                            {/* <Route path='/students' element={<Students />} /> */}
                        </Route>

                    {/* </Route> */}

                    {/* Redirect invalid URL's */}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
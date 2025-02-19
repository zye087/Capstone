import {BrowserRouter, Routes, Route, Navigate} from 'react-router'

import Layout from './components/Main/Layout'
import Login from './components/Login/Login'

import Requests from './components/Main/Requests' 
import Students from './components/Main/Students'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Login */}
                    <Route path='/' element={<Login />} />

                    {/* Dashboard */}
                    <Route path='/dashboard' element={<Layout />} />

                    <Route path='/students' element={<Students />} />


                    {/* Redirect invalid URL's */}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
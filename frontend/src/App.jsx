import React from 'react'

import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Components
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
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigate to='/dashboard' replace />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/students',
          element: <Students />
        },
        {
          path: '/parents-guardians',
          element: <ParentsGuardians />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
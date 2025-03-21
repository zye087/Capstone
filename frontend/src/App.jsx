import * as React from 'react'

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
import View from './components/student/View'

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
          element: <Students />,
          children: [
            {
              path: '/students/:studentId',
              element: <View />
            }
          ]
        },
        {
          path: '/parents-guardians',
          element: <ParentsGuardians />
        },
        {
          path: '/requests',
          element: <Requests />
        },
        {
          path: '/reports',
          element: <Reports />
        },
        {
          path: '/qr-codes',
          element: <QRCodes />
        },
        {
          path: '/notifications',
          element: <Notifications />
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
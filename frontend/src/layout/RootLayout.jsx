import * as React from 'react'

import { Outlet } from 'react-router'

import SideBar from '../components/SideBar'
import { Box } from '@mui/material'

const RootLayout = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Outlet />
      </Box>
    </>
  )
}

export default RootLayout
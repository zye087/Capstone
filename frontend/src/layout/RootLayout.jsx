import * as React from 'react'

import {
  Outlet
} from 'react-router'

import {
  Box
} from '@mui/material'

import SideBar from '../components/SideBar'


const RootLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex' 
        }}
      >
        <SideBar />
        <Outlet />
      </Box>
    </>
  )
}

export default RootLayout
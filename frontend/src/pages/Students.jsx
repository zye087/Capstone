import * as React from 'react'

import { DrawerHeader } from '../components/SideBar'

import {
  Box,
} from '@mui/material'

import Navbar from '../components/student/navbar'
import List from '../components/student/List'

const Students = () => {
  return (
    <>
      <Box
        component="main" 
        sx={{
          flexGrow: 1,
          margin: '10px',
          display: 'flex',
          gap: '10px',
          flexDirection: 'column'
        }}
      >
        <DrawerHeader />
        <Navbar />
        <List />
      </Box>
    </>
  )
}

export default Students
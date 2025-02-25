import * as React from 'react'

import {
  Box,
	Typography
} from '@mui/material'

// Imported Components
import { DrawerHeader } from '../components/SideBar'
import TotalStudents from '../components/dashboard/TotalStudents'

const Dashboard = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TotalStudents />
      </Box>
    </>
  )
}

export default Dashboard
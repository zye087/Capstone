import * as React from 'react'

import {
  Box,
	Typography
} from '@mui/material'

// Imported Components
import { DrawerHeader } from '../components/SideBar'
import TotalStudents from '../components/dashboard/TotalStudents'
import TotalParentsGuardians from '../components/dashboard/TotalParentsGuardians'
import PendingRequest from '../components/dashboard/PendingRequest'
import Notifications from '../components/dashboard/Notifications'

const Dashboard = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box display={'flex'} justifyContent={'space-between'} gap={3}>
          <TotalStudents />
          <TotalParentsGuardians />
          <PendingRequest />
          <Notifications />
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
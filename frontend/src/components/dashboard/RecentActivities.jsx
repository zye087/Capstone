import * as React from 'react'

import {
  Box,
  Button,
  Typography
} from '@mui/material'

import {
  EditNoteTwoTone,
  PersonAddTwoTone
} from '@mui/icons-material'

const RecentActivities = () => {
  return (
    <>
      <Box display='flex' my={3}>
        <Typography variant='h4' fontWeight='bold'>RECENT ACTIVITIES</Typography>
        <Box display='flex' marginLeft='auto' gap={2}>
          <Button variant='outlined' color='success' startIcon={<PersonAddTwoTone/>}>Register new student</Button>
          <Button variant='outlined' color='success' startIcon={<EditNoteTwoTone/>}>Generate Report</Button>
        </Box>
      </Box>
    </>
  )
}

export default RecentActivities
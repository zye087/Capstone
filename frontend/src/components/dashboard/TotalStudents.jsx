import * as React from 'react'

import {
  Box,
	Card,
	CardContent,
	Typography
} from '@mui/material'

const TotalStudents = () => {
  return (
    <>
			<Box display={'flex'} justifyContent={'space-between'} gap={2}>
				<Card sx={{ width: '100%' }}>
					<CardContent>
						<Typography>Total Students</Typography>
					</CardContent>
				</Card>

				<Card sx={{ width: '100%' }}>
					<CardContent>
						<Typography>Total Parents & Guardians</Typography>
					</CardContent>
				</Card>

				<Card sx={{ width: '100%' }}>
					<CardContent>
						<Typography>Pending Request</Typography>
					</CardContent>
				</Card>

				<Card sx={{ width: '100%' }}>
					<CardContent>
						<Typography>Notifications</Typography>
					</CardContent>
				</Card>
			</Box>
    </>
  )
}

export default TotalStudents
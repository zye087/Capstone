import * as React from 'react'

import {
  Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material'

import {
  Link
} from 'react-router'

const TotalStudents = () => {
  return (
    <>
      <Link
        to='/students'
        style={{
          textDecoration: 'none',
          width: '100%'
        }}
      >
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='total students'
              image='students.png'
              height='100'
              sx={{
                objectFit: 'contain',
                p: 2
              }}
            />
            <CardContent>
              <Typography gutterBottom fontWeight='bold'>STUDENTS</Typography>
              <Typography variant='h4' fontWeight='bold' textAlign='end'>342</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}

export default TotalStudents
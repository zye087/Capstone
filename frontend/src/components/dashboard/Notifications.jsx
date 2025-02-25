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

const Notifications = () => {
  return (
    <>
      <Link
        to='/notifications'
        style={{
          textDecoration: 'none',
          width: '100%'
        }}
      >
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='notification'
              image='notification.png'
              height='100'
              sx={{
                objectFit: 'contain',
                p: 2
              }}
            />
            <CardContent>
              <Typography gutterBottom fontWeight='bold'>NOTIFICATIONS</Typography>
              <Typography variant='h4' fontWeight='bold' textAlign='end'>132</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}

export default Notifications
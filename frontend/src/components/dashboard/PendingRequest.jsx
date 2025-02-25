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

const PendingRequest = () => {
  return (
    <>
      <Link
        to='/requests'
        style={{
          textDecoration: 'none',
          width: '100%'
        }}
      >
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='requests'
              image='request.png'
              height='100'
              sx={{
                objectFit: 'contain',
                p: 2
              }}
            />
            <CardContent>
              <Typography gutterBottom fontWeight='bold'>PENDING REQUESTS</Typography>
              <Typography variant='h4' fontWeight='bold' textAlign='end'>43</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}

export default PendingRequest
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

const TotalParentsGuardians = () => {
  return (
    <>
      <Link
        to='/parents-guardians'
        style={{
          textDecoration: 'none',
          width: '100%'
        }}
      >
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='total parents'
              image='parents.png'
              height='100'
              sx={{
                objectFit: 'contain',
                p: 2
              }}
            />
            <CardContent>
              <Typography gutterBottom fontWeight='bold'>PARENTS & GUARDIANS</Typography>
              <Typography variant='h4' fontWeight='bold' textAlign='end'>234</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}

export default TotalParentsGuardians
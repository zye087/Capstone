import { Typography } from '@mui/material'
import * as React from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
  const params = useParams()
  return (
    <>
    <Typography>{params.studentId}</Typography>
    </>
  )
}

export default View
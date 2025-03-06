import * as React from 'react'

<<<<<<< HEAD
=======
import axiosAPI from '../Axios'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

>>>>>>> 716258729f8022d0a4a32378a16305826a5dbf11
import { DrawerHeader } from '../components/SideBar'
import { List, ListItem } from '@mui/material'

import {
  Box,
} from '@mui/material'

import Navbar from '../components/student/navbar'
import List from '../components/student/List'

const Students = () => {
<<<<<<< HEAD
=======
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axiosAPI.get('student/').then((response) => {
      setData(response.data)
    })
  }, []);

>>>>>>> 716258729f8022d0a4a32378a16305826a5dbf11
  return (
    <>
      <Box
        component="main" 
        sx={{
          flexGrow: 1,
          margin: '10px',
        }}
      >
        <DrawerHeader />
<<<<<<< HEAD
        <Navbar />
        <List />
=======
        <List>
          {data.map(item => (
            <ListItem sx={{ marginBottom: 2 }}>
              {item.first_name} {item.last_name}
            </ListItem>
          ))}
        </List>
>>>>>>> 716258729f8022d0a4a32378a16305826a5dbf11
      </Box>
    </>
  )
}

export default Students
import * as React from 'react'

import axiosAPI from '../Axios'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DrawerHeader } from '../components/SideBar'
import { List, ListItem } from '@mui/material'

const Students = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axiosAPI.get('student/').then((response) => {
      setData(response.data)
    })
  }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <List>
          {data.map(item => (
            <ListItem sx={{ marginBottom: 2 }}>
              {item.first_name} {item.last_name}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default Students
import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DrawerHeader } from '../components/SideBar'

const Students = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/student/')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {data.map(item => (
          <Typography sx={{ marginBottom: 2 }}>
            {item.first_name} {item.last_name}
          </Typography>
        ))}
      </Box>
    </>
  )
}

export default Students
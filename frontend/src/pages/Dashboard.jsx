import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DrawerHeader } from '../components/SideBar'

const Dashboard = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Dashboard
        </Typography>
      </Box>
    </>
  )
}

export default Dashboard
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DrawerHeader } from '../components/SideBar'

const ParentsGuardians = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Parents & Guardians
        </Typography>
      </Box>
    </>
  )
}

export default ParentsGuardians
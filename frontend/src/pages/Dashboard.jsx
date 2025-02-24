import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DrawerHeader } from '../components/SideBar'

const Dashboard = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, itaque quaerat quas voluptatibus aspernatur velit beatae cumque sapiente mollitia reiciendis quidem nihil corporis impedit dolores molestiae accusantium praesentium consequuntur cum!
          Dashboard ni siya
        </Typography>
      </Box>
    </>
  )
}

export default Dashboard
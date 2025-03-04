import * as React from 'react'

import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'

const List = () => {
  const [data, setData] = React.useState([])
  
  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/student/')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <>
      <Box display='flex' mt={1} gap={1}>
        {data.map(item => (
          <Card elevation={4} sx={{ minWidth: '200px'}}>
            <CardContent >
              <Typography>{item.first_name} {item.last_name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default List
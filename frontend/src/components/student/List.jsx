import * as React from 'react'

import {
  Link
} from 'react-router-dom';

import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
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
      <TableContainer component={Paper} elevation={4} sx={{ maxHeight: '600px', mt: '10px' }}>
        <Table stickyHeader> 
          <TableHead>
            <TableRow>
              <TableCell>Student ID#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
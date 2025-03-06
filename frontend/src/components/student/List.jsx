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
      <TableContainer
        component={Paper}
        elevation={4}
        sx={{
          maxHeight: '600px',
          mt: '10px'
          }}
      >
        <Table
          stickyHeader
        > 
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Student ID#</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Section</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow
                key={item.id}
                sx={{
                  ':hover': {
                    backgroundColor: '#42a5f5',
                    cursor: 'pointer',
                    color: 'white'
                  }
                }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.section}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell
                  sx={{
                    color: (item.status == 'Active' ? 'green' : 'red')
                  }}
                >{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
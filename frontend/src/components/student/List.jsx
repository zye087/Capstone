import * as React from 'react'

import {
  Link
} from 'react-router-dom';

import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
  IconButton,
} from '@mui/material'

import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage ,
} from '@mui/icons-material'

import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const List = () => {
  const [data, setData] = React.useState([])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          height: '100%',
        }}
      >
        <Table
          stickyHeader
        > 
          <TableHead>
            <TableRow
              sx={{
                '& th': {
                  backgroundColor: '#1976d2',
                  color: 'white',
                  fontWeight: 'bold',
                }               
              }}
            >
              <TableCell>Student ID#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  ':hover': {
                    backgroundColor: '#42a5f5',
                    cursor: 'pointer',
                    '& td': {
                      color: 'white'
                    }
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
                >
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
      <TablePagination
        component={Paper}
        elevation={0}
        rowsPerPageOptions={[20, 30, { label: 'All', value: -1 }]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          overflow: 'hidden'
        }}
        slotProps={{
          select: {
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </>
  )
}

export default List
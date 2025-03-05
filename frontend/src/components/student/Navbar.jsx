import * as React from 'react'

import {
  Box,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Tooltip,
} from '@mui/material'

import {
  SearchTwoTone,
  PersonAddAltTwoTone,
} from '@mui/icons-material'

const Navbar = () => {
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        gap={1}
      >
        <FormControl
          fullWidth
          variant="outlined"
          size='small'
        >
          <InputLabel
            htmlFor="outlined-adornment-search"
          >
            Search
          </InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              placeholder='Students ID# or Students Name'
              endAdornment={
                <InputAdornment
                  position="end"
                >
                  <IconButton
                    edge="end"
                  >
                    <SearchTwoTone />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
        </FormControl>
        <Tooltip
          title='Add New student'
          color='primary'
        >
          <Button
            variant='contained'
            size='large'
          >
            <PersonAddAltTwoTone />
          </Button>
        </Tooltip>   
      </Box>
    </>
  )
}

export default Navbar
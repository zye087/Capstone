import React from 'react'

import {
    Box,
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Button,
    Typography,
} from '@mui/material'

import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
    <>
        {/* Login Form */}
        <form action="" method="post">
            <Box sx={{
                    mt: 10,
                    marginX: 'auto',
                    width: '50ch',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                
                {/* Logo */}
                <img src="favicon.png" alt="logo" style={{
                    margin: '20px auto',
                    width: '150px'
                }} />

                {/* Text */}
                <Typography variant='h5' align='center'>LOGIN PORTAL</Typography>

                {/* Username */}
                <TextField
                    id="username"
                    label="Username"
                    placeholder="Enter username"
                    color='common'
                    autoComplete='off'
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'black',
                          },
                          '&:hover fieldset': {
                            borderColor: 'black',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'black',
                          },
                        },
                    }}
                />

                {/* Password */}
                <FormControl variant="outlined" 
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}>
                    <InputLabel htmlFor="password" color="dark">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        placeholder="Enter password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                
                {/* Login Button */}
                <Button type='submit' color='primary' variant="contained" sx={{ mt: 5, py: 1,  width: '25ch%' }}>LOGIN</Button>
            </Box>
        </form>
    </>
  )
}

export default Login
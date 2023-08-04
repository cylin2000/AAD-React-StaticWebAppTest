import React, { useEffect, useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Login, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

const Header = () => {

    const { instance, accounts } = useMsal();

    const [username, setUsername] = useState(null);

    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (accounts.length > 0) {
            const account = accounts[0];
            console.log(account);
            if (account) {
                setUsername(account.username);
            }
        }
    }, [accounts]);

    const handleLogin = (instance) => {
        console.log(`Login Btn clicked`);
        instance.loginRedirect()
            .catch(e => console.log(e));
    }

    const handleLogout = async (instance) => {
        const currentAccount = instance.getAccountByHomeId(accounts[0].homeAccountId);
        instance.logoutRedirect({
            account: currentAccount,
        }).catch(e => console.log(e));
    }

    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography variant='h5' sx={styles.appName} component={Link} to={'/'}>React-MSAL-App</Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    {isAuthenticated ?
                        <>
                            <Box sx={styles.usernameContainer}>
                                <Typography variant='h6' sx={styles.userName}>{username}</Typography>
                            </Box>
                            <IconButton title='Logout' sx={styles.buttons} onClick={() => handleLogout(instance)}>
                                <Logout />
                            </IconButton>
                        </>
                        :
                        <>
                            <IconButton title='Login' sx={styles.buttons} onClick={() => handleLogin(instance)}>
                                <Login />
                            </IconButton>
                        </>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#004978',
    },
    appName: {
        display: { xs: 'none', md: 'inline' },
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    usernameContainer: {
        display: { xs: 'none', md: 'inline' },
        backgroundColor: '#002F4E',
        borderRadius: 1,
        p: 0.7,
        mr: 2,
    },
    userName: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    buttons: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '2rem'
    }
}
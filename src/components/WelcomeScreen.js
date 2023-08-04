import { useMsal } from '@azure/msal-react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const WelcomeScreen = () => {
    const { instance, accounts } = useMsal();

    return (
        <>
            <Typography sx={styles.pageTitle} variant='h4'>Welcome {accounts[0].name}!</Typography>
            <Card sx={styles.item}>
                <CardContent>
                    <Typography sx={styles.cardTitle}>User Profile</Typography>
                    <Typography sx={styles.cardText}>Name: {accounts[0].name}</Typography>
                    <Typography sx={styles.cardText}>Email: {accounts[0].username}</Typography>
                    <Typography sx={styles.cardText}>TenantId: {accounts[0].tenantId}</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default WelcomeScreen

/** @type {import("@mui/material").SxProps} */
const styles = {
    welcomeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageTitle: {
        mt: 10,
        mb: 2,
    },
    item: {
        mb: 2,
        width: '40vh',
        height: 'auto'
    },
    cardTitle: {
        fontSize: '2rem',
        display: 'block',
        fontWeight: 500
    },
    cardText: {
        fontSize: '1.2rem'
    }

}
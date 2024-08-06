// File: DashboardLayout.js

import React from 'react';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DashboardLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // CORRECT: Using flex properties within sx prop
    const CorrectLayoutExample = () => (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: isMobile ? '100%' : '80%',
            margin: 'auto'
        }}>
            <Grid sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                <Grid sx={{ width: '30%', padding: 2 }}>
                    <Paper sx={{ height: '100%', padding: 2 }}>
                        <Typography variant="h6">Sidebar</Typography>
                        {/* Sidebar content */}
                    </Paper>
                </Grid>
                <Grid sx={{ flexGrow: 1, padding: 2 }}>
                    <Paper sx={{ height: '100%', padding: 2 }}>
                        <Typography variant="h6">Main Content</Typography>
                        {/* Main content */}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );

    // INCORRECT: Using container and item props
    const IncorrectLayoutExample = () => (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Paper style={{ padding: '1rem' }}>
                    <Typography variant="h6">Sidebar</Typography>
                    {/* Sidebar content */}
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper style={{ padding: '1rem' }}>
                    <Typography variant="h6">Main Content</Typography>
                    {/* Main content */}
                </Paper>
            </Grid>
        </Grid>
    );

    return (
        <>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Correct Layout</Typography>
            <CorrectLayoutExample />
            <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>Incorrect Layout</Typography>
            <IncorrectLayoutExample />
        </>
    );
};

export default DashboardLayout;

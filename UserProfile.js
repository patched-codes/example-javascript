// File: UserProfile.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, Button } from '@mui/material';
import { setUserDetails, updateUserPreferences } from '../../redux/slices/userSlice';

const UserProfile = () => {
    // CORRECT: Local state for form inputs
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        bio: ''
    });

    // INCORRECT: Using local state for data that should be in Redux
    const [userPreferences, setUserPreferences] = useState({
        theme: 'light',
        notifications: true
    });

    // CORRECT: Redux usage
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.details);
    const globalUserPreferences = useSelector((state) => state.user.preferences);

    // INCORRECT: Disabling eslint warning without proper justification
    // eslint-disable-next-line
    const unusedVariable = useSelector((state) => state.user.someUnusedState);

    useEffect(() => {
        // Simulating API call to fetch user details
        const fetchUserDetails = async () => {
            // ... fetch logic
            const userData = { name: 'John Doe', email: 'john@example.com', bio: 'Web developer' };
            dispatch(setUserDetails(userData));
        };
        fetchUserDetails();
    }, [dispatch]);

    const handleInputChange = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        dispatch(setUserDetails(formInputs));
        // INCORRECT: Updating local state instead of Redux
        setUserPreferences({ ...userPreferences, theme: 'dark' });
        // CORRECT: Updating Redux state
        dispatch(updateUserPreferences({ theme: 'dark' }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    name="name"
                    label="Name"
                    value={formInputs.name}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>
            {/* More form fields */}
            <Grid item xs={12}>
                <Button onClick={handleSubmit}>Update Profile</Button>
            </Grid>
        </Grid>
    );
};

export default UserProfile;

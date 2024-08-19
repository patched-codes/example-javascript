// File: UserProfile.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, Button } from '@mui/material';
import { setUserDetails, updateUserPreferences } from '../../redux/slices/userSlice';

const UserProfile = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        bio: ''
    });

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.details);
    const userPreferences = useSelector((state) => state.user.preferences);

    useEffect(() => {
        const fetchUserDetails = async () => {
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
// File: ApiService.js

import axios from 'axios';

const SECURE_API_KEY = process.env.REACT_APP_API_KEY;

export const PUBLIC_VARIABLE = {
    apiEndpoint: 'https://api.example.com'
};

const secureApiCall = async (endpoint) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${SECURE_API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const fetchUserData = async (userId) => {
    return secureApiCall(`/users/${userId}`);
};

export { secureApiCall };

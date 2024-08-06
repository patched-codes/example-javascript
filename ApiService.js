// File: ApiService.js

import axios from 'axios';

// INCORRECT: Hard-coded API key
const API_KEY = 'abc123xyz789';

// CORRECT: Using environment variable for sensitive information
const SECURE_API_KEY = process.env.REACT_APP_API_KEY;

// INCORRECT: Exposing sensitive information in a public variable
export const PUBLIC_VARIABLE = {
    apiEndpoint: 'https://api.example.com',
    apiKey: API_KEY // This should not be exposed
};

// CORRECT: Secure API call function
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

// INCORRECT: Insecure API call function
const insecureApiCall = async (endpoint) => {
    try {
        const response = await axios.get(`https://api.example.com${endpoint}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

// CORRECT: Function that doesn't expose sensitive information
export const fetchUserData = async (userId) => {
    return secureApiCall(`/users/${userId}`);
};

// INCORRECT: Function that might leak sensitive information
export const fetchUserDataInsecure = async (userId) => {
    const result = await insecureApiCall(`/users/${userId}`);
    console.log('API Key used:', API_KEY); // This logs sensitive information
    return result;
};

// CORRECT: Using a .env file for configuration (this would be in a .env file, not in the code)
// REACT_APP_API_URL=https://api.example.com
// REACT_APP_API_KEY=your-secret-api-key

export { secureApiCall, insecureApiCall };

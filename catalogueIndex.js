// File: catalogueIndex.js
// INCORRECT: File name doesn't follow the convention (should start with capital letter)

import React, { useState } from 'react';
import { Grid, Button, Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/slices/catalogueSlice';

// CORRECT: Component name follows camelCase with initial capital letter
const CatalogueIndex = () => {
    // CORRECT: State naming convention
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    // INCORRECT: Poor state naming
    const [is_open, setIs_open] = useState(false);

    // CORRECT: Redux usage
    const dispatch = useDispatch();
    const currentProduct = useSelector((state) => state.catalogue.currentProduct);

    // CORRECT: Function naming and comment for complex logic
    const handleProductSelection = (productId) => {
        // This function handles the selection of a product, updates the Redux store,
        // and opens the product modal
        dispatch(setCurrentProduct(productId));
        setIsProductModalOpen(true);
    };

    // INCORRECT: Poor function naming and no comment for complex logic
    const doStuff = (x) => {
        dispatch(setCurrentProduct(x));
        setIs_open(true);
    };

    return (
        <Grid container spacing={2}>
            {/* Component content */}
            <Button onClick={() => handleProductSelection(1)}>Select Product 1</Button>
            <Button onClick={() => doStuff(2)}>Select Product 2</Button>
            <Modal open={isProductModalOpen} onClose={() => setIsProductModalOpen(false)}>
                {/* Modal content */}
            </Modal>
        </Grid>
    );
};

export default CatalogueIndex;

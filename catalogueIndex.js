// File: CatalogueIndex.js

import React, { useState } from 'react';
import { Grid, Button, Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/slices/catalogueSlice';

const CatalogueIndex = () => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const currentProduct = useSelector((state) => state.catalogue.currentProduct);

    const handleProductSelection = (productId) => {
        // This function handles the selection of a product, updates the Redux store,
        // and opens the product modal
        dispatch(setCurrentProduct(productId));
        setIsProductModalOpen(true);
    };

    // This function handles product selection and opens the modal
    const handleProductStuff = (productId) => {
        dispatch(setCurrentProduct(productId));
        setIsOpen(true);
    };

    return (
        <Grid container spacing={2}>
            {/* Component content */}
            <Button onClick={() => handleProductSelection(1)}>Select Product 1</Button>
            <Button onClick={() => handleProductStuff(2)}>Select Product 2</Button>
            <Modal open={isProductModalOpen} onClose={() => setIsProductModalOpen(false)}>
                {/* Modal content */}
            </Modal>
        </Grid>
    );
};

export default CatalogueIndex;

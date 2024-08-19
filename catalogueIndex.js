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
        dispatch(setCurrentProduct(productId));
        setIsProductModalOpen(true);
    };

    const doStuff = (x) => {
        dispatch(setCurrentProduct(x));
        setIsOpen(true);
    };

    return (
        <Grid container spacing={2}>
            <Button onClick={() => handleProductSelection(1)}>Select Product 1</Button>
            <Button onClick={() => doStuff(2)}>Select Product 2</Button>
            <Modal open={isProductModalOpen} onClose={() => setIsProductModalOpen(false)}>
            </Modal>
        </Grid>
    );
};

export default CatalogueIndex;
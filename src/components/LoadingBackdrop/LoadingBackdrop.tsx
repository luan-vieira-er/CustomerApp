import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

import { LoadingBackdropProps } from './types';

export const LoadingBackdrop: React.FC<LoadingBackdropProps> = ({ loading }) => {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

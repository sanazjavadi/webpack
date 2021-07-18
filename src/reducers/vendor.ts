/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVendorService } from '../services/api/vendor';

import { Vendor } from '../interface/state/index';

export const getVendor = createAsyncThunk('get/vendor', (page) => {
    return getVendorService(page);
});



const vendorSlice = createSlice({
    name: 'vendor',
    initialState: {
        vendor: [],
        loading: false,
        openCount: 0,
        count: 0,
    },
    reducers: {
        setVendor: (state, action) => {
            const note = action.payload;
            return {
                ...state,
                currentNote: note,
            };
        },
    },
    extraReducers: {
        [getVendor.pending as any]: (state) => {
            return { ...state, loading: true };
        },
        [getVendor.fulfilled as any]: (state, action) => {
            return { ...state, loading: false, vendor:  action.payload.finalResult , openCount: action.payload.open_count, count: action.payload.count  };
        },
    },
});

export const { setVendor } = vendorSlice.actions;
export const vendorState = (state: { vendor: any; }) => state.vendor;
export default vendorSlice.reducer;

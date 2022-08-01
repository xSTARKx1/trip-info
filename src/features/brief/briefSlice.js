import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchData } from './briefAPI';

const initialState = {
    status: 'idle',
    error: null,
    data: {
        brief: [],
        flightAlerts: []
    }
};

export const fetchBriefData = createAsyncThunk(
    'brief/fetchBrief',
    async () => {
        const response = await fetchData();
        return response.data;
    }
);


export const briefSlice = createSlice({
    name: 'brief',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBriefData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBriefData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            })
            .addCase(fetchBriefData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    },
});

export const selectAllBrief = (state) => {
    if (state.brief.data.brief) {
        return state.brief.data.brief
    }
   return [];
};

export const selectBrief = (state, briefId) => {
    if (state.brief.data.brief) {
        return state.brief.data.brief.find(({ id }) => id.toString() === briefId.toString())
    }
    return null;
}

export const flights = (state, flightIDs) => {
    const flights = [];
    if (state.brief.data.brief) {
        flightIDs.map(flightId => {
           const flight = state.brief.data.flightAlerts.find(({ id }) => flightId === id)
            if (flight) flights.push(flight);
        })
    }
    return flights;
}

export default briefSlice.reducer;

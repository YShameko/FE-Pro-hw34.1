import {createSlice} from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        destination: '',
        checkIn: null,
        checkOut: null,
        adults: 0,
        children: 0
    },
    reducers: {
        setUserData: (_, action) => action.payload
    }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
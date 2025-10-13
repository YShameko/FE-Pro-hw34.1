import {createAction, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

// =================================================================================================
const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: [],
    reducers: {
        setHotelsList: (_, action) => action.payload
    }
});

export const { setHotelsList } = hotelsSlice.actions;

export const fetchHotels = createAction('FETCH_HOTELS');

function* fetchHotelsHandler() {
    try {
        const list = yield call(async() => {
            const resp = await axios.get('https://yshameko.free.beeceptor.com/hotels');
            return resp.data;
        });
        yield put(setHotelsList(list));
    }
    catch(error) {
        console.error(error);
    }
}

export const hotelsSaga = function* () {
    yield takeLatest(fetchHotels, fetchHotelsHandler);
}

export default hotelsSlice.reducer;
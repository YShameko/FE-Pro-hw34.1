import {createAction, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

// =================================================================================================
const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: [],
    reducers: {
        setDestinationsList: (_, action) => action.payload
    }
});

export const { setDestinationsList } = destinationsSlice.action;

export const fetchDestinations = createAction('FETCH_DESTINATIONS');

function* fetchDestinationsHandler() {
    try {
        const list = yield call(async() => {
            const resp = await axios.get('https://yshameko.free.beeceptor.com//destination');
            return resp.data;
        });
        yield put(setDestinationsList(list));
    }
    catch(error) {
        console.error(error);
    }
}

export const destinationsSaga = function* () {
    yield takeLatest(fetchDestinations, fetchDestinationsHandler);
}

export default destinationsSlice.reducer;
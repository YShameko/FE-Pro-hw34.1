import {configureStore} from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import destinationsReducer, { destinationsSaga } from "./destinationsSlice";

const initialState = {
    userData: {
        destination: null,
        checkIn: null,
        checkOut: null,
        adults: 0,
        children: 0
    },
    destinations: [],
    // hotels: []
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        userData: userDataReducer,
        destinations: destinationsReducer,
        // hotels: hotelsReducer
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware, logger)
});

sagaMiddleware.run(destinationsSaga);
// sagaMiddleware.run(hotelsSaga);

export default store;
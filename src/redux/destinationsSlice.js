import {createAction, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: [],
    reducers: {
        setDestinationsList: (_, action) => action.payload
    }
});

export const { setDestinationsList } = destinationsSlice.actions;

export const fetchDestinations = createAction('FETCH_DESTINATIONS');

function* fetchDestinationsHandler() {
    try {
        const list = yield call(async() => {
            const resp = await axios.get('https://yshameko.free.beeceptor.com/destination');
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


    // const [error, setError] = useState(null); 
    // useEffect(() => {
    //     axios.get('https://yshameko.free.beeceptor.com/destination')
    //         .then(resp => {
    //             setDestinations(resp.data);
    //             setError(null); 
    //         })
    //         .catch(err => {
    //             console.error("Could not get data from the server:", err);
    //             setError("Could not get data from the server");
    //             setDestinations([ { 
    //                     id: 'dest-error', 
    //                     label: 'Error: Could not download the destinations',
    //                 }]); 
    //         });
    // }, []);

    
    // setDestinations([ { 
    //     id: '1', 
    //     label: 'Test destination 1',
    //     },
    // {   id: '2', 
    //     label: 'Test destination 2',
    //     },            
    // ]); 
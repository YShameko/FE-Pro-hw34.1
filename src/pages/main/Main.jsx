import React, { useEffect, useState } from "react";
import { Select, TextField, Button, MenuItem } from "@mui/material";
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; 
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import './main.style.css';

export default () => {
    const [currentDest, setCurrentDest] = useState(null);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('https://yshameko.free.beeceptor.com/destination')
            .then(resp => setDestinations(resp.data));
    }, []);

    const onDestChanged = e => {
        setCurrentDest(destinations.find(d => d.id === e.target.value));
    }

    return <div className="main-page">
        <div className="search">
            <Select value={currentDest?.id} label='Destination' onChange={onDestChanged} >
                {destinations.map(dest => {
                    return <MenuItem key={dest.id} value={dest.id}> {dest.label} </MenuItem>
                })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
                <DatePicker label='Check-in date' />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
                <DatePicker label='Check-out date' />
            </LocalizationProvider>
            <TextField label="Adults" variant="outlined" />
            <TextField label="Children" variant="outlined" />
            <Button variant="contained" color="warning" size="large"> 
                Submit
            </Button>
        </div>
    </div>
}

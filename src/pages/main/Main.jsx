import React, { useEffect, useState } from "react";
import { Select, TextField, Button, MenuItem } from "@mui/material";
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; 
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Form, Formik, useFormik } from "formik";
import { setUserData } from "../../redux/userDataSlice";
import { fetchDestinations } from "../../redux/destinationsSlice";
import './main.style.css';

export default () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            destination: '',
            checkIn: null,
            checkOut: null,
            adults: '',
            children: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.destination) {
                errors.destination = 'Can not be empty';
            }

            if (!values.checkIn) {
                errors.checkIn = 'Can not be empty';
            }

            if (!values.checkOut) {
                errors.checkOut = 'Can not be empty';
            }
            
            if (values.checkIn?.toDate() < new Date()) {
                errors.checkIn = 'Past dates are not allowed';
            }

            if (values.checkOut?.toDate() < new Date()) {
                errors.checkOut = 'Past dates are not allowed';
            }

            if (values.checkIn?.toDate() > values.checkOut?.toDate()) {
                errors.checkOut = 'Can not set date before check-in date';
            }

            if (!values.adults || values.adults < 1 || !Number.isInteger(values.adults)) {
                errors.adults = 'Invalid number';
            }

            if (values.children && (values.children < 0 || !Number.isInteger(values.children))) {
                errors.children = 'Invalid number';
            }

            return errors;
        },
        onSubmit: (values) => {
            dispatch(setUserData({...values, checkIn: +values.checkIn.toDate(), checkOut: +values.checkOut.toDate() }));
            navigate('/hotels');
            // alert(JSON.stringify(values, null, 2));
        }
    });

    const destinations = useSelector(state => state.destinations);

    const navigate = useNavigate('/hotels');

    useEffect(() => {
        dispatch(fetchDestinations());
    }, []);

    const onDestChanged = e => {
        const newValue = destinations.find(d => d.id === e.target.value);
        formik.setFieldValue('destination', newValue?.id);
    }

    const handleChange = (newValue, fieldName) => {
        formik.setFieldValue(fieldName, newValue);
    }

    return <div className="main-page">
        <form onSubmit={formik.handleSubmit} className="search">
            <div>
                <Select label='Destination' className="dest-select" name="destination" 
                    value={formik.values.destination} onChange={onDestChanged}
                >
                    {Array.isArray(destinations) && destinations.map(dest => {
                        return <MenuItem key={dest.id} value={dest.id}> {dest.label} </MenuItem>
                    })}
                </Select>
                <div>{formik.errors.destination}</div>
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
                    <DatePicker label='Check-in date' value={formik.values.checkIn} onChange={(val) => handleChange(val, 'checkIn')} />
                </LocalizationProvider>
                <div>{formik.errors.checkIn}</div>
            </div>
            
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
                    <DatePicker label='Check-out date' value={formik.values.checkOut} onChange={(val) => handleChange(val, 'checkOut')} />                    
                </LocalizationProvider>
                <div>{formik.errors.checkOut}</div>
            </div>
            
            <div>
                <TextField label="Adults" variant="outlined" className="persons-qty" 
                    name="adults" value={formik.values.adults} onChange={formik.handleChange}
                    type="number" min="1" step="1" InputProps={{
                        inputProps: { 
                            min: 1, 
                            step: 1
                        }
                    }} 
                />
                <div>{formik.errors.adults}</div>
            </div>

            <div>
                <TextField type="number" label="Children" variant="outlined" className="persons-qty"
                    name="children" value={formik.values.children} onChange={formik.handleChange}  
                     min="0" step="1" InputProps={{
                        inputProps: { 
                            min: 0, 
                            step: 1
                        }
                    }}                   
                />
                <div>{formik.errors.children}</div>
            </div>
            
            <Button type="submit" variant="contained" color="warning" size="large"> 
                Submit
            </Button>
        </form>
        <h3>Travel With Booking</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum error dignissimos in fugiat quia amet molestias obcaecati 
            facilis fuga tempore accusantium, tenetur ipsam quisquam tempora debitis eaque pariatur quaerat nihil.
        </p>
    </div>
}

import React, { useEffect } from "react";
import { fetchHotels } from "../../redux/hotelsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Card, CardContent, Typography, Rating, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import './hotels.style.css';

export default () => {
    const hotels = useSelector(state => state.hotels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    }, []);

    const HotelCard = ({ hotel }) => {
        const displayRating = Math.round(hotel.hotel_rating || 0); 
        const ratingText = hotel.hotel_rating > 0 ? `${hotel.hotel_rating} / 5` : 'No rating';        
        return (
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-lg h-[320px]" 
            sx={{ width: 350, minHeight: 240 }}>
                <CardContent className="flex flex-col flex-grow">
                    <Typography 
                        variant="h5" 
                        component="div" 
                        className="font-bold text-gray-800 mb-2 h-12" 
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        {hotel.name}
                    </Typography>
                    
                    <Box className="flex items-center mb-3" sx={{ paddingBottom: 1}}>
                        <Rating
                            value={displayRating}
                            precision={0.5}
                            readOnly
                            max={5}
                            emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
                        />
                        <Typography variant="body2" color="text.secondary" className="ml-2 font-medium">
                            Rating: {ratingText}                             
                        </Typography>
                    </Box>

                    <Box className="flex items-start mb-1">
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            className="h-10" 
                        >
                            Address: {hotel.address}, {hotel.city}, {hotel.state || " "}
                        </Typography>
                    </Box>
                    <Box className="flex items-start mb-1">
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            className="h-10" 
                        >
                            Country: {hotel.country_code || " "}
                        </Typography>
                    </Box>

                    {hotel.phone_number && (
                        <Box className="flex items-center mb-1">
                            <Typography variant="body2" color="text.secondary">
                                Tel: {hotel.phone_number}
                            </Typography>
                        </Box>
                    )}

                    <Box className="mt-auto pt-3">
                        <Typography variant="caption" color="text.disabled">
                            Hotel ID: {hotel.id}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return <div className="hotels">
        <h3> All our hotels are here:</h3>
        <Container maxWidth="xl" className="pt-10">
            <Grid container spacing={4} justifyContent="center">
                {hotels.map((hotel) => (
                    <Grid item key={hotel.id} className="flex">
                        <HotelCard hotel={hotel} />
                    </Grid>
                ))}
            </Grid>
        </Container>     
    </div>
}
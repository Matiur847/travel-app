import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Booking from '../page/Booking';
import SearchHotels from '../page/bookingGroup/SearchHotels';
import Home from '../page/Home';
import Login from '../page/Login';
import SignUp from '../page/SignUp';

const Router = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/booking/:id' element={<Booking />} />
        <Route path='/search/:hotelId' element={<SearchHotels />} />
    </Routes>
};

export default Router;
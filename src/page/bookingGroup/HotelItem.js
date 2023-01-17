import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import '../bookingGroup/HotelItem.css'
import star from './star.svg'

const HotelItem = (porps) => {

    const { hotel } = porps;

    // console.log(hotel)

    return (
        <div>
            <div className="item-container d-flex align-items-center justify-content-center">
                <div className="img">
                    <img src={hotel.image} alt="" className='w-100' />
                </div>
                <div className="detailsss">
                    <h4>Light bright airy stylish apt & safe peaceful stay!</h4>
                        <span>4 Guest</span>
                        <span>2 bedrooms</span>
                        <span>2 beds</span>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation fexibility available</p>
                    <div className="rate-price d-flex align-items-center justify-content-between">
                        <span><img src={star} alt="" />4.8(10)</span>
                        <span>$50/Night</span>
                        {/* <span>$167/night</span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelItem;
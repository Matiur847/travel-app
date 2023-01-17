import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { categoryContext } from '../../App';
import locations from '../../fakeData';
import HotelItem from './HotelItem';
import '../bookingGroup/SearchHotel.css'

const allHotels = [
    {
        id: 1,
        image: 'https://i.ibb.co/R260GQJ/Rectangle-26.png',
        title: 'Light bright airy stylish apt & safe peaceful stay',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.9 (20)',
        dollars: 34
    },
    {
        id: 2,
        image: 'https://i.ibb.co/2KGXjvq/Rectangle-27.png',
        title: 'Apartment in Lost Panorama',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.8 (10)',
        dollars: 52
    },
    {
        id: 3,
        image: 'https://i.ibb.co/R260GQJ/Rectangle-26.png',
        title: 'AR Lounge & Pool (r&r + b&b)',
        type: '4 guests  2 bedrooms  2 bed  2 baths ',
        type1: 'Wif Air conditioning Kitchen',
        type2: 'Cancellation fexibility available',
        star: '4.9 (25)',
        dollars: 44
    }
]

const SearchHotels = () => {

    const { hotelId } = useParams()
    const location = useLocation();

    console.log('ReciveData', location.state)

    const [hotels, setHotels] = useState({})

    useEffect(() => {
        const bookingLocation = locations.find(location => location.id.toString() === hotelId)
        setHotels(bookingLocation.hotels)
    }, [hotelId])

    console.log(hotels)

    return (
        <div>
            <section>
                <Container className='header'>
                    <Row className='hotel-container mt-5'>
                        <Col md='6'>
                            <div className="hotels">
                                {/* <div>{location.state && new Date(location.state.toDate).toLocaleDateString()}</div> */}
                                <span>From: {location.state &&  new Date(location.state.formDate).toLocaleDateString()}</span> <br />
                                <span>To: {location.state && new Date(location.state.toDate).toLocaleDateString()}</span>
                                <h3>All Hotels</h3>
                                {
                                    allHotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel} />)
                                }
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="google-maps">
                                <h3>Google Map</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24477493553!2d91.9328608802074!3d21.451043356313644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1673849237228!5m2!1sen!2sbd" height="auto" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    >
                                </iframe>
                            </div>
                        </Col>
                    </Row>
                    <br />

                </Container>
            </section>
        </div>
    );
};

export default SearchHotels;
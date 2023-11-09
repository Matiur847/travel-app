import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import locations from '../fakeData';
import LocationItem from './LocationItem';
import { BsArrowRight } from 'react-icons/bs'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../style/Home.css'


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const Home = () => {


    const [slideIndex, setSlideIndex] = useState(0)
    const [booking, setBooking] = useState({})

    useEffect(() => {
        const activeItem = locations.find((loctaion, index) => index.toString() === slideIndex.toString())
        setBooking(activeItem)
    }, [slideIndex])

    const onClickHandler = swiper => {
        if (swiper.clickedSlide) {
            if (swiper.clickedSlide.attributes) {
                var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
                setSlideIndex(a);
            }
        }
    }


    return (
        <div >
            <section>
                <Container className='forSpace'>
                    <Row className='align-items-center mt-5'>
                        <Col sm='4' xl='4'>
                            <div className="detail">
                                <h1>{booking.name}</h1>
                                <p>
                                    {booking.description?.slice(0, 200)}
                                </p>
                                <Link to={`/booking/${booking.id}`}>
                                    <Button className='btn-warning px-4'>Booking <BsArrowRight /> </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col sm='8' xl='8'>
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={3}
                                navigation
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false
                                }}
                                loop={true}
                                onClick={(swiper) => onClickHandler(swiper)}
                                onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                                >
                                    {locations.map(location => {
                                        return (<SwiperSlide key={location.id}>
                                            {({ isActive }) => (
                                                <LocationItem isActive={isActive} location={location}></LocationItem>
                                            )}
                                        </SwiperSlide>)
                                    })}
                            </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
        </div >
    );
};

export default Home;
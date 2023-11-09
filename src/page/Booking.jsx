import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import locations from '../fakeData';
import GetItem from './bookingGroup/GetItem';
import PickDate from './bookingGroup/PickDate';
import '../style/Booking.css'
import 'react-datepicker/dist/react-datepicker.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Booking = () => {


    const { id } = useParams()


    const [formDate, setFormDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000));
    const [booking, setBooking] = useState({
        location: {},
        origin: '',
        destination: ''
    })

    useEffect(() => {
        const bookingData = locations.find(location => location.id.toString() === id)
        setBooking(previousState => ({ ...previousState, location: bookingData, destination: bookingData.name }))
    }, [id])


    const onChangeHandler = e => {
        setBooking(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
        e.persist()
    }

    const searchNavigate = useNavigate()
    const navigate = useNavigate()


    const submitHandler = e => {

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(auth.currentUser)
            }
            else {
                alert('Please Login First')
                navigate('/login')
            }
        })

        // setBookingInfo({formDate, toDate})
        searchNavigate(`/search/${id}`, { state: {toDate, formDate}})
        e.preventDefault();
    }

    return (
        <div>
            <section>
                <Container className='forSpace'>
                    <Row className='mt-5'>
                        <Col sm='6' xl='6'>
                            <div className="detail">
                                <h1>{booking.location.name}</h1>
                                <p>
                                    {booking.location.description}
                                </p>
                            </div>
                        </Col>
                        <Col xl='1' />
                        <Col sm='6' xl='5'>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={submitHandler} autoComplete="off">
                                        <GetItem value={booking.origin}
                                            onChangeHandler={onChangeHandler} name="origin" label="Origin" placeholder="Origin" autoFocus />
                                        <GetItem value={booking.destination}
                                            onChangeHandler={onChangeHandler} name="destination" placeholder="Destination" label="Destination" />
                                            <Form>
                                            <PickDate label='From Date:' date={formDate} setDate={setFormDate} />
                                            <PickDate label='To Date:' date={toDate} setDate={setToDate} />
                                            </Form>
                                            <Button className="w-100 mt-3" variant="warning" type="submit">Start Booking</Button>
                                    </Form>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </section>
        </div>
    );
};

export default Booking;
import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonToolbar, Card, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Input, Row } from 'reactstrap';
import locations from '../fakeData';
import GetItem from './bookingGroup/GetItem';
import PickDate from './bookingGroup/PickDate';
import '../style/Booking.css'
import { enGB } from 'date-fns/locale'
import { FiCalendar } from 'react-icons/fi'
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { categoryContext } from '../App';

const Booking = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(("example"));


    const context = useContext(categoryContext)
    const {bookingInfo, setBookingInfo} = context;
    // console.log(bookingInfo)



    const { id } = useParams()


    // const [selectDate, setSelectDate] = useState(new Date());

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

    
    // useEffect(() => {
    //     const bookingData = locations.find(location => location.id.toString() === id)
    //     setBooking(() => ({location: bookingData, destination: bookingData.name}))
    // }, [id])

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


    // console.log( formDate)

    // const existingUser = () => {
        
        
    // }

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
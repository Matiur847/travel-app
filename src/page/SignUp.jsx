import { initializeApp } from 'firebase/app';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import configFirebase from '../firebase/Auth';


import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()



    const handleSignIn = (e) => {

        

        if (!firstName && !lastName && !email && !password && !confirmPassword) {
            setError('Please fill the form!')
        }
        else if (!firstName) {
            setError('Enter you first name')
        }
        else if (!lastName) {
            setError('Enter you first last name')
        }
        else if (!email) {
            setError('Enter you email')
        }
        else if (!password) {
            setError('Enter you password')
        }
        else if (!confirmPassword) {
            setError('Confirm password')
        }
        else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    console.log('fromGoogle', result)
                })
                .catch((error) => {
                    console.log(error.code)
                    if (error.code === 'auth/popup-closed-by-user') {
                        setError('Select your email again')
                    }
                    else if (error.code === 'auth/email-already-in-use') {
                        setError('Email already in use')
                    }
                    else if (error.code === 'auth/weak-password') {
                        setError('Take a strong Password')
                    }
                })
            setError('')
        }

        e.preventDefault();
    }

    return (
        <div>
            <section>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg='12'>
                            {/* <Card>
                                <Card.Body>
                                    <h1>Hello</h1>
                                </Card.Body>
                            </Card> */}
                            <div className="login-container">
                                <h3>Sign Up</h3>
                                <form>
                                    <input type='name' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}></input>
                                    <input type='name' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} ></input>
                                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} ></input>
                                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ></input>
                                    <input type='password' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                                    <p>{error}</p>
                                    <div className="login-btn text-center">
                                        <Button className='w-100 btn btn-warning mt-3 mb-3' onClick={handleSignIn}>Sign Up</Button>
                                    </div>
                                    <div className='text-center'>
                                        <Link to='/login'>
                                            <p >Already have an account? <span>Login</span></p>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <br />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default SignUp;
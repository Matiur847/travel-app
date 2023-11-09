import React, { useState } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Col, Container, Row } from 'react-bootstrap';
import '../style/Login.css'
import { Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate();



    const handleSignIn = (e) => {

        

        if (!name && !password) {
            setError('Please fill the form!')
        }
        else if(!name) {
            setError('Enter you name')
        }
        else if (!password) {
            setError('Enter you password')
        }
        else {
            setError('')

            const auth = getAuth();
            signInWithEmailAndPassword(auth, name, password)
                .then((result) => {
                    navigate('/home')
                    alert('Login Successful')
                })
                .catch((error) => {
                    if (error.code === 'auth/wrong-password') {
                        setError('Wrong password')
                    }
                    else if (error.code === 'auth/user-not-found') {
                        setError('Wrong email address')
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
                                <h3>Login</h3>
                                <form>
                                    <input placeholder='Username or Email' onChange={(e) => setName(e.target.value)}></input>
                                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ></input>
                                    <p>{error}</p>
                                    <div className="login-btn text-center">
                                        <Button className='w-100 btn btn-warning mt-3' onClick={handleSignIn}>Login</Button>
                                    </div>
                                    <div className='text-center'>
                                        <Link to='/signup'>
                                            <p className='mt-2'>Don't have an account? <span>Creact an account</span></p>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Login;
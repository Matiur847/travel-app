import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import '../../style/Header.css'
import logo from '../../fakeData/logo.png'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {

    const [existingName, setExistingName] = useState(null)
    const [user, setUser] = useState({ isSignedIn: false })

    const auth = getAuth()
    const handleSignIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userSlice = auth.currentUser.email.slice(0, 6);
                setExistingName(userSlice)
                const isSigninUser = {
                    isSignedIn: true
                }
                setUser(isSigninUser)
            }
        })
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('Logout Successful')
                const isSignOutUser = {
                    isSignedIn: false
                }
                setUser(isSignOutUser)
            })
            .catch((error) => {
                console.log('Somthing is wrong')
            });
    }

    return (
        <div className='navs'>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="nav-container d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="search-field">
                                    <input type="search" placeholder='Search Your Destination' />
                                </div>
                                <div className="menu">
                                    <Link to='/home'>Home</Link>
                                    <Link to='/home'>Destination</Link>
                                    <Link to='/home'>Blog</Link>
                                    <Link to='/home'>Contact</Link>

                                    {
                                        user.isSignedIn ? (
                                            <>
                                                <Link className='login'>{existingName}</Link>
                                                <Link onClick={handleLogout}>Logout</Link>
                                            </>
                                        ) : <Button className='btn btn-warning'>
                                            <Link to='/login' className='login' onClick={handleSignIn}>Login</Link>
                                        </Button>
                                    }

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Header;
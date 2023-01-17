import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import '../../style/Header.css'
import logo from '../../fakeData/logo.png'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {

    const [existingName, setExistingName] = useState(null)
    const [signoutMsg, setSignOutMsg] = useState()

    // console.log(existingName)

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if(user) {
            // console.log(auth.currentUser)
            const userSlice = auth.currentUser.email.slice(0, 6);
            setExistingName(userSlice)
        }
    })

    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth)
        .then(() => {
            console.log('signout successful')
        })
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
                                    <Link to='/home'>News</Link>
                                    <Link to='/home'>Destination</Link>
                                    <Link to='/home'>Blog</Link>
                                    <Link to='/home'>Contact</Link>
                                    
                                    {
                                        existingName === null ? <Button className='btn btn-warning'>
                                            <Link to='/login' className='login'>Login</Link>
                                        </Button> : (
                                            <>
                                                <Link className='login'>{existingName}</Link>
                                                <Link onClick={handleLogout}>Logout</Link>
                                            </>
                                        )
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
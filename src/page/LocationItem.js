import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../style/LocationItem.css'

const LocationItem = ({isActive, location}) => {

    const { name, image } = location;
    
    console.log()
    
    return (
        <Card className={`bg-transparent card-detail ${isActive ? 'active' : 'no-active'}`}>
            <Card.Img variant="top" className="img-fluid" src={image} />
            <Button className="bg-transparent booking">{name}</Button>
        </Card>
    );
};

export default LocationItem;
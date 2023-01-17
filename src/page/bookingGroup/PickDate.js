import React from 'react';
import { enGB } from 'date-fns/locale';
import  DatePicker  from 'react-datepicker';
import { Col, Form } from 'react-bootstrap';
import { FiCalendar } from 'react-icons/fi';



import 'react-datepicker/dist/react-datepicker.css'
import '../bookingGroup/PickDate.css'

const PickDate = ({ date, setDate, label }) => {
    return (
        <Form.Group as={Col}>
            <Form.Label className="form-title">{label}</Form.Label>
            <DatePicker selected={date} onChange={setDate} locale={enGB} />
        </Form.Group>
    );
};

export default PickDate;
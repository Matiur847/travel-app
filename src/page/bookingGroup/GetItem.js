import React from 'react';
import { Form } from 'react-bootstrap';

const GetItem = ({ type, name, label, value, onChangeHandler, customClass, placeholder, error, ...rest }) => {
    return (
        <div>
            <Form.Group controlId={name}>
                {label && <Form.Label className="form-title">{label}</Form.Label>}
                <Form.Control {...rest}
                    required className={`font-bold py-4 ${customClass}`}
                    name={name}
                    type={type || 'text'}
                    value={value}
                    onChange={(e) => onChangeHandler(e)}
                    isInvalid={!!error}
                    placeholder={placeholder} />
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
};

export default GetItem;
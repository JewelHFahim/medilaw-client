import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assests/error.jpg';
import './Error.css'

const Error = () => {
    return (
        <div className='relative'>
            <img src={error} alt="" />
            <p className='text-3xl position'>Back to <Link to="/" className='text-info underline' >Home</Link>  Page</p>
        </div>
    );
};

export default Error;
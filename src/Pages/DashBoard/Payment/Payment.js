import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

// REACT_APP_STRIPE_PK=pk_test_51M6WQFHDJfawfvtt90dPljTUGcvYeeqlwmr3eEkMS4I5I7vdfXxRx5qCQ7ITYhG0Q3ZM99mbtkdXM5Qgbz81J3Mq00bZzEuKXU

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointment, slot } = booking;
    return (
        <div>
            <h3 className='text-3xl'>payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointment} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>

            </div>

        </div>
    );
};

export default Payment;
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Cardinput from "./CardInput"
import stripeApi from '../../api/stripeApi';
import { message } from 'antd';
import "./card.css";
export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setemail] = useState('chikien9x@gmail.com')
    const [price, setprice] = useState(100 * 100)
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        var res = await stripeApi.poststripe({ email, price }).then(ok => {
            return ok.client_secret;
        })
        var clientSecret = res;
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            }
        });

        if (result.error) {
            message.warning("Số thẻ hoặc thông tin khác không hợp lệ!");
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                message.success("Thanh toán thành công!")
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Cardinput />
            <button className="btn-payment" disabled={!stripe}>Thanh toán</button>
        </form>
    );
}

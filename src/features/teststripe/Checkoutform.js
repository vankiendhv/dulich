import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from "axios"
import Cardinput from "./CardInput"
import stripeApi from '../../api/stripeApi';
import { message } from 'antd';
export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setemail] = useState('chikien9x@gmail.com')
    const [price, setprice] = useState(1)
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        // const res = await axios.post("http://localhost:666/payment", { email: email }).then(ok => {
        //     console.log(ok);
        //     clientSecret = ok.data['client_secret']
        // }).catch(err => {
        //     console.log(err);
        // })
        var res = await stripeApi.poststripe({ email, price }).then(ok => {
            //clientSecret = ok.client_secret;
            return ok.client_secret;
        })
        var clientSecret = res
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            }
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                message.success("Thanh toán thành công!")
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Cardinput />
            <button disabled={!stripe}>Confirm order</button>
        </form>
    );
}

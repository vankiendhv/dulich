import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Stripecheckout from "react-stripe-checkout"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import stripeApi from '../../api/stripeApi'
import axios from "axios"
import CheckoutForm from './Checkoutform';
const stripePromise = loadStripe("pk_test_51I0p5CE2oIGbiAkNsd7EJ9VZNaxZXtDMMfkcDD7s5WyP2PXM4hQ6qcSWGwlGtG4DFwWTFTVzr5AAxEaPYiAQBe6Z008USzew3a");
function Stripe(props) {
    const [product, setproduct] = useState({
        name: "dép lào",
        price: 10,
        productBy: "facebook"
    })
    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }
        // return stripeApi.poststripe({ token, product })
        // return axios.post("http://localhost:666/payment", { body: JSON.stringify(body) }).then(ok => {
        //     console.log(ok);
        // }).catch(err => {
        //     console.log(err, err.message);
        // })
        return fetch("http://localhost:666/payment", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(ok => {
            console.log(ok);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="">
            <h2 className="mt-5 text-center">Thanh toán online</h2>
            <div className="row mt-4">
                <div className="col-md-6"><div>
                    <p>Tour: Hải phòng</p>
                    <p>Tổng tiền: 10,000,000 vnđ</p>
                    <p>Quy đổi: 100 $</p>
                </div>
                </div>
                <div className="col-md-6">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

Stripe.propTypes = {

}

export default Stripe


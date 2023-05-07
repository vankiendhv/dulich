import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cardinput from "./CardInput";
import stripeApi from "../../api/stripeApi";
import { message } from "antd";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addhoadon, hoadonData } from "../container/admin/Hoadon/hoadonSlice";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import roomApi from "../../api/room";
export default function CheckoutForm(props) {
    const [btn, setBtn] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const email = props.email;
    const roomActive = props.roomActive;
    const services = props.services;
    const price = props.price * 100;
    const hoadon = props.hoadon;
    const totalMoney = props.totalMoney;
    const tentour = props.tentour;
    const thanhtien = props.thanhtien;
    const dispatch = useDispatch();
    const history = useHistory();
    const actionhoadon = async () => {
        await dispatch(hoadonData());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setBtn(false);
        var res = await stripeApi.poststripe({ email, price }).then((ok) => {
            return ok.client_secret;
        });
        var clientSecret = res;
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });
        if (result.error) {
            message.warning("Số thẻ hoặc thông tin khác không hợp lệ!");
        } else {
            if (result.paymentIntent.status === "succeeded") {
                Axios.post("http://localhost:666/sendemail/", {
                    thanhtien: totalMoney,
                    email: email,
                    tentour: tentour,
                });
                roomApi.offRoom({
                    ids: roomActive.map(r => r.id)
                })
                message.success("Thanh toán thành công!");
                dispatch(
                    addhoadon({
                        tourId: hoadon.tourId,
                        userId: hoadon.userId,
                        embe: hoadon.embe,
                        treem: hoadon.treem,
                        nguoilon: hoadon.nguoilon,
                        ngaydi: hoadon.ngaydi,
                        thanhtien: totalMoney,
                        hotel: JSON.stringify(roomActive),
                        service: JSON.stringify(services?.map(s => ({ id: s.id, name: s.name, price: s.price })))
                    }),
                );
                actionhoadon();
                history.push(`/`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Cardinput />
            {btn ? (
                <button className="btn-payment" disabled={!stripe}>
                    Thanh toán
                </button>
            ) : (
                <button className="btn-payment ac" disabled={false}>
                    Thanh toán
                </button>
            )}
        </form>
    );
}

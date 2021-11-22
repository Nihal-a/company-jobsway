import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import {useLocation} from 'react-router-dom'
import { stripePay } from "../../../api";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY);


function Stripepay(props) {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const location = useLocation
    const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    // const response  = stripePay(location.state.amount,company.company._id)

    // Create PaymentIntent as soon as the page loads
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

    return (
        <div>
            {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </div>
    )
}

export default Stripepay






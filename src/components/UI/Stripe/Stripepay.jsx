import React,{useState} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router'
import CheckoutForm from './CheckoutForm'
import { fetchStripeIntent } from '../../../api/payments'



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY)

const Stripepay = () => {
  const [clientSecret, setClientSecret] = useState("")
  const location = useLocation()

  fetchStripeIntent({planName : location.state}).then(({data}) => {
    setClientSecret(data.clientSecret)
  })

  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  

  return (
    <div className="">
    {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    )}
   </div>
  )
}

export default Stripepay

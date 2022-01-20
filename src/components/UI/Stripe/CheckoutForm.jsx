// import React, { useEffect, useState } from 'react'
// import {PaymentElement , useStripe , useElements} from "@stripe/react-stripe-js"
// import styles from "./stripe.module.css"
// import toast from 'react-hot-toast';

// const CheckoutForm = () => {

//   const stripe = useStripe();
//   const elements = useElements();

//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

    
//     useEffect(() => {
//       if (!stripe) {
//         return;
//       }
  
//       const clientSecret = new URLSearchParams(window.location.search).get(
//         "payment_intent_client_secret"
//       );
  
//       if (!clientSecret) {
//         return;
//       }
  
//       stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//         switch (paymentIntent.status) {
//           case "succeeded":
//             console.log("successsss");
//             toast.success('Success')
//             break;
//             case "processing":
//               console.log("Your payment is processing.");
//               break;
//               case "requires_payment_method":
//             console.log("reqqqqqqqqqq");
//             toast.error('Your payment was not successful, please try again.')
//             break;
//             default:
//             console.log("wpronngggggg");
//             toast.error('Something Went wrong.')
//             break;
//         }
//       });
//     }, [stripe]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         // Make sure to change this to your payment completion page
//         return_url: "http://localhost:3002/jobs",
//       },
//     });

//     if (error.type === "card_error" || error.type === "validation_error") {
//       setMessage(error.message);
//     } else {
//       setMessage("An unexpected error occured.");
//     }

//     setIsLoading(false);
//   };

//   return (
//    <div className="w-screen h-screen flex flex-col items-center justify-center">
//      <h3 className="text-primary my-4 text-2xl font-semibold">Pay with Stripe.</h3>
//       <form id="payment-form" onSubmit={handleSubmit} className={styles.paymentForm}>
//       <PaymentElement id="payment-element" className={styles.paymentElement}/>
//       <button disabled={isLoading || !stripe || !elements} id="submit" className={styles.payButton}>
//         <span id="button-text">
//           {isLoading ? <div className={styles.spinner} id="spinner"></div> : "Pay now"}
//         </span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message" className={styles.paymentMessage}>{message}</div>}
//     </form>
//    </div>
//   )
// }

// export default CheckoutForm

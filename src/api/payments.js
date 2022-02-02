import axios from 'axios'

// const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})
const API = axios.create({ baseURL:'http://companyapi.jobsway.online/api/v1/company'})




//payment
export const addFreePlan = ({hrId , jobId}) => API.post(`/add-free-plan/${hrId}`, {jobId })
export const payment = (amount,hrId) => API.post(`/razorpay/addjobpayment/${hrId}`,amount)
export const stripePay = (amount,id) => API.post(`/stripe-intent/${id}`,amount)
export const verifyPayment = ({response,order,transactionDetails}) => API.post('/razorpay/verify-payment',{response,order,transactionDetails})
export const addTransaction = ({transactionDetails , hrId}) => API.post(`/update-job-transaction/${hrId}`,transactionDetails)
export const fetchStripeIntent = (plan) => API.post('/create-payment-intent',plan)
